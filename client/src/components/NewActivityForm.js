import {useState} from "react";
import { postNewActivity } from "./ActivitiesService";

const NewActivityForm = ({addActivity}) => {
    
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
        <form onSubmit={onSubmit} id="activities-form" >
            <h2>Add a New Activity</h2>
            <div class="formWrap">
                <label for="title">Title:</label>
                <input onChange={onChange} type="text" id="title"  />
            </div>
            <div class="formWrap">
                <label for="charity">Charity:</label>
                <input onChange={onChange} type="text" id="charity"  />
            </div>
            <div class="formWrap">
                <label for="description">Description:</label>
                <input onChange={onChange} type="text" id="description"  />
            </div>
            <div class="formWrap">
                <label for="duration">Duration:</label>
                <input onChange={onChange} type="text" id="duration"  />
            </div>
            <div class="formWrap">
                <label for="location">Location:</label>
                <input onChange={onChange} type="text" id="location"  />
            </div>
            <div class="formWrap">
                <label for="points">Points:</label>
                <input onChange={onChange} type="text" id="points"  />
            </div>
            <div class="formWrap">
                <label for="date">Date:</label>
                <input onChange={onChange} type="date" id="date"  />
            </div>

            <input type="submit" value="Save" id="save"/>
	    </form>

    );
}

export default NewActivityForm;