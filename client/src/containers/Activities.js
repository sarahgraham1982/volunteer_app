import {useState, useEffect} from "react";
import '../css/Activities.css'
import SearchBar from "../components/SearchBar";
import ActivityList from "../components/ActivityList";
import ActivityMap from "../components/ActivityMap";
import { getActivities } from "../services/ActivitiesService"

const Activities = () => {

  const [activities, setActivities] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getActivities().then((activities)=>{
      setActivities(activities)
    })
  }, []);

  const getActivitiesByCharity = event => {
    const activitiesByCharity = activities.filter(activity => activity.charity === event.target.value);
    setActivities(activitiesByCharity);
  }

  const getActivitiesByPostcode = (filter) => {
    const filteredActivities = activities.filter(activity => {
      return (
        activity.postcode.includes(filter)
      )
    })
    setFilter(filter);
    setActivities(filteredActivities);
  }

  const resetActivities = () => {
    setActivities(activities);
    setFilter('');
  }

  const toggleDisplay = () => {
    const mapView = document.getElementById("mapView");
    mapView.classList.toggle("hidden");
    const listView =document.getElementById("listView");
    listView.classList.toggle("hidden");
  }

  return (
    <>
      <SearchBar
        getActivitiesByCharity={getActivitiesByCharity}
        filter={filter}
        getActivitiesByPostcode={getActivitiesByPostcode}
        resetActivities={resetActivities}
      />
      <div id="listView">
        <ActivityList toggleDisplay={toggleDisplay} activities={activities}/>
      </div>
      <div id="mapView" className="hidden">
        <ActivityMap toggleDisplay={toggleDisplay} activities={activities}/>
      </div>
    </>
  );
}

export default Activities;