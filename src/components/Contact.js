import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
const Contact = () => {
  return (
    <div>
      <section id="contact">
        <div className="space" style={{ height: "60px" }}></div>

        <section
          className="mb-4 mt-5"
          style={{ color: "#000", paddingBottom: "100px" }}
        >
          <h1
            className=" my-4 font-weight-bold container text-center"
            style={{ color: "#6703e0", paddingBottom: "100px" }}
          >
            Contact.
          </h1>
          <div className="white__gradient " />
          <div className="d-flex container contact-form">
            <div className="col-md-6 mb-md-0 mb-5 Main-contact">
              <form name="px-4">
                <div className=" ps-4 py-5">
                  <div
                    className="contact_title"
                    style={{ color: " #fff", fontSize: "24px" }}
                  >
                    Feel Free to contact me any time. I will get back to you as
                    soon as can!.
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form mb-0 m-4">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        style={{ border: "solid #6703e0" }}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="md-form mb-0 m-4">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        style={{ border: "solid #6703e0" }}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="md-form m-4">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control md-textarea"
                        placeholder="Massage"
                        style={{ border: "solid #6703e0" }}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
              <div className="text-md-left px-4">
                <a className="btn">Email me</a>
              </div>
            </div>
            <div className="contact-info">
              <div style={{ color: "#fff", fontSize: "24px" }}>
                Feel Free to contact me any time. I will get back to you as soon
                as can!.
                <br />
                <ul className="contact-list ">
                  <li className="list-item d-inline-flex d-sm-flex">
                    <i className="bi bi-geo-alt">
                      <span className="contact-text place ">
                        No 12 Galle road , Colombo
                      </span>
                    </i>
                  </li>

                  <li className="list-item d-inline-flex">
                    <i className="bi bi-telephone-forward">
                      <span className="contact-text phone ">
                        {" "}
                        113 133 45455
                      </span>
                    </i>
                  </li>

                  <li className="list-item d-flex">
                    <i className="bi bi-envelope-at">
                      <span className="contact-text gmail ">
                        contact.mokoto@gmail.com
                      </span>
                    </i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Contact;
