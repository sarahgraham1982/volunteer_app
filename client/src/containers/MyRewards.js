import RewardList from '../components/RewardList'

const MyRewards = ({user}) => (
  <div>
    <h4>My Rewards!</h4>
    <RewardList
    rewards = {user.redeemedRewards}/>
  </div>
);

export default MyRewards;