import React from "react";
import ninex from "../images/workImg/99x.png";
import cloud from "../images/workImg/cloud.jpg";
import openarc from "../images/workImg/openarc.png";
import upwork from "../images/workImg/upwork.png";
import campus from "../images/workImg/colombo-campus.png"
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const CountEdu = () => {
  const [countUp, setCountUp] = useState(false);

  return (
    <ScrollTrigger
      className="triger"
      onEnter={() => setCountUp(true)}
      onExit={() => setCountUp(false)}
    >
      <section id="about">
        <div
          className="space"
          style={{ height: "60px" }}
        ></div>

        <div className="row justify-content-center text-center count">
          <div className="col-md-4">
            <h2 className="font-weight-bold">Yers experience</h2>
            <span id="count1" className="display-6" style={{ fontWeight: 400 }}>
              {countUp && <CountUp start={0} end={8} duration={2} delay={0} />}
            </span>
            <span className="plus_mark">+</span>
          </div>
          <div className="col-md-4">
            <h2 className="font-weight-bold">Happy Customers</h2>
            <span id="count2" className="display-6" style={{ fontWeight: 400 }}>
              {countUp && (
                <CountUp start={0} end={120} duration={2} delay={0} />
              )}
            </span>
            <span className="plus_mark">+</span>
          </div>
          <div className="col-md-4">
            <h2 className="font-weight-bold">completed Projects</h2>
            <span id="count3" className="display-6" style={{ fontWeight: 400 }}>
              {countUp && (
                <CountUp start={0} end={130} duration={2} delay={0} />
              )}
            </span>
            <span className="plus_mark">+</span>
          </div>
        </div>
        <section className="text-light py-5 min-vh-80">
          <div className="container">
            <div className="container d-flex navbar-expand-sm Mcards ">
              <div className="card-group">
                <div className="card m-3 Mcards-color reveal">
                  <div className="card-body">
                    <h4 className="card-title text-center">Experience</h4>
                    <div className="card-text card-body">
                      <ul>
                        <li>Works at 99x</li>
                        <li>Senior Software Engineer at 99X - 2021</li>
                        <li>
                          Senior Software Engineer at Cloud Solutions
                          International - 2017
                        </li>
                        <li>
                          Senior Software Engineer at OpenArc Systems
                          Management(Pvt)Ltd -2012
                        </li>
                        <li>freelancer on upwork & fiverr</li>
                      </ul>
                      <div className="card_images">
                        <img src={ninex} />
                        <img src={cloud} />
                        <img src={openarc} />
                        <img src={upwork} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card m-3 Mcards-color reveal">
                <div className="card-body">
                  <h4 className="card-title text-center">Education</h4>
                  <div className="card-text card-body">
                    <ul>
                      <li style={{ marginBottom: "20px" }}>
                        studied at University of Colombo School of Computing
                      </li>
                      <li style={{ marginBottom: "20px" }}>
                        Goes to UCSC(University of Colombo School of Computing)
                      </li>
                      <li style={{ marginBottom: "20px" }}>
                        Goes to OpenArc School of Bussness & Technology
                      </li>
                    </ul>
                    <div className="card_images">
                      <img src={campus} />
                      <img src={openarc} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </ScrollTrigger>
  );
}

export default CountEdu