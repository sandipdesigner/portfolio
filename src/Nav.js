import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="App">
      <nav>
      <div className="container">
      <div className="row">
      <div className="col-xl-12">

      <div className="d-flex-justified">
      <h1 id="logo">SC</h1>

      <div className="navmenu">
        
      <div className="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul>
        
        <li><Link to="/portfolio/">Home</Link></li>
        <li><Link to="/portfolio/about">About</Link></li>
        <li><Link to="/portfolio/mywork">Portfolio</Link></li>
        <li><Link to="/portfolio/contact">Contact</Link></li>
        
      </ul>
     
      </div>

      </div>

      </div>
      </div>
      </div>
      </nav>


    </div>
  );
}

export default Nav;
