import React from 'react';

const ActivityDetails = ({activity}) => {

  const applicants = activity.applications.map(applicant => { return applicant.fullName })
  const datetime = new Date(activity.datetime)

  return (
    <div>
      <h4>{activity.title}</h4>
      <p>Points offered: {activity.points}</p>
      <p>Date: {datetime.toDateString()}</p>
      <p>Duration: {activity.duration}</p>
      <p>Location: {activity.location.description}</p>
      <p>{activity.description}</p>
      <p>{applicants}</p>
    </div>
  )
}

export default ActivityDetails;