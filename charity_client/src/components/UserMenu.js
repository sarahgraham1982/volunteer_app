const UserMenu = ({ currentCharity, allCharities, setCharity }) => {

  const handleChange = e => {
      setCharity(allCharities.find(charity => charity._id === e.target.value))
  }

  return (
    <select value={(currentCharity ? currentCharity._id : undefined)} onChange={handleChange}>
      {allCharities.map((charity) => {
        return <option key={charity._id} value={charity._id}>{charity.name}</option>;
      })}
    </select>
  );
};

export default UserMenu;
