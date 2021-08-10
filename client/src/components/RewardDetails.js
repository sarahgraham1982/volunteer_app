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
    <div>
      <h2>{reward.title}</h2>
      <p>{reward.company}</p>
      <p>{reward.description}</p>
      <p>{reward.points}</p>
      <p>{new Date(reward.expiryDate).toDateString()}</p>
      <p>{reward.category}</p>
      {displayRedeem()}
      {message && <p>{message}</p>}
      <hr></hr>
    </div>
  );
};

export default RewardDetails;
