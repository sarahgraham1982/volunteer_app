import React from 'react';
import '../css/RewardDetails.css';

import { useState } from "react";


const RewardDetails = ({ reward, redeemReward, redeemed }) => {
  const [message, setMessage] = useState(null);
  function handleSetMessage(message) {
    setMessage(message.message);
  }

  function displayRedeem() {
    if (redeemed)
      return <div>REDEEMED</div>;
    return (
      <button onClick={() => redeemReward(reward, handleSetMessage)}>
        Redeem This Reward
      </button>
    );
  }

  return (
    <div className="reward-detail">
      <h2>{reward.title}</h2>
      <p><h3>Brand: {reward.company}</h3></p>
      <p>Description: {reward.description}</p>
      <p>Points: {reward.points}</p>
      <p>Expiry Date: {new Date(reward.expiryDate).toDateString()}</p>
      <p>Reward Category: {reward.category}</p>
      {displayRedeem()}
      {message && <p>{message}</p>}
      <hr></hr>
    </div>
  );
};

export default RewardDetails;
