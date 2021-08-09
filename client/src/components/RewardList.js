import React from 'react';
import RewardDetails from './RewardDetails';

const RewardList = ({ rewards, redeemReward }) => {


  const rewardsList = rewards.map((reward) => {
    return (
      <RewardDetails
        key={reward._id}
        reward={reward}
        redeemReward={redeemReward}
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