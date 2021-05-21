import React from "react";
import "./style.css";

export const Footer = () => {
  return (
    <div id="footer" className="footer text-center">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Contact Me</p>
            </div>
            <div className="d-flex">
              <a href="tell:555-555-555">+1(404)643-6921</a>
            </div>
            <div className="d-flex">
              <p>1234dobani@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3.col-md-2.col-sm-6">
            <div className="row">
              <div className="col">
                <a href="https://github.com/aftaab-dobani">Git Hub</a>
                <br />
                <a href="https://github.com/aftaab-dobani">Linked In</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
