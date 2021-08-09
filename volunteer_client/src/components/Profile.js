//this will display your profile information and allow you to edit your user info
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ActivityDetails from "./ActivityDetails.js";

const Profile = ({ user }) => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    if (!user) return
    fetch("http://localhost:5000/api/activities/")
      .then((res) => res.json())
      .then((activities) => {
        const myActivityies = [];
        activities.forEach((activity) => {
          activity.applications.forEach((application) => {
            if (application.user._id === user._id) {
              myActivityies.push(activity);
            }
          });
        });
        setActivities(myActivityies)
      });
  }, [user]);
  if (!user) return "loading...";
  return (
    <div>
      <h2>{user.fullName}'s' profile!</h2>
      <h3>About Me</h3>
      <p>{user.aboutMe}</p>
      <h3>Points</h3>
      <p>{user.noOfPoints}</p>
      <h3>My Activities</h3>
      {activities.map(activity => {
        return <ActivityDetails key={activity._id} activity={activity} />
      }) }
    </div>
  );
};

export default Profile;
