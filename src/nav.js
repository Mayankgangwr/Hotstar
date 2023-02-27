import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
const Nav = () => {
  const links = [
    "bollywood",
    "hollywood",
    "south movies",
    "dubbed movies",
    "upcoming",
    "popular",
  ];
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-light-black">
        <div class="container-fluid">
          <a class="navbar-brand mt-2 mt-lg-0 d-mobile" href="#">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="15"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          <div class="dropdown ms-auto d-mobile">
            <a
              class="text-reset me-2 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-bars"></i>
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end  bg-dark"
              aria-labelledby="navbarDropdownMenuLink"
            >
              {links.map((el) => (
                <li>
                  <a class="dropdown-item text-capitalize text-light" href="#">
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            class="collapse navbar-collapse d-desktop"
            id="navbarSupportedContent"
          >
            <a class="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="15"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              {links.map((el) => (
                <li class="nav-item">
                  <a class="nav-link text-capitalize" href="#">
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
