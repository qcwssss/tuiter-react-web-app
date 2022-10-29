import React from "react";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

// inline style
const bannerStyle= {objectFit: "cover"}
const nudge = {"height": "60%", "left": "5%", "bottom": "-30%"}

// Date Conversion
const convertDate = (dateStr, isJoin) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    let arr = dateStr.split("/")
    let month = monthNames[arr[0] - 1];
    let day = arr[1];
    let year = arr[2];

    let result = ! isJoin ? month + " " + day + ", " + year : month + " " + year;
    return result;
}

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    const name = profile.firstName + " " + profile.lastName;
    return(
        <div className="container">
            <div className="row bg-white">
                <div className="col-2 d-flex align-items-center">
                    <i className="fs-4 fa-solid fa-arrow-left"></i>
                </div>
                <div className="col-10 m-auto block">
                    <h2 className="fw-bold mb-0">{name}</h2>
                    <span className="text-secondary">{profile.tweetsCount} Tweets</span> 
                </div>
            </div>
            <div className="mt-1 position-relative" >
                <img className="w-100" style={bannerStyle} height={90} src={`../img/${profile.bannerPicture}`} alt="banner"/>
                <img className="bg-white position-absolute rounded-pill" style={nudge} height={50} src={`../img/${profile.profilePicture}`} alt="profile"/>
            </div>
            <Link to="/tuiter/edit-profile" className="clearfix">
                <button className="btn btn-light rounded-pill float-end mt-2 fw-bolder">
                    Edit Profile
                </button>
            </Link>
            <div className="mt-2 ">
                <h2 className="fw-bolder">{name}</h2>
                <p className="text-secondary">{profile.handle}</p>
            </div>
            <div>
                <p>{profile.bio}</p>
                <div className="text-secondary clearfix">
                    <div className="float-start">
                        <i className="bi bi-geo-alt"></i> {profile.location}
                    </div>
                    <div className="float-start ms-4">
                        <i className="bi bi-calendar ms-2"></i> Born {convertDate(profile.dateOfBirth, false)}
                    </div>
                    <div className="float-start ms-4">
                        <i className="bi bi-balloon ms-2"></i> Joined {convertDate(profile.dateJoined, true)}
                    </div>
                </div>
             
                <div className="pt-2 clearfix">
                    <div className="float-start">
                        <span className="fw-bolder">{profile.followingCount}</span> <span className="text-secodary">Following</span>
                    </div>
                    <div className="float-start ms-4">
                        <span className="fw-bolder">{profile.followersCount}</span> <span className="text-secodary">Followers</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent;