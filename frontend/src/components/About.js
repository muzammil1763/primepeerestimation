import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <div className="main-about">
        <div className="about1">
          <div className="main-card">
            <div className="about-img">
              <img src=" ./images/aboutus.jpeg" alt="" />
            </div>
            <div className="text">
              <h2>We Are Leading International Company In The World</h2>
              <p>
                Prime Peer Estimation is a leading Construction Estimating Firm
                that provides professional services to clients seeking to
                achieve business goals. With a commitment to quality service
                provision, we offers a comprehensive range of services covering
                all construction trades and CSI divisions. Our services are
                designed to meet clients’ specific requirements and budgets,
                ensuring their satisfaction and success in their projects...
              </p>
              <Link to={"/about"}>
                <button>About Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="main-about">
        <div className="about1">
          <div className="main-card">
            <div className="about-img">
              <img src=" ./images/about-background.jpg" alt="" />
            </div>
            <div className="text">
              <h2>Why Choose Us</h2>
              <p>
                WE ARE EXPERIENCED PROFESSIONAL. OUR QUALITY OF WORK
                <ul>
                  <li>WE ARE COST EFFECTIVE</li>
                  <li>24/7/365 SUPPORT</li>
                  <li>INTIME PROJECT SUBMISSION</li>
                </ul>
              </p>
              <Link to={"/contact"}>
                <button>Get A Quote</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="main-about">
        <div className="about1">
          <div className="main-card">
            <div className="text">
              <h2>Why Choose Us</h2>
              <p>
                WE ARE EXPERIENCED PROFESSIONAL. OUR QUALITY OF WORK
                <ul>
                  <li>WE ARE COST EFFECTIVE</li>
                  <li>24/7/365 SUPPORT</li>
                  <li>INTIME PROJECT SUBMISSION</li>
                </ul>
              </p>
              <Link to={"/about"}>
                <button className="about-button">Get A Quote</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
