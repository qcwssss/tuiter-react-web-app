import { createSlice } from "@reduxjs/toolkit";
import profile from "./profile.json"; 


const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        saveEditedProfile(state, action) {
            let updatedProfile = action.payload;
            let [firstName, ...lastName] = updatedProfile.name.split(' ');
            lastName = lastName.join('')
            // console.log(updatedProfile.name)
            // console.log(updatedProfile)
            const bio = updatedProfile.bio;
            const location = updatedProfile.location;
            const website = updatedProfile.website;
            const [year, month, day] = updatedProfile.dateOfBirth.split('-');
            const dateOfBirth = [month, day, year].join('/');
            return {...state, firstName, lastName, bio, location, website, dateOfBirth}
        },
    }

});

export default profileSlice.reducer;
export const {saveEditedProfile} = profileSlice.actions