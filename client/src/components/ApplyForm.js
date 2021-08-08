import {useState} from 'react';
// import {postApplication} from "./ApplicationService";

const ApplyForm = () => {

  const [formData, setFormData] = useState({})

  const onChange = (e) => {
    formData[e.target.id] = e.target.value;
    setFormData(formData);
  }

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   postApplication(formData).then(() => {
  //     addApplication(formData);
  //   })
  // }

  return (
    <form onSubmit={onSubmit} id="apply-form" >
      <h2>Apply for this activity!</h2>
      <div>
        <label>Name</label>
        <input onChange={onChange} type="text" id="name" />
      </div>
      <div>
        <label>Email</label>
        <input onChange={onChange} type="text" id="email" />
      </div>
      <div>
        <label>Phone Number</label>
        <input onChange={onChange} type="text" id="phonenumber" />
      </div>

      <input type="submit" />
    </form>
  )
}

export default ApplyForm;