import { useState } from "react";
import '../css/ActivityForm.css';
import { postActivity } from "../services/ActivitiesService";
import Collapsible from "react-collapsible";

const ActivityForm = ({addActivity, charity}) => {
    
    const [formData, setFormData] = useState({})

    const onChange = (e) =>{
      formData[e.target.id] = e.target.value;
      setFormData(formData);
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      const newActivity = {...formData}
      newActivity.charity = charity._id
      postActivity(formData).then(()=>{
        addActivity(formData);
      })
    }

    return (
      <form onSubmit={handleSubmit}>
          <Collapsible trigger="Add an activity">
            <div>
              <label htmlFor="title">Title:</label>
              <input onChange={onChange} type="text" id="title" />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <textarea onChange={onChange} type="text" id="description" />
            </div>
            <div>
              <label htmlFor="duration">Duration:</label>
              <input onChange={onChange} type="text" id="duration" />
            </div>
            <div>
              <label htmlFor="location">Location:</label>
              <input placeholder="address" onChange={onChange} type="text" id="location.description" />
              <input placeholder="coordinates" onChange={onChange} type="text" id="location.coordinates" />
              <input placeholder="postcode" onChange={onChange} type="text" id="location.postcode" />
            </div>
            <div>
              <label htmlFor="points">Points:</label>
              <input onChange={onChange} type="text" id="points" />
            </div>
            <div>
              <label htmlFor="date">Date:</label>
              <input onChange={onChange} type="date" id="datetime" />
            </div>

            <input type="submit" value="Save" id="save"/>
          </Collapsible>
	    </form>

    );
}

export default ActivityForm;