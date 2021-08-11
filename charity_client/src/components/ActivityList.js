import React from 'react';
import ActivityDetails from './ActivityDetails';

const ActivityList = ({activities, removeActivity}) => {

  console.log(activities)
  const activitiesList = activities.map((activity, index) => {
      return (
      <>
        <hr/>
        <ActivityDetails
          removeActivity={removeActivity}
          key={index}
          activity={activity}
        />
      </>
      )
  });

  return (
    <div>
      <h3>Your Activities:</h3>
      {activitiesList}
    </div>
  );
}

export default ActivityList;