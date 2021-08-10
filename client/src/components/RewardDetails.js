import React from 'react';
import '../css/RewardDetails.css';

const RewardDetails = ({reward}) => {

  return (
    <div>
      <h2>{reward.title}</h2>
      <p>{reward.company}</p>
      <p>{reward.description}</p>
      <p>{reward.points}</p>
      <p>{new Date(reward.expiryDate).toDateString()}</p>
      <p>{reward.category}</p>
      <hr></hr>
    </div>
  )
}

export default RewardDetails;