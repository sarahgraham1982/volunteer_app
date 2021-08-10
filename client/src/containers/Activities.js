import {useState, useEffect} from "react";
import '../css/Activities.css'
import SearchBar from "../components/SearchBar";
import ActivityList from "../components/ActivityList";
import ActivityMap from "../components/ActivityMap";
import { getActivities } from "../services/ActivitiesService";
import { getCharities } from "../services/CharitiesService";

const Activities = () => {

  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [charities, setCharities] = useState([]);
  const [listView, setListView] = useState(true);

  useEffect(() => {
    getActivities().then((activities)=>{
      setActivities(activities)
      setFilteredActivities(activities)
    })
  }, []);

  useEffect(() => {
    getCharities().then((charities)=>{
      setCharities(charities)
    })
  }, []);

  const getActivitiesByCharity = event => {
    const activitiesByCharity = activities.filter(activity => activity.charity._id === event.target.value);
    setFilteredActivities(activitiesByCharity);
  }

  const resetActivities = () => {
    setFilteredActivities(activities);
  }

  const handleChange = () => {
    if(listView){
      setListView(false)
    } else {
      setListView(true)
    }
  }

  return (
    <>
      <SearchBar
        charities={charities}
        getActivitiesByCharity={getActivitiesByCharity}
        resetActivities={resetActivities}
      />
      <p><button onClick={handleChange}>{listView ? "Map View" : "List View"}</button></p>
      {listView ? <ActivityList activities={filteredActivities}/> : 
        <ActivityMap 
          activities={filteredActivities} 
        /> }
    </>
  );
}

export default Activities;