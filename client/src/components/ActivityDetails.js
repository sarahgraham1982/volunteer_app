import React from 'react';
import Collapsible from 'react-collapsible';
import '../css/ActivityDetails.css';

const ActivityDetails = ({activity}) => {

  return (
    <div className="activity-detail">
      <h1>{activity.title}</h1>
      <h4>Charity: {activity.charity.name}</h4>
      <p>Duration: {activity.duration}</p>
      <p>Location: {activity.location.description}</p>
      <Collapsible trigger="More Details >>">
        <p>{activity.description}</p>
        <button>Apply Now!</button>
      </Collapsible>
      <hr></hr>
    </div>
  )
}

export default ActivityDetails;