import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://www.logo.wine/a/logo/Disney%2B/Disney%2B-Logo.wine.svg"
                height="35"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Bollywood
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Hollywood
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  South Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Hindi Dubbed
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  UpComing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Populer
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
