import React from 'react';
import RewardDetails from './RewardDetails';

const RewardList = ({ rewards, redeemReward, user }) => {

  const rewardsList = rewards.map((reward) => {
    const redeemed = user.redeemedRewards.map((reward) => reward._id).includes(reward._id)
    return (
      <RewardDetails
        key={reward._id}
        reward={reward}
        redeemReward={redeemReward}
        redeemed={redeemed}
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