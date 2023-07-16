import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LANDING_PAGE, HOME_PAGE, DETAIL_PAGE } from './utils/pathRoutes.js';
import Landing from './components/Landing/Landing.jsx';
import Home from './components/Home/Home.jsx';
import CountryDetailPage from './components/Detail/Detail.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={LANDING_PAGE}>
          <Landing />
        </Route>
        <Route exact path={HOME_PAGE}>
          <Home />
        </Route>
        <Route path={DETAIL_PAGE}>
          <CountryDetailPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

