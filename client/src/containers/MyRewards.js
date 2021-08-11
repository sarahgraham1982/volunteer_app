import RewardList from "../components/RewardList";
import '../css/MyRewards.css';

const MyRewards = ({ user }) => {
  if (!user) return "loading";
  return (
    <div className="my-reward-title">
      <h4>My Rewards!</h4>
      <RewardList rewards={user.redeemedRewards} user={user} category={"all"}/>
    </div>
  );
};

export default MyRewards;
