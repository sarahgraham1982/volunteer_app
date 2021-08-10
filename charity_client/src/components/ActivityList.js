import React from 'react';
import ActivityDetails from './ActivityDetails';

const ActivityList = ({activities}) => {

  console.log(activities)
  const activitiesList = activities.map((activity, index) => {
      return (
      <>
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
      <h3>Your Activities:</h3>
      {activitiesList}
    </div>
  );
}

export default ActivityList;