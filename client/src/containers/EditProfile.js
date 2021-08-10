import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <div>
        <input type="submit" value="Save" />
      </div>
      {submitted ? <p>Successfully saved!</p> : null}
      <Link to="/myaccount">Go Back</Link>
    </form>
  );
};

export default EditProfile;
