import '../css/Activities.css'
import ActivityList from "../components/ActivityList";
import ActivityForm from "../components/ActivityForm";
import { useState, useEffect } from 'react';
import { getActivities } from "../services/ActivitiesService";


const Activities = ({charity}) => {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getActivities().then((activities)=>{
      const charityActivities = activities.filter(activity => activity.charity_id === charity._id)
      setActivities(charityActivities)
    })
  }, []);

  const addActivity = (activity) => {
    const temp = activities.map(s => s);
    temp.push(activity);
    setActivities(temp);
  }

  const deleteActivity = (id) => {
    const temp = activities.map(s => s);
    const indexToDel = temp.map(s => s._id).indexOf(id);
    console.log(indexToDel);

    temp.splice(indexToDel, 1);
    setActivities(temp);
  }

  return (
    <>
      <ActivityForm addActivity={addActivity} />
      <ActivityList activities={activities} deleteActivity={deleteActivity}/>
    </>
  );
}

export default Activities;