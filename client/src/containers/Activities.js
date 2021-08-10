import { useState, useEffect } from "react";
import "../css/Activities.css";
import SearchBar from "../components/SearchBar";
import ActivityList from "../components/ActivityList";
import ActivityMap from "../components/ActivityMap";
import { getActivities, updateActivity } from "../services/ActivitiesService";
import { getCharities } from "../services/CharitiesService";

const Activities = ({ user }) => {
  const [activities, setActivities] = useState([]);
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [charities, setCharities] = useState([]);
  const [filter, setFilter] = useState("");
  const [listView, setListView] = useState(true);

  useEffect(() => {
    getActivities().then((activities) => {
      setActivities(activities);
      setFilteredActivities(activities);
    });
    getCharities().then((charities) => {
      setCharities(charities);
    });
  }, []);

  useEffect(() => {
    resetActivities();
  }, [activities])

  const getActivitiesByCharity = (event) => {
    const activitiesByCharity = activities.filter(
      (activity) => activity.charity._id === event.target.value
    );
    setFilteredActivities(activitiesByCharity);
  };

  const getActivitiesByPostcode = (filter) => {
    const filteredActivities = activities.filter((activity) => {
      return activity.postcode.includes(filter);
    });
    setFilter(filter);
    setActivities(filteredActivities);
  };

  const resetActivities = () => {
    setFilteredActivities(activities);
    setFilter("");
  };

  const handleChange = () => {
    if (listView) {
      setListView(false);
    } else {
      setListView(true);
    }
  };

  function apply(activity) {
    let applications = [...activity.applications];
    applications = applications.map((application) => {
      return { status: application.status, user: application.user._id };
    });
    const newActivity = { applications };
    newActivity.applications.push({ status: "pending", user: user._id });
    updateActivity(activity._id, newActivity).then(() =>
      getActivities().then((data) => {
        setActivities(data);
      })
    );
  }

  if (!user) return "loading...";
  return (
    <>
      <SearchBar
        charities={charities}
        getActivitiesByCharity={getActivitiesByCharity}
        filter={filter}
        getActivitiesByPostcode={getActivitiesByPostcode}
        resetActivities={resetActivities}
      />
      <p>
        <button onClick={handleChange}>
          {listView ? "Map View" : "List View"}
        </button>
      </p>
      {listView ? (
        <ActivityList
          user={user}
          apply={apply}
          activities={filteredActivities}
        />
      ) : (
        <ActivityMap user={user} apply={apply} activities={filteredActivities} />
      )}
    </>
  );
};

export default Activities;
