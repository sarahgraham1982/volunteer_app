import {useState} from "react";
import { postUser } from "./UserService";

const NewUserForm = ({addNewUser}) => {
    
    const [formData, setFormData] = useState({})

    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        postUser(formData).then(()=>{
            addNewUser(formData);
        })
    }

    return (
        <form onSubmit={onSubmit} id="new-user-form" >
            <h2>Register as a Volunteer</h2>
            <div class="formWrap">
                <label for="full-name">Full Name:</label>
                <input onChange={onChange} type="text" id="full-name"  />
            </div>
            <div class="formWrap">
                <label for="phone-number">Phone Number:</label>
                <input onChange={onChange} type="text" id="phone-number"  />
            </div>
            <div class="formWrap">
                <label for="email">Email:</label>
                <input onChange={onChange} type="text" id="email"  />
            </div>
            <div class="formWrap">
                <label for="about-me">About Me:</label>
                <input onChange={onChange} type="text" id="about-me"  />
            </div>
            <div class="formWrap">
                <label for="dob">Date of Birth:</label>
                <input onChange={onChange} type="date" id="dob"  />
            </div>

            <input type="submit" value="Save" id="save"/>
	    </form>

    );
}

export default NewUserForm;