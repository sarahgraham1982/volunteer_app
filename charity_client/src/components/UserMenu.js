import React from 'react';

const UserMenu = ({ allCharities, handleChange }) => {

  return (
    <>
      <h4>Change User:</h4>
      <select onChange={handleChange}>
        {allCharities.map((charity) => {
          return <option key={charity._id} value={charity._id}>{charity.name}</option>;
        })}
      </select>
    </>
  );
};

export default UserMenu;
