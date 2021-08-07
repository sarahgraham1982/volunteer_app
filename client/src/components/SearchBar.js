import React from 'react';

const SearchBar = ({filter, getActivitiesByPostcode, getActivitiesByCharity, resetActivities}) => {

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
        <option value="charity1'sid">charity1</option>
        <option value="charity2'sid">charity2</option>
        <option value="charity3'sid">charity3</option>
        <option value="charity4'sid">charity4</option>
        <option value="charity5'sid">charity5</option>
        <option value="charity6'sid">charity6</option>
        <option value="charity7'sid">charity7</option>
      </select>  
      <button onClick={reset}>Reset Search</button>
    </>
  )

}

export default SearchBar;