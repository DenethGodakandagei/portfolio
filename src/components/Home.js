import React from "react";
import Main from "../images/main.png";
import pdfFile from "../Documents/cv.pdf";

const Home = () => {
  return (
    <div>
      <section id="home">
        <div
          id=" hero"
          className="col-12 min-vh-100"
          style={{ paddingTop: " 180px" }}
        >
          <div className="d-sm-flex align-items-center justify-content-between container">
            <div className="col-md-6 mx-auto mb-4 mb-sm-0 headline">
              <h1 className="display-4 my-4 font-weight-bold container animation">
                <span style={{ color: "#6703e0" }}>
                  Hey, <br />I Am Software
                  <div className="animate_name">Developer...</div>
                </span>
              </h1>
              <p className="hero_decription container mt-sm-4">
                I can help you solve a problem, build a product or grow existing
                project.
              </p>
              <a className="btn Email" href="#contact">
                Email me
              </a>
              <a href={pdfFile} download="cv.pdf" className=" btn btn_Cv">
                Download CV
              </a>
            </div>
            <div className="img_main container mt-sm-3 animation">
              <div className="white__gradient " />
              <img src={Main} />
            </div>
          </div>
        </div>
        <div className="space" style={{ height: "80px" }}></div>
      </section>
    </div>
  );
};

export default Home;
