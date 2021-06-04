import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
import Typical from "react-typical";

function Home() {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h1>
              Hello, I'm <span>Sandip Chakraborty</span>
              <br />
              I am a{" "}
              <Typical
                steps={["UI/UX Designer.", 3000, "Front End Developer.", 3000]}
                loop={Infinity}
                wrapper="strong"
              />
            </h1>

            <div className="connect">
              <h2>Connect with me :</h2>
              <ul>
                <li>
                  <a href="mailto:sandip.dev1986@outlook.com">
                    {" "}
                    <i class="fa fa-envelope" aria-hidden="true"></i>{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/sandip-chakraborty-5212ab56/"
                    target="_blank"
                  >
                    {" "}
                    <i
                      class="fa fa-linkedin-square"
                      aria-hidden="true"
                    ></i>{" "}
                  </a>
                </li>
                {/* <li>
                  <a href="skype:live:sandip.chakraborty88?chat">
                    {" "}
                    <i class="fa fa-skype" aria-hidden="true"></i>{" "}
                  </a>
                </li> */}
              </ul>
            </div>

            <Link to="/about" className="btn-purple">
              Learn more
            </Link>
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fill-opacity="0.3"
          d="M0,192L60,197.3C120,203,240,213,360,202.7C480,192,600,160,720,170.7C840,181,960,235,1080,256C1200,277,1320,267,1380,261.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </header>
  );
}

export default Home;
