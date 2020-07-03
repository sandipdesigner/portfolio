import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import { NavLink } from 'react-router-dom';

function Nav() {

  const [isVisible, setVisible] = useState(false);

    const menuToggle = () => {
      setVisible(!isVisible);
  }

  return (
      <nav>
      <div className="container">
      <div className="row">
      <div className="col-xl-12">

      <div className="d-flex-justified">
      <h1 id="logo">SC</h1>
      <div className="toggleMenu" onClick={menuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="navmenu" className = {isVisible ? 'navmenu visible' : 'navmenu hidden'}>
      <ul>
        
        <li><NavLink to="/portfolio/" exact activeClassName="navactive">Home</NavLink></li>
        <li><NavLink to="/portfolio/about/" exact activeClassName="navactive">About</NavLink></li>
        <li><NavLink to="/portfolio/mywork/" exact activeClassName="navactive">Portfolio</NavLink></li>
        <li><NavLink to="/portfolio/contact/" exact activeClassName="navactive">Contact</NavLink></li>
        
      </ul>
     
      </div>

      </div>

      </div>
      </div>
      </div>
      </nav>


  );
}

export default Nav;
