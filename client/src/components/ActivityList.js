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
    </div>
  );
}

export default ActivityList;