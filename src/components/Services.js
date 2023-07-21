import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Data from "../images/icons/data.png";
import Mobile from "../images/icons/mobile-development.png";
import MLearning from "../images/icons/personal-development.png";

const Services = () => {
  return (
    <div>
      <section id="services" className="container">
        <div className="space" style={{ height: "60px" }}></div>
        <h1
          className="dlay-4 my-4 font-weight-bold text-center"
          style={{ color: " #6703e0" }}
        >
          Services.
        </h1>
        <div
          className="cards d-flex justify-content-center"
          style={{ color: "#fff", textShadow: "#000" }}
        >
          <div className="text-cards text-center reveal">
            <h3>Full stack Development</h3>
            <p>
              <img src={Data} width={"180px"} alt="some value" />
            </p>
          </div>
          <div className="text-cards text-center reveal">
            <h3>Mobile Applications</h3>
            <p>
              <img src={Mobile} width={"180px"} alt="some value" />
            </p>
          </div>
          <div className="text-cards text-center reveal">
            <h3>Machine Learning</h3>
            <p>
              <img src={MLearning} width={"180px"} alt="some value" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
