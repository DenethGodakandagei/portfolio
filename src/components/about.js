import React from "react";

const about = () => {
  return (
    <div>
      <section id="about">
        <div className="space" style={{ height: "60px" }}></div>
        <div id="about" className="col-12">
          <div className=" align-items-center  container">
            <div
              className="  container"
              style={{
                fontWeight: 400,
                textTransform: "capitalize",
                color: "#d5d3d8",
              }}
            >
              <h1
                className="dlay-4 my-4 font-weight-bold text-center"
                style={{ color: "#6703e0", marginTop: "180px" }}
              >
                About Me
              </h1>

              <div
                className=" text-center hero_decription container-md text-justify d-none d-sm-block .d-md-none .d-lg-block"
                style={{ fontSize: "27px" }}
              >
                I am a software engineer with a passion for problem-solving and
                creating innovative solutions. With a strong technical
                background, I have experience in various programming languages,
                frameworks, and technologies. I am a collaborative team player
                and dedicated to continuous learning and personal development.
              </div>
              <p
                className="text-center text-break container-md hero_decription  .d-none d-sm-none"
                style={{ fontSize: "16px" }}
              >
                I am a software engineer with a passion for problem-solving and
                creating innovative solutions. With a strong technical
                background, I have experience in various programming languages,
                frameworks, and technologies. I am a collaborative team player
                and dedicated to continuous learning and personal development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
