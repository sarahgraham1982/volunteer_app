import React from 'react';
import ActivityDetails from './ActivityDetails';

const ActivityList = ({activities}) => {

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
      {activitiesList}
      <button>Create New Activity</button>
    </div>
  );
}

export default ActivityList;