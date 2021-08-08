//this will display your profile information and allow you to edit your user info
import React from "react";
import { useEffect } from "react";

const Profile = ({user}) => {
  useEffect(() => {
    fetch("http://localhost:5000/api/activities/")
    .then(res => res.json())
    .then(activities => {
      console.log(activities)
      })
  }, [])
  if (!user) return "loading..."
  console.log(user)
  return (
  <div>
    <h2>{user.fullName}'s' profile!</h2>
    <h3>About Me</h3>
    <p>{user.aboutMe}</p>
    <h3>Points</h3>
    <p>{user.noOfPoints}</p>
  </div>
  )

};

export default Profile;