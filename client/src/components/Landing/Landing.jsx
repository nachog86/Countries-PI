import React from 'react';
import { Link } from 'react-router-dom';
import backgroundVideo from '../../assets/images/videoHome.mp4';
import './Landing.css';

function Landing() {
    return (
      <div className="landing">
        <video className='videoTag' autoPlay loop muted>
          <source src={backgroundVideo} type='video/mp4' />
        </video>
        <h1>Epic Earth: Descubre, explora y vive</h1>
        <Link to="/home">
          <button>Ingresar</button>
        </Link>
      </div>
    );
  }
  
  export default Landing;

