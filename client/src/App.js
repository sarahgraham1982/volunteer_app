import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './containers/HomePage';
import Rewards from './containers/Rewards';
import Activities from './containers/Activities';
import MyAccount from './containers/MyAccount';
import NavBar from './components/NavBar';
import ErrorPage from './components/ErrorPage';
import Header from './components/Header';
import MyRewards from './containers/MyRewards';
import MyActivities from './containers/MyActivities';
import Profile from './containers/Profile';

const App = () => {
  return (
    <Router>
      <>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/rewards' component={Rewards} />
        <Route path='/activities' component={Activities} />
        <Route path='/myaccount' component={MyAccount} />
        <Route path='/myrewards' component={MyRewards} />
        <Route path='/myactivities' component={MyActivities} />
        <Route path='/profile' component={Profile} />
        <Route component={ErrorPage} />
      </Switch>
      </>
    </Router>
  );
}

export default App;