import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './containers/HomePage';
import NavBar from './components/NavBar';
import ErrorPage from './components/ErrorPage';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
      <>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route component={ErrorPage} />
      </Switch>
      </>
    </Router>
  );
}

export default App;
