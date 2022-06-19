import React from "react";
import { Link } from 'react-router-dom'

function Catagory() {
  return <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <Link className="navbar-brand" to="#">
      Navbar
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon text-danger" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">
            
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            Features
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            Pricing
          </Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  </div>;
}

export default Catagory;
