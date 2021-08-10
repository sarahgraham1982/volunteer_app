import "./App.css";
import Activities from "./containers/Activities";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserMenu from "./components/UserMenu";
import { useState, useEffect } from "react";
import { getCharities } from "./services/CharitiesService";

const App = () => {

  const [allCharities, setAllCharities] = useState([]);
  const [charity, setCharity] = useState(null);

  useEffect(() => {
    getCharities().then((charities)=>{
      setAllCharities(charities)
      setCharity(charities[0])
    });
  }, []);

  const handleChange = event => {
    const selectedCharity = allCharities.find(charity => charity._id === event.target.value)
    setCharity(selectedCharity);
  }

  return (
    <>
      <Header />
      <UserMenu 
        allCharities={allCharities} 
        handleChange={handleChange}/>
      <Activities charity={charity}/>
      <Footer />
    </>
  );
};

export default App;
