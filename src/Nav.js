import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import { NavLink } from 'react-router-dom';

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
        
        <li><NavLink to="/portfolio/" exact activeClassName="navactive">Home</NavLink></li>
        <li><NavLink to="/portfolio/about" activeClassName="navactive">About</NavLink></li>
        <li><NavLink to="/portfolio/mywork" activeClassName="navactive">Portfolio</NavLink></li>
        <li><NavLink to="/portfolio/contact" activeClassName="navactive">Contact</NavLink></li>
        
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
