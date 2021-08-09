//this will be a list of the rewards you have redeemed points for and a list of rewards you have used

const MyRewards = ({user}) => (
  <div>
    <h4>My Rewards!</h4>
    <RewardList
    rewards = {user.redeemedRewards}/>
  </div>
);

export default MyRewards;