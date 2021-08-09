import React, { useEffect, useState } from 'react';
const Rewards = ({ category }) => {
  const [setRewards] = useState([]);
  useEffect(() => {
    loadRewards(category[2].url)
  })
  const loadRewards = url => {
    fetch(url)
      .then(res => res.json())
      .then(rewardsList => {
        return setRewards(Rewards.feed.entry);
      })
      .catch(err => console.error);
  }
  const handleSelectChange = event => {
    loadRewards(event.target.value);
  }
  return (
    <>
      <h4>Rewards!</h4 >
      < Rewards
        handleSelectChange={handleSelectChange}
        category={category}
      />
    </>
  )
};
export default Rewards;