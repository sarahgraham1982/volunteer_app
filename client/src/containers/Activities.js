import {useState, useEffect} from "react";
import '../css/Activities.css'
import SearchBar from "../components/SearchBar";
import ActivityList from "../components/ActivityList";
import ActivityMap from "../components/ActivityMap";
import { getActivities } from "../services/ActivitiesService"

const Activities = () => {

  const [activities, setActivities] = useState([]);
  const [filter, setFilter] = useState('');
  const [listView, setListView] = useState(true);

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
        getActivitiesByCharity={getActivitiesByCharity}
        filter={filter}
        getActivitiesByPostcode={getActivitiesByPostcode}
        resetActivities={resetActivities}
      />
      <p><button onClick={handleChange}>{listView ? "Map View" : "List View"}</button></p>
      {listView ? <ActivityList activities={activities}/> : <ActivityMap activities={activities}/> }
    </>
  );
}

export default Activities;