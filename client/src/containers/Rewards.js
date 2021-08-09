import React, { useEffect, useState } from 'react';

const Rewards = ({ category }) => {

  console.log(category)

  const [rewards, setRewards] = useState([]);
  useEffect(() => {
    loadRewards(.url)
  }, [])

  const loadRewards = url => {
    fetch(url)
      .then(res => res.json())
      .then(rewardsList => {
        return setRewards(rewardsList);
      })
      .catch(err => console.error);
  }

  const handleSelectChange = event => {
    loadRewards(event.target.value);
  }

  return (

    <>
      <h4>Rewards!</h4>

      {rewards.map((reward) => {
        return <option key={reward._id} value={reward._id} selected={reward._id}>{reward.fullName}</option>;
      })}
    </>

  )
};


export default Rewards;