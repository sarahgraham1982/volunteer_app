import '../css/Activities.css'
import ActivityList from "../components/ActivityList";
import ActivityForm from "../components/ActivityForm";
import { useState, useEffect } from 'react';
import { getActivities } from "../services/ActivitiesService";


const Activities = ({charity}) => {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    if(charity){
    getActivities().then((activities)=>{
      const charityActivities = activities.filter(activity => activity.charity._id === charity._id)
      console.log(charityActivities)
      setActivities(charityActivities)
    })}
  }, [charity]);

  if(!charity){
    return null
  }

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