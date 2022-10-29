import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { saveEditedProfile } from "./profile-reducer";

// inline style
const bannerStyle= {objectFit: "cover", height: 120}
const nudge = {"top": "5.5rem"}

// helper function
function formatBirthDate(birthdate) {
    let date = new Date(birthdate);

    const offset = date.getTimezoneOffset()
    date = new Date(date.getTime() - (offset*60*1000))
    return date.toISOString().split('T')[0]

}

const EditProfile = () => {
    const originalProfile = useSelector(state => state.profile);
    const dispatch = useDispatch();

    let [name, setName] = useState(originalProfile.firstName + ' ' + originalProfile.lastName);
    let [bio, setBio] = useState(originalProfile.bio);
    let [location, setLocation] = useState(originalProfile.location);
    let [website, setWebsite] = useState(originalProfile.website);
    let [dateOfBirth, setDateOfBirth] = useState(originalProfile.dateOfBirth);

    const saveProfileHandler = () => {
        let newProfile = {
            name,
            bio,
            location,
            website,
            dateOfBirth
        }
        
        dispatch(saveEditedProfile(newProfile));
    }

    return(
        <>
        <div className="container">
            <div className="bg-white clearfix p-1">
                <Link to='/tuiter/profile'>
                    <i className="fs-4 mt-2 fa-solid fa-xmark float-start" onClick={()=> originalProfile}></i>  
                </Link>
                <h3 className="fw-bold mt-1 mx-5 float-start">Edit Profile</h3>
                <div className="float-end ms-5">
                    <Link to='/tuiter/profile'>
                        <button className="btn btn-dark fw-bold rounded-pill" 
                        onClick={saveProfileHandler}> Save </button>
                    </Link>
                </div>
            </div>

            <div className="mt-1 position-relative" >
                <img className="w-100" style={bannerStyle} 
                    src={`../img/${originalProfile.bannerPicture}`} alt="banner"/>
                    <div className="position-absolute w-100" style={nudge}>

                    <img className="bg-white rounded-pill ms-2" height={60} style={nudge}
                    src={`../img/${originalProfile.profilePicture}`} alt="profile"/>
                    
                    {/* {EditForm} */}
                    <form className="mt-3">
                        <div className="form-group mb-3  border rounded">
                            <label htmlFor="inputName" className="ps-3 pt-1 text-secondary">Name</label>
                                <input type="text" className="ps-3 form-control border border-0" 
                                id="inputName" placeholder="Name" value={name} 
                                onChange={(e) => setName(e.target.value)}
                                />
                        </div>
                                <div className="form-group mb-3 border rounded">
                                    <label htmlFor="inputBio" className="ps-2 pt-1 text-secondary">Bio</label>
                                        <textarea rows={3} className="ps-2 form-control border border-0" 
                                        id="inputBio" placeholder="Bio" value={bio} 
                                        onChange={(e) => setBio(e.target.value)}
                                        />
                                </div>
                                <div className="form-group mb-3 border rounded">
                                    <label htmlFor="location" className="ps-2 pt-1 text-secondary">Location</label>
                                        <input type="text" className="ps-2 form-control border border-0" 
                                        onChange={(e) => setLocation(e.target.value)}
                                        id="location" placeholder="Location" value={location} />
                                </div>
                                <div className="form-group mb-3 border rounded">
                                    <label htmlFor="website" className="ps-2 pt-1 text-secondary">Website</label>
                                        <input type="text" className="ps-2 form-control border border-0" 
                                        onChange={(e) => setWebsite(e.target.value)}
                                        id="website" placeholder="Website" value={website}  />
                                </div>
                                <div className="form-group mb-3 ">
                                <label htmlFor="birhdate" className="ps-2 pt-1 text-secondary">Birthdate · <span style={{color:'#2E9AFE'}}>Edit</span></label>
                                        <input type="date" className="ps-2 form-control border border-0" 
                                        id="birthdate" value={formatBirthDate(dateOfBirth)}    
                                        onChange={(e) => setDateOfBirth(e.target.value)}
                                        />
                                </div> 
                            <div className="form-group mt-4 clearfix">
                                <h4 className="fs-5 float-start"> Switch to professional</h4> 
                                <i className="text-secondary fa-solid fa-chevron-right float-end me-3"></i>
                            </div>
                        </form>

                    </div>
            </div>
        </div>
        </>

    )
}


export default EditProfile;