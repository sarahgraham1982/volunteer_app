import { useEffect, useState } from 'react';
import Collapsible from 'react-collapsible';

const UserMenu = ({ charity, allCharities, handleChange, updateCharity, submitted }) => {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (charity) {
      setName(charity.name);
      setDescription(charity.description);
    }
  }, [charity]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {name: name, description: description};
    updateCharity(data);
  };
  if (!charity) return "loading...";

  return (
    <>
      <h4>Change User:</h4>
      <select onChange={handleChange} className="select">
        {allCharities.map((charity) => {
          return <option key={charity._id} value={charity._id}>{charity.name}</option>;
        })}
      </select>
      <Collapsible trigger={<button>Edit Charity</button>}>
        <hr/>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name of Charity:</label>
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
              <label htmlFor="description">Description:</label>
            </div>
            <div>
              <textarea 
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="input-button">
              <input type="submit" value="Save" />
            </div>
            {submitted ? <p>Successfully saved!</p> : null}
          </form>
      </Collapsible>
    </>
  );
};

export default UserMenu;
