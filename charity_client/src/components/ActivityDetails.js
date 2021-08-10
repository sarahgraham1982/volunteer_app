import React from 'react';

const ActivityDetails = ({activity}) => {

  return (
    <div>
      <h4>{activity.title}</h4>
      <p>{activity.duration}</p>
      <p>{activity.location.description}</p>
      <p>{activity.description}</p>
      {/* <p>{activity.applications}</p> IT DOESN"T LIKE THIS OBJECT */}
    </div>
  )
}

export default ActivityDetails;