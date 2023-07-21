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
           <div className="img_main container mt-sm-3 animation 	.d-none d-sm-none">             
              <img src={Main} />
            </div>
          <div className="d-sm-flex align-items-center justify-content-between container">
            <div className="col-md-6 mx-auto mb-4 mb-sm-0 headline">
              <h1 className="display-4 my-4 font-weight-bold container animation d-none d-sm-block">
                <span style={{ color: "#6703e0" }}>
                  Hey, <br />I Am Software
                  <div className="animate_name">Developer...</div>
                </span>
              </h1>
              <h2 className="display-4 my-4 font-weight-bold container animation 	.d-none d-sm-none">
                <span style={{ color: "#6703e0" }}>
                  Hey, <br />I Am Software
                  <div className="animate_name">Developer...</div>
                </span>
              </h2>
              <p className="hero_decription container mt-sm-4">
                I can help you solve a problem, build a product or grow existing
                project.
              </p>
              <div className="d-none d-sm-block .d-md-none .d-lg-block">
              <a className="btn Email" href="#contact">
                Email me
              </a>
              <a href={pdfFile} download="cv.pdf" className=" btn btn_Cv">
                Download CV
              </a>
              </div>
              <div className="flex .d-none d-sm-none">
              <a className="btn Email mx-3 m-3" href="#contact">
                Email me
              </a>
              <a href={pdfFile} download="cv.pdf" className=" btn btn_Cv mx-3 " style={{fontSize:'20px'}}>
                Download CV
              </a>
              </div>

            </div>
            <div className="img_main container mt-sm-3 animation d-none d-sm-block .d-md-none .d-lg-block">             
              <img src={Main} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
