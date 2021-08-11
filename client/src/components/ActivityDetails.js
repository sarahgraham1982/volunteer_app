import React from 'react';
import Collapsible from 'react-collapsible';
import '../css/ActivityDetails.css';

const ActivityDetails = ({ activity, apply, applied }) => {
  const datetime = new Date(activity.datetime)
  return (
    <div className="activity-detail">
      <h1>{activity.title}</h1>
      <p>Date: {datetime.toDateString()} </p>
      <p>Time: {datetime.toLocaleTimeString()}</p>
      <h4>Charity: {activity.charity.name}</h4>
      <p>Duration: {activity.duration}</p>
      <p>Location: {activity.location.description}</p>
      <Collapsible trigger="More Details">
        <p>{activity.description}</p>
        {applied ? (
          <div>APPLIED</div>
        ) : (
          <button onClick={() => apply(activity)}>Apply Now!</button>
        )}
      </Collapsible>
      
    </div>
  );
};

export default ActivityDetails;
