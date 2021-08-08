import React from "react";
import { Link } from "react-router-dom";
import Profile from "../components/Profile.js";

const MyAccount = ({ user }) => {
  return (
    <>
      <Profile user={user} />
      <div>
        <Link to="#"> Edit </Link>
      </div>
      <div>
        <Link to="/myrewards">My Rewards</Link>
      </div>
    </>
  );
};

export default MyAccount;
