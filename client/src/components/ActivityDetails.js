import React from 'react';

const ActivityDetails = ({activity}) => {

  return (
    <div>
      <h1>{activity.title}</h1>
      <p>{activity.charity}</p>
      <p>{activity.duration}</p>
      <p>{activity.location}</p>
      <button>More Details</button>
      <hr></hr>
    </div>
  )
}

export default ActivityDetails;