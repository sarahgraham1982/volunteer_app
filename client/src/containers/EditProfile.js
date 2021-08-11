import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/EditProfile.css";

const EditProfile = ({ user, updateUser, submitted }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.fullName);
      setDescription(user.aboutMe);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { fullName: name, aboutMe: description };
    updateUser(data);
  };
  if (!user) return "loading...";
  return (
    <div className="edit-form">
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Your Name:</label>
      </div>
      <div>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="aboutme">About Me</label>
      </div>
      <div>
        <textarea
          type="text"
          id="aboutme"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="input-button">
        <input type="submit" value="Save" />
      </div>
      {submitted ? <p>Successfully saved!</p> : null}
      <div className="go-back-button">
      <Link to="/myaccount">Go Back</Link>
      </div>
    </form>
    </div>
  );
};

export default EditProfile;
