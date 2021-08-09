import React from 'react';
import RewardDetails from './RewardDetails';

const RewardList = ({ rewards }) => {


  const rewardsList = rewards.map((reward, index) => {
    return (
      <RewardDetails
        key={index}
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