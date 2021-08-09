import React from 'react';
import ActivityDetails from './ActivityDetails';

const ActivityList = ({activities}) => {

  const activitiesList = activities.map((activity, index) => {
    return (
      <>
        <h3>Your Activites:</h3>
        <hr/>
        <ActivityDetails
          key={index}
          activity={activity}
        />
      </>
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