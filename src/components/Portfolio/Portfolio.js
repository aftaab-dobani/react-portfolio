import React from "react";
import enligthen from "../Portfolio/Port Images/Enlighten.png";
import horisen from "../Portfolio/Port Images/Horisen.png";
import password from "../Portfolio/Port Images/Password.png";
import employee from "../Portfolio/Port Images/Employee.png";
import note from "../Portfolio/Port Images/Note.png";
import "./style.css";

export const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-6">Portfolio</h1>

        <div className="image-box-wrapper row justify-content-center">
          <div className="project-image-box">
            <img
              className="project-image"
              src={enligthen}
              alt="Enligthen Me Project..."
            ></img>

            <h3>
              <a
                class="btn btn-link"
                href="https://fierce-spire-72565.herokuapp.com/homepage"
              >
                Enlighten Me 
              </a>
              <a
                class="btn btn-link"
                href="https://github.com/JosieMald/Enlighten-Me"
              >
                Git Hub Link
              </a>
            </h3>

            <p>
              Enlighten Me, is a full stack application that generates random
              activities given a users preferance between a solo or social
              experience. The user can choose there acitivites and create a post
              to document their experience.{" "}
            </p>
          </div>
        </div>

        <div className="image-box-wrapper row justify-content-center">
          <div className="project-image-box">
            <img
              className="project-image"
              src={horisen}
              alt="Horisen Refractor Project..."
            ></img>
            <h3>
              <a
                class="btn btn-link"
                href="https://aftaab-dobani.github.io/Horiseon-Refractor/"
              >
                Horisen Refractor 
              </a>
              <a
                class="btn btn-link"
                href="https://github.com/aftaab-dobani/Horiseon-Refractor"
              >
                Git Hub Link
              </a>
            </h3>

            <p>
              This is the completed product after making Horiseon Ad Agency site
              more accessible and ready for deployment.
            </p>
          </div>
        </div>

        <div className="image-box-wrapper row justify-content-center">
          <div className="project-image-box">
            <img
              className="project-image"
              src={password}
              alt="Password Generator Project..."
            ></img>
            <h3>
              <a
                class="btn btn-link"
                href="https://aftaab-dobani.github.io/password-generator/"
              >
                Password Generator
              </a>
              <a
                class="btn btn-link"
                href="https://github.com/aftaab-dobani/password-generator"
              >
                Git Hub Link
              </a>
            </h3>
            <p>
              In this assignment I updated the javascript to run the password
              generator site with prompts and different commands successfully to
              generate a password given certain parameters.
            </p>
          </div>
        </div>

        <div className="image-box-wrapper row justify-content-center">
          <div className="project-image-box">
            <img
              className="project-image"
              src={employee}
              alt="Employee Database Project..."
            ></img>
            <h3>
              <a
                class="btn btn-link"
                href="https://aftaab-dobani.github.io/employee_directory/"
              >
                Employee Directory  
              </a>
              <a
                class="btn btn-link"
                href="https://github.com/aftaab-dobani/employee_directory"
              >
                Git Hub Link
              </a>
            </h3>

            <p>
              In this application, users can view and search through their
              entire employee Database by first name as soon as the page loads.
            </p>
          </div>
        </div>

        <div className="image-box-wrapper row justify-content-center">
          <div className="project-image-box">
            <img
              className="project-image"
              src={note}
              alt="Note Taker Project..."
            ></img>
            <h3>
              <a
                class="btn btn-link"
                href="https://notetaker-by-aftaabdobani.herokuapp.com/"
              >
                Note Taker
              </a>
              <a
                class="btn btn-link"
                href="https://github.com/aftaab-dobani/Note-Taker"
              >
                Git Hub Link
              </a>
            </h3>
            <p>
              In this project I used Express.js to create allow user to create
              and store notes on the site. The site was then deployed through
              Heroku.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
