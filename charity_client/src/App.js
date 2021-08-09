import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Activities from "./containers/Activities";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./containers/HomePage";
import ErrorPage from "./components/ErrorPage";
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
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <HomePage charity={charity} allCharities={allCharities} setCharity={setCharity} />} />
          <Route path="/activities" component={() => <Activities charity={charity} />} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
};

export default App;