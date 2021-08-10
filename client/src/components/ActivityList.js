import React from "react";
import ActivityDetails from "./ActivityDetails";
import { haveIApplied } from "../helpers/helpers";

const ActivityList = ({ activities, apply, user }) => {

  const activitiesList = activities.map((activity, index) => {
    const applied = haveIApplied(activity, user)
    return (
      <ActivityDetails
        key={index}
        activity={activity}
        apply={apply}
        applied={applied}
      />
    );
  });

  return <div>{activitiesList}</div>;
};

export default ActivityList;
