import React from 'react';
import { deleteActivity } from '../services/ActivitiesService';

const ActivityDetails = ({activity, removeActivity}) => {

  const applicants = activity.applications.map(applicant => { return applicant.fullName })
  const datetime = new Date(activity.datetime)

  const handleDelete = () => {
    deleteActivity(activity._id).then(() => {
      removeActivity(activity._id);
    })
  }

  return (
    <div>
      <h4>Title: {activity.title}</h4>
      <p>Points offered: {activity.points}</p>
      <p>Date: {datetime.toDateString()}</p>
      <p>Duration: {activity.duration}</p>
      <p>Location: {activity.location.description}</p>
      <p>Description: {activity.description}</p>
      <p>{applicants}</p>
      <button onClick={handleDelete}>Delete Activity</button>
    </div>
  )
}

export default ActivityDetails;