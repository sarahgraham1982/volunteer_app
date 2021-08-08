import React from 'react';
import Collapsible from 'react-collapsible';

const ActivityDetails = ({activity}) => {

  return (
    <div>
      <h1>{activity.title}</h1>
      <p>{activity.duration}</p>
      <p>{activity.location.description}</p>
      <Collapsible trigger="More Details>>">
        <p>{activity.description}</p>
        <button>Apply Now!</button>
      </Collapsible>
      <hr></hr>
    </div>
  )
}

export default ActivityDetails;