import React from "react";
import "./main.css";
import Pdf from "./Sandip-Chakraborty-Resume.pdf";
import MatchHeight from "matchheight";

function Mywork() {

  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h1>Portfolio</h1>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <a
                  className="project-box"
                  data-mh
                  href="https://www.cloudblue.com/"
                  target="_blank"
                >
                  <h2 data-mh>Cloudblue</h2>
                  <p data-mh>
                    CloudBlue is a digital technology and services company
                    dedicated to helping providers transform their businesses to
                    compete and win in the as-a-service economy.
                  </p>
                </a>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6">
                <a
                  className="project-box"
                  href="https://www.ingrammicrocloud.com/"
                  target="_blank"
                >
                  <h2 data-mh>Ingram Micro Cloud</h2>
                  <p data-mh>
                    As a premium cloud services provider, Ingram Micro Cloud
                    views cloud not just as a single technology, but as a
                    foundational platform capable of underpinning the digital
                    transformation.
                  </p>
                </a>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6">
                <a
                  className="project-box"
                  href="https://www.32bytes.net/"
                  target="_blank"
                >
                  <h2 data-mh>32bytes</h2>
                  <p data-mh>
                    32bytes is the communication agency we wanted to hire but
                    couldn't find when we were looking. It is the kind of
                    company we wanted to work for, but couldn't find as
                    creatives.
                  </p>
                </a>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6">
                <a
                  className="project-box"
                  href="https://www.tarasafe.com/"
                  target="_blank"
                >
                  <h2 data-mh>Tarasafe</h2>
                  <p data-mh>
                    Tarasafe is recognized among the leading private label
                    clothing manufacturers, our garments are being supplied to
                    some of the biggest names in the industry worldwide.
                  </p>
                </a>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6">
                <a
                  className="project-box"
                  href="https://www.thecanvastalk.com/"
                  target="_blank"
                >
                  <h2 data-mh>The Canvas Talk</h2>
                  <p data-mh>
                    The Canvas Talk was established by two art enthusiasts with
                    a clear objective of creating high quality personalized
                    artwork for individuals who want to treasure memories in the
                    most beautiful and unique way.
                  </p>
                </a>
              </div>

              <div className="col-xl-6 col-lg-6 col-md-6">
                <a
                  className="project-box"
                  href="http://www.yesmam.in/"
                  target="_blank"
                >
                  <h2 data-mh>Yes mam</h2>
                  <p data-mh>
                    Yes Mam, is an Online Household Services Marketplace.
                    Established in Kolkata, in 2015 Yes Mam is the first such
                    Online Marketplace in Eastern India and with its unique
                    model of transparency and guaranteed service completion.
                  </p>
                </a>
              </div>
              <div className="col-xl-12 text-center mt-30">
                <a href={Pdf} target="_blank" className="btn-purple">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Mywork;
