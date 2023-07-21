import React, { Component } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluit fixed-top fullnavbar d-flex justify-content-between">
          <a className="navbar-brand" href="#">
            <span className="navbar_name " style={{paddingLeft : '20px'}}>
              <span className="navbar_name_">M</span>okoto.
            </span>
          </a>
          <button
            className="navbar-toggler   text-info "
            onClick={() => {
              this.setState({ show: !this.state.show });
            }}
          >
            {this.state.show ? <MenuIcon color="action" /> : <CloseIcon color="action"  />}
          </button>
          <div
            className={
              this.state.show
                ? "collapse navbar-collapse"
                : "collapse navbar-collapse active"
            }
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
