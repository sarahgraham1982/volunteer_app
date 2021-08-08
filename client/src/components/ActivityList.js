import React from 'react';
import ActivityDetails from './ActivityDetails';

const ActivityList = ({activities, toggleDisplay}) => {

  const activitiesList = activities.map((activity, index) => {
    return (
      <ActivityDetails
        key={index}
        activity={activity}
      />
    )
  });

  return (
    <div>
      <button onClick={toggleDisplay}>Map View</button>
      {activitiesList}
    </div>
  );
}

export default ActivityList;