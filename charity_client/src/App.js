import "./App.css";
import Activities from "./containers/Activities";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./containers/HomePage";
import { useState, useEffect } from "react";

const App = () => {
  const [allCharities, setAllCharities] = useState([]);
  const [charity, setCharity] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/api/charities/")
      .then((res) => res.json())
      .then((charities) => {
        setAllCharities(charities)
        setCharity(charities[0])
      });
  }, []);

  return (
    <>
      <Header />
      <HomePage charity={charity} allCharities={allCharities} setCharity={setCharity} />
      <Activities charity={charity} />
      <Footer />
    </>
  );
};

export default App;
