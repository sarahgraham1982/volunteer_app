import "./App.css";
import Activities from "./containers/Activities";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserMenu from "./components/UserMenu";
import { useState, useEffect } from "react";
import { getCharities, updateCharity } from "./services/CharitiesService";

const App = () => {

  const [allCharities, setAllCharities] = useState([]);
  const [charity, setCharity] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  }, [submitted]);

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

  function handleUpdateCharity(data) {
    updateCharity(charity._id, data)
      .then((newCharity) => {
        setCharity(newCharity);
        setSubmitted(true);
      })
  }

  return (
    <>
      <Header />
      <UserMenu 
        charity={charity}
        updateCharity={handleUpdateCharity}
        allCharities={allCharities} 
        handleChange={handleChange}
        submitted={submitted}
      />
      <Activities charity={charity}/>
      <Footer />
    </>
  );
};

export default App;
