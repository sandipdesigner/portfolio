import React from 'react';
import './main.css';
import Pdf from './Sandip-Chakraborty-Resume.pdf'

function About() {

  const myskills = [

    {
      tech: "HTML",
      height: "90%",
      level: "90",
      
    },

    {
      tech: "CSS",
      height: "90%",
      level: "90",
      
    },

    {
      tech: "Responsive Design",
      height: "90%",
      level: "90",
      
    },

    {
      tech: "JAVASCRIPT",
      height: "80%",
      level: "80",
      
    },

    {
      tech: "REACT JS",
      height: "70%",
      level: "70",
      
    },

    {
      tech: "JQUERY",
      height: "80%",
      level: "80",
      
    },

    {
      tech: "ADOBE PHOTOSHOP",
      height: "90%",
      level: "90",
      
    },

    {
      tech: "ADOBE ILLUSTRATOR",
      height: "80%",
      level: "80",
      
    },

    {
      tech: "ADOBE XD",
      height: "80%",
      level: "80",
      
    },

    {
      tech: "FIGMA",
      height: "80%",
      level: "80",
      
    },


  ]

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

      {myskills.map((skill) => (
        <div className="col-xl-4 col-lg-6 col-md-4">
        <p>{skill.tech}</p>
        <div className="skills-container mb-15">
          <div className="skills" style={{height: (skill.height)}}></div>
          <div className="show-width"> {skill.level} <span>%</span> </div>
          </div>
          </div>
      ))}

        
{/*       
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
        </div> */}

        {/* <div className="col-xl-4 col-lg-6 col-md-4">
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
        </div> */}

        {/* <div className="col-xl-4 col-lg-6 col-md-4">
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
        <div className="show-width"> 80 <span>%</span> </div>
        </div>
        </div>

        <div className="col-xl-4 col-lg-6 col-md-4">
      <p>Figma</p>
      <div className="skills-container mb-15">
        <div className="skills h-80"></div>
        <div className="show-width"> 80 <span>%</span> </div>
        </div>
        </div> */}

        </div>

      </div>


      </div>
      </div>
      </header>
  );
}

export default About;
