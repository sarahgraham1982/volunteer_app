import React, { useEffect, useState } from 'react';
import RewardList from '../components/RewardList';

const Rewards = () => {

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
      <h4>Rewards! this is the rewards.js page nothing else </h4>
      {rewards.map((reward) => {
        console.log(reward)
        return <p key={reward._id} value={reward._id} selected={reward._id}>{reward.name}</p>
      })}
    </>
  )
};


export default Rewards;