import {useState, useEffect} from "react";
import SearchBar from "../components/SearchBar";
import ActivityList from "../components/ActivityList";
import ActivityMap from "../components/ActivityMap";
import { getActivities } from "../services/ActivitiesService"

const Activities = () => {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getActivities().then((activities)=>{
      setActivities(activities)
    })
  }, []);

  return (
    <>
      <SearchBar />
      <h4>Activities!</h4>
      <ActivityList activities={activities}/>
      <ActivityMap activities={activities}/>
    </>
  );
}

export default Activities;