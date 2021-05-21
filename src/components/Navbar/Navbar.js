import React from 'react'
import "./style.css"
import {Link} from "react-scroll"

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Aftaab Dobani</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link smooth={true} to="about" className="nav-link active" aria-current="page" href="#">About Me</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="portfolio" className="nav-link" href="#">Projects</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="footer" className="nav-link" href="#">Contact Me</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
    )
}

export default Navbar

