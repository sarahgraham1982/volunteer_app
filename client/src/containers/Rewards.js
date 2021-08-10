import React, { useEffect, useState } from 'react';
import RewardList from '../components/RewardList';
import '../css/Rewards.css';

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
      <h1>Get Rewards </h1>
      <RewardList  
      rewards = {rewards}/>
    </>
  )
};


export default Rewards;