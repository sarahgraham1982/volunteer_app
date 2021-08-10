import React from 'react';

const ActivityDetails = ({activity}) => {

  const applicants = activity.applications.map(applicant => { return applicant.fullName })

  return (
    <div>
      <h4>{activity.title}</h4>
      <p>{activity.duration}</p>
      <p>{activity.location.description}</p>
      <p>{activity.description}</p>
      <p>{applicants}</p>
    </div>
  )
}

export default ActivityDetails;