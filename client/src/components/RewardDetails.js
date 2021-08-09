import React from 'react';

const RewardDetails = ({reward}) => {

  return (
    <div>
      <h1>{reward.title}</h1>
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