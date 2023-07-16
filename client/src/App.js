import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LANDING_PAGE, HOME_PAGE, DETAIL_PAGE } from './utils/pathRoutes.js'; // Importar la nueva constante
import Landing from './components/Landing/Landing.jsx';
import Home from './components/Home/Home.jsx';
import CountryDetailPage from './components/Detail/Detail.jsx'; // Asegúrate de que esta ruta sea correcta
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={HOME_PAGE}>
          <Home />
        </Route>
        <Route path={DETAIL_PAGE}>
          <CountryDetailPage /> {/* Nueva ruta para la página de detalles */}
        </Route>
        <Route path={LANDING_PAGE}>
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
