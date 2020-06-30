import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';


function Home() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>Hello, I'm <span>Sandip Chakraborty</span><br/>
          I am <Typical
        steps={['a Front-end Developer.', 3000, 'an UI Designer.', 3000 ]}
        loop={Infinity}
        wrapper="strong"
      />
          </h1>

        <div className="connect">
          <h2>Connect with me :</h2>
          <ul>
          <li><a href="mailto:sandip.chakraborty88@gmail.com"> <i class="fa fa-envelope" aria-hidden="true"></i> </a></li>
            <li><a href="https://www.linkedin.com/in/sandip-chakraborty-5212ab56/" target="_blank"> <i class="fa fa-linkedin-square" aria-hidden="true"></i> </a></li>
            </ul>
        </div>
          
        </div>
      </header>
    </div>
  );
}

export default Home;
