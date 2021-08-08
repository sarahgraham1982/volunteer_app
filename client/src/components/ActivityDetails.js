import React from 'react';

const ActivityDetails = ({activity}) => {

  return (
    <div>
      <h1>{activity.title}</h1>
      <button>More Details</button>
      <hr></hr>
    </div>
  )
}

export default ActivityDetails;