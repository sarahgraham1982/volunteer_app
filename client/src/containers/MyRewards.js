import RewardList from "../components/RewardList";

const MyRewards = ({ user }) => {
  if (!user) return "loading";
  return (
    <div>
      <h4>My Rewards!</h4>
      <RewardList rewards={user.redeemedRewards} user={user}/>
    </div>
  );
};

export default MyRewards;
