import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./containers/HomePage";
import Rewards from "./containers/Rewards";
import Activities from "./containers/Activities";
import MyAccount from "./containers/MyAccount";
import NavBar from "./components/NavBar";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import MyRewards from "./containers/MyRewards";
import MyActivities from "./containers/MyActivities";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/api/users/")
      .then((res) => res.json())
      .then((users) => {
        setAllUsers(users)
        setUser(users[0])
      });
  }, []);
    return (
    <Router>
      <>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/" component={() => <HomePage user={user} allUsers={allUsers} setUser={setUser} />} />
          <Route path="/rewards" component={Rewards} />
          <Route path="/activities" component={Activities} />
          <Route path="/myaccount" component={() => <MyAccount user={user} />} />
          <Route path="/myrewards" component={MyRewards} />
          <Route path="/myactivities" component={MyActivities} />
          <Route component={ErrorPage} />
        </Switch>
      </>
    </Router>
  );
};

export default App;
