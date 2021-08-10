import React from "react";
import Collapsible from "react-collapsible";

const ActivityDetails = ({ activity, apply, applied }) => {
  return (
    <div>
      <h1>{activity.title}</h1>
      <h4>{activity.charity.name}</h4>
      <p>{activity.duration}</p>
      <p>{activity.location.description}</p>
      <Collapsible trigger="More Details>>">
        <p>{activity.description}</p>
        {applied ? (
          <div>APPLIED</div>
        ) : (
          <button onClick={() => apply(activity)}>Apply Now!</button>
        )}
      </Collapsible>
      <hr></hr>
    </div>
  );
};

export default ActivityDetails;
