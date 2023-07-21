import React from "react";

const Portfolio = () => {
  return (
    <div>
      <section id="portfolio">
        <div className="space" style={{ height: "60px" }}></div>
        <h1
          className="dlay-4 my-4 font-weight-bold text-center"
          style={{ color: "#6703e0" }}
        >
          Latest Projects.
        </h1>
        <div
          className="cards d-flex container"
          style={{ color: "#fff", textShadow: "#000" }}
        >
          <div
            className="text-cards text-center reveal "
            style={{ height: "260px" }}
          >
            <h3>Coming soon !</h3>
          </div>
          <div
            className="text-cards text-center reveal"
            style={{ height: "260px" }}
          >
            <h3>Coming soon !</h3>
          </div>
          <div
            className="text-cards text-center reveal"
            style={{ height: "260px" }}
          >
            <h3>Coming soon !</h3>
          </div>
          <div
            className="text-cards text-center reveal"
            style={{ height: "260px" }}
          >
            <h3>Coming soon !</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
