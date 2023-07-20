import './App.css';

import { Route, Routes } from 'react-router-dom';
import PathRoutes from './utils/pathRoutes.js';
import Landing from './components/Landing/Landing.jsx';
import Home from './components/Home/Home.jsx';
import CountryDetailPage from './components/Detail/Detail.jsx';
import ActivityForm from './components/Form/Form.jsx';  

function App() {
  return (
    <div className="App">
    <Routes>
      
        <Route  path={PathRoutes.LANDING_PAGE} element={<Landing />} />
          
        
        <Route  path={PathRoutes.HOME_PAGE} element={<Home />} />
          
        
        <Route  path={ PathRoutes.DETAIL_PAGE} element={<CountryDetailPage />} />
        
        <Route path={PathRoutes.ACTIVITY_FORM_PAGE} element= {<ActivityForm />}>  
          
        </Route>
      
    </Routes>
    </div>
  );
}

export default App;



