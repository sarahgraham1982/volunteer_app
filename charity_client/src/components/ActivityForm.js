import {useState} from "react";
import { postActivity } from "../services/ActivitiesService";

const ActivityForm = ({addActivity}) => {
    
    const [formData, setFormData] = useState({})

    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        postActivity(formData).then(()=>{
            addActivity(formData);
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Add an activity</h2>
            <div>
              <label htmlFor="title">Title:</label>
              <input onChange={onChange} type="text" id="title" />
            </div>
            <div>
              <label htmlFor="duration">Duration:</label>
              <input onChange={onChange} type="text" id="duration" />
            </div>
            <div>
              <label htmlFor="location">Location:</label>
              <input onChange={onChange} type="text" id="location" />
            </div>
            <div>
              <label htmlFor="points">Points:</label>
              <input onChange={onChange} type="text" id="points" />
            </div>
            <div>
              <label htmlFor="date">Date:</label>
              <input onChange={onChange} type="text" id="date" />
            </div>

            <input type="submit" value="Save" id="save"/>
	    </form>

    );
}

export default ActivityForm;