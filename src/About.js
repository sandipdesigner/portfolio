import React from 'react';
import './main.css';
import Pdf from './sandip chakraborty-cv.pdf'

function About() {
  return (
      <header>
      <div className="container">
      <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-6">
      <h1 className="mb-20"><span>Introduction</span> </h1>
      <p className="mt-10 mb-30">I have 7+ years of experience in the fields of UI/UX designing and Front end development. I also have excellent experience in managing clients and delivery.</p>
     
      <a href={Pdf} target="_blank" className="btn-purple">Download Resume</a>
      </div>

      <div className="col-xl-6 col-lg-6 col-md-6 skillsection">
      
      <p>HTML</p>
      <div class="skills-container mb-15">
        <div class="skills w-90">90%</div>
        </div>

        <p>CSS</p>
        <div class="skills-container mb-15">
        <div class="skills w-90">90%</div>
        </div>

        <p>Responsive Design</p>
        <div class="skills-container mb-15">
        <div class="skills w-90">90%</div>
        </div>

        <p>JAVASCRIPT</p>
        <div class="skills-container mb-15">
        <div class="skills w-70">70%</div>
        </div>

        <p>JQUERY</p>
        <div class="skills-container mb-15">
        <div class="skills w-70">70%</div>
        </div>

        <p>React JS</p>
        <div class="skills-container mb-15">
        <div class="skills w-60">60%</div>
        </div>

        <p>Angular 2+</p>
        <div class="skills-container mb-15">
        <div class="skills w-40">40%</div>
        </div>

        <p>Adobe photoshop</p>
        <div class="skills-container mb-15">
        <div class="skills w-90">90%</div>
        </div>

        <p>Adobe illustrator</p>
        <div class="skills-container mb-15">
        <div class="skills w-80">80%</div>
        </div>

      </div>


      </div>
      </div>
      </header>
  );
}

export default About;
