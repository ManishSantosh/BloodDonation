import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="#">
        BLOOD DONRS <sub><small>THE REAL HEROS</small></sub>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          {["Home", "About Us", "Contact Us", "Join Us"].map((text, i) => (
            <li className="nav-item" key={i}>
              <a className="nav-link ml-lg-4" href="#">
                {text}
              </a>
            </li>
          ))}
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
