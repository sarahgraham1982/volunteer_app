import React from 'react';

const SearchBar = ({filter, getActivitiesByPostcode, getActivitiesByCharity, resetActivities, charities}) => {

  const handleChange = (event) => {
    event.preventDefault()
    getActivitiesByPostcode(event.target.value)
  }

  const reset = (event) => {
    event.preventDefault()
    resetActivities()
  }

  return (
    <>
      <p>Search by postcode:
        <input 
          id="filter" 
          name="filter" 
          type="text"
          value={filter}
          onChange={handleChange}/>
      </p>
      <span>Search by Charity: </span>
      <select onChange={getActivitiesByCharity}>
        <option default value="" selected disabled>Select a Charity</option>
        {charities.map((charity)=>{
          return <option key={charity._id} value={charity._id}>{charity.name}</option>
        })}
      </select>  
      <button onClick={reset}>Reset Search</button>
    </>
  )

}

export default SearchBar;