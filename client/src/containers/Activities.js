import {useState, useEffect} from "react";
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

  return (
    <>
      <SearchBar
        getActivitiesByCharity={getActivitiesByCharity}
        filter={filter}
        getActivitiesByPostcode={getActivitiesByPostcode}
        resetActivities={resetActivities}
      />
      <h4>Activities!</h4>
      <ActivityList activities={activities}/>
      <ActivityMap activities={activities}/>
    </>
  );
}

export default Activities;