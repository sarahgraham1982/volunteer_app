import React from 'react';
import RewardDetails from './RewardDetails';

const RewardList = ({ rewards }) => {


  const rewardsList = rewards.map((reward) => {
    return (
      <RewardDetails
        key={reward._id}
        reward={reward}
      />
    )
  });

  return (
    <div>
      {rewardsList}
    </div>
  );
}

export default RewardList;