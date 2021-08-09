import React, { useEffect, useState } from 'react';
import RewardList from '../components/RewardList';

const Rewards = ({redeemReward, user}) => {

  const url = "http://localhost:5000/api/rewards"
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    loadRewards(url)
  }, [])

  const loadRewards = url => {
    fetch(url)
      .then(res => res.json())
      .then(rewardsList => { setRewards(rewardsList) })
      .catch(err => console.error(err));
  }

  const handleSelectChange = event => {
    loadRewards(event.target.value);
  }

  return (

    <>
      <h4>Get Rewards </h4>
      <p><strong>Your Points:</strong> {user.noOfPoints}</p>
      <RewardList  
      rewards = {rewards}
      redeemReward={redeemReward}/>
    </>
  )
};


export default Rewards;