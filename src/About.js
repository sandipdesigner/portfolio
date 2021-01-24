import React from 'react';
import './main.css';
import Pdf from './sandip-chakraborty-cv.pdf'

function About() {
  return (
      <header>
      <div className="container">
      <div className="row">
      <div className="col-xl-5 col-lg-6">
      <h1 className="mb-20"><span>Introduction</span> </h1>
      <p className="mt-10 mb-30">I have 8+ years of experience in the fields of UI/UX designing and Front end development. I also have excellent experience in managing clients and delivery.</p>
     
      <a href={Pdf} target="_blank" className="btn-purple">Download Resume</a>
      </div>

      <div className="col-xl-7 col-lg-6 skillsection">
      <div className="row">
      
      <div className="col-xl-4 col-lg-6 col-md-4">
      <p>HTML</p>
      <div className="skills-container mb-15">
        <div className="skills h-90"></div>
        <div className="show-width"> 90 <span>%</span> </div>
        </div>
        </div>

        <div className="col-xl-4 col-lg-6 col-md-4">
        <p>CSS</p>
        <div className="skills-container mb-15">
        <div className="skills h-90"></div>
        <div className="show-width"> 90 <span>%</span></div>
        </div>
        </div>

         
      <div className="col-xl-4 col-lg-6 col-md-4">
      <p>Responsive Design</p>
      <div className="skills-container mb-15">
        <div className="skills h-90"></div>
        <div className="show-width"> 90 <span>%</span> </div>
        </div>
        </div>

        <div className="col-xl-4 col-lg-6 col-md-4">
      <p>Javascript</p>
      <div className="skills-container mb-15">
        <div className="skills h-80"></div>
        <div className="show-width"> 80 <span>%</span> </div>
        </div>
        </div>

        <div className="col-xl-4 col-lg-6 col-md-4">
      <p>jquery</p>
      <div className="skills-container mb-15">
        <div className="skills h-80"></div>
        <div className="show-width"> 80 <span>%</span> </div>
        </div>
        </div>


        <div className="col-xl-4 col-lg-6 col-md-4">
      <p>React Js</p>
      <div className="skills-container mb-15">
        <div className="skills h-80"></div>
        <div className="show-width"> 70 <span>%</span> </div>
        </div>
        </div>

        <div className="col-xl-4 col-lg-6 col-md-4">
      <p>Angular JS 2+</p>
      <div className="skills-container mb-15">
        <div className="skills h-50"></div>
        <div className="show-width"> 50 <span>%</span> </div>
        </div>
        </div>


        <div className="col-xl-4 col-lg-6 col-md-4">
      <p>VUE JS </p>
      <div className="skills-container mb-15">
        <div className="skills h-70"></div>
        <div className="show-width"> 70 <span>%</span> </div>
        </div>
        </div>

        <div className="col-xl-4 col-lg-6 col-md-4">
      <p>Adobe Photoshop</p>
      <div className="skills-container mb-15">
        <div className="skills h-90"></div>
        <div className="show-width"> 90 <span>%</span> </div>
        </div>
        </div>

        <div className="col-xl-4 col-lg-6 col-md-4">
      <p>Adobe Illustrator</p>
      <div className="skills-container mb-15">
        <div className="skills h-80"></div>
        <div className="show-width"> 80 <span>%</span> </div>
        </div>
        </div>

        <div className="col-xl-4 col-lg-6 col-md-4">
      <p>Adobe XD</p>
      <div className="skills-container mb-15">
        <div className="skills h-70"></div>
        <div className="show-width"> 70 <span>%</span> </div>
        </div>
        </div>

        <div className="col-xl-4 col-lg-6 col-md-4">
      <p>Figma</p>
      <div className="skills-container mb-15">
        <div className="skills h-70"></div>
        <div className="show-width"> 70 <span>%</span> </div>
        </div>
        </div>

        </div>

      </div>


      </div>
      </div>
      </header>
  );
}

export default About;
