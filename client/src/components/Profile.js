//this will display your profile information and allow you to edit your user info
import React from "react";
import {ageFromDOB} from "../helpers/helpers"

const Profile = ({ user }) => {
  
  if (!user) return "loading...";
  return (
    <div>
      <h2>{user.fullName}'s' profile!</h2>
      <p><strong>Age:</strong> {ageFromDOB(new Date(user.dob))}</p>
      <h3>About Me</h3>
      <p>{user.aboutMe}</p>
      <h3>Points</h3>
      <p>{user.noOfPoints}</p>
    </div>
  );
};

export default Profile;
