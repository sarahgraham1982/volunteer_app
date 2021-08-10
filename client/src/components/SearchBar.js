import React from 'react';
import '../css/SearchBar.css';

const SearchBar = ({getActivitiesByCharity, resetActivities, charities}) => {

  const reset = (event) => {
    event.preventDefault()
    resetActivities()
  }

  return (
    <>
    <div className="search-bar">
      <p>Search by charity: </p>
      <select onChange={getActivitiesByCharity}>
        <option default value="" selected disabled>Select a Charity</option>
        {charities.map((charity)=>{
          return <option key={charity._id} value={charity._id}>{charity.name}</option>
        })}
      </select>  
      <button onClick={reset}>Reset Search</button>
    </div>
    </>
  )

}

export default SearchBar;