import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Profile from "../components/Profile.js";
import ActivityDetails from "../components/ActivityDetails.js";
import { getActivities } from "../services/ActivitiesService.js";

const MyAccount = ({ user }) => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    if (!user) return;
    getActivities()
      .then((activities) => {
        const myActivityies = [];
        activities.forEach((activity) => {
          activity.applications.forEach((application) => {
            if (application.user._id === user._id) {
              myActivityies.push(activity);
            }
          });
        });
        setActivities(myActivityies);
      });
  }, [user]);
  return (
    <>
      <Profile user={user} />
      <Link to="/editprofile">Edit Profile</Link>
      <h3>My Activities</h3>
      {activities.map((activity) => {
        return (
          <ActivityDetails
            applied={true}
            key={activity._id}
            activity={activity}
          />
        );
      })}
      <div>
        <Link to="/myrewards">My Rewards</Link>
      </div>
    </>
  );
};

export default MyAccount;
