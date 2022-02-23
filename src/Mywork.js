import React from "react";
import "./main.css";
import Pdf from "./Sandip-Chakraborty-Resume.pdf";
import MatchHeight from "matchheight";

function Mywork() {

  const projectdetails = [

    {
      link: "https://www.cloudblue.com/",
      heading: "Cloudblue",
      details: "CloudBlue is a digital technology and services company dedicated to helping providers transform their businesses to compete and win in the as-a-service economy."
    },

    {
      link: "https://www.ingrammicrocloud.com/",
      heading: "Ingram Micro Cloud",
      details: "As a premium cloud services provider, Ingram Micro Cloud views cloud not just as a single technology, but as a foundational platform capable of underpinning the digital transformation."
    },

    {
      link: "https://www.32bytes.net/",
      heading: "32bytes",
      details: "32bytes is the communication agency we wanted to hire but couldn't find when we were looking. It is the kind of company we wanted to work for, but couldn't find as creatives."
    },

    {
      link: "https://www.tarasafe.com/",
      heading: "Tarasafe",
      details: "Tarasafe is recognized among the leading private label clothing manufacturers, our garments are being supplied to some of the biggest names in the industry worldwide."
    },

    {
      link: "https://www.thecanvastalk.com/",
      heading: "The Canvas Talk",
      details: "The Canvas Talk was established by two art enthusiasts with a clear objective of creating high quality personalized artwork for individuals who want to treasure memories in the most beautiful and unique way."
    },

  ]

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h1>Portfolio</h1>
            <div className="row">
            {projectdetails.map((project, index) => (
              <div className="col-xl-6 col-lg-6 col-md-6" key={index}>
              <a
                  className="project-box"
                  data-mh
                  href={project.link}
                  target="_blank"
                >
                  <h2 data-mh>{project.heading}</h2>
                  <p data-mh>
                    {project.details}
                  </p>
                </a>
                </div>
            ))}

               {/* <div className="col-xl-12 text-center mt-30">
                <a href={Pdf} target="_blank" className="btn-purple">
                  Download Resume
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Mywork;
