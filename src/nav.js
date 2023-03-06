import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./nav.css";
const Nav = () => {
  const links = [
    "bollywood",
    "hollywood",
    "south",
    "dubbed",
    "upcoming",
    "popular",
  ];
  const navigate = useNavigate();
  const [searchdata, setSearchdata] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchdata(e.target.value);
  };
  const Search = (e) => {
    e.preventDefault();
    window.location.href = `/search/${searchdata}`;
    //navigate(`/search/${searchdata}`);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-light-black px-0 m-pading">
        <div className="container-fluid">
          <a className="navbar-brand mt-2 mt-lg-0 d-mobile" href="/">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="15"
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          <div className="dropdown ms-auto mt-1 d-mobile">
            <a
              className="text-reset me-2 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink2"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-search"></i>
            </a>
            <ul
              style={{ width: "300px" }}
              className="dropdown-menu dropdown-menu-end mt-2  bg-dark"
              aria-labelledby="navbarDropdownMenuLink2"
            >
              <li className="nav-item">
                <form onSubmit={Search}>
                  <div className="input-group ps-2">
                    <div className="form-outline">
                      <input
                        type="search"
                        id="form1"
                        value={searchdata}
                        onChange={handleSearch}
                        className="form-control bg-light text-dark"
                      />
                      <label class="form-label text-dark" for="form1">
                        Search
                      </label>
                    </div>
                    <button
                      type="button"
                      onClick={Search}
                      className="btn btn-primary"
                    >
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
          <div className="dropdown ms-3 mt-1 d-mobile">
            <a
              className="text-reset me-2 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-bars"></i>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end  bg-dark"
              aria-labelledby="navbarDropdownMenuLink"
            >
              {links.map((el) => (
                <li>
                  <Link
                    className="dropdown-item text-capitalize text-light"
                    to={`/list/${el}`}
                  >
                    {el}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="collapse navbar-collapse d-desktop"
            id="navbarSupportedContent"
          >
            <a className="navbar-brand mt-2 mt-lg-0" href="/">
              <img
                src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                height="15"
                alt="MDB Logo"
                loading="lazy"
              />
            </a>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {links.map((el) => (
                <li className="nav-item">
                  <a className="nav-link text-capitalize" href={`/list/${el}`}>
                    {el}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <form onSubmit={Search}>
                  <div className="input-group ps-2">
                    <div className="form-outline">
                      <input
                        type="search"
                        id="form1"
                        value={searchdata}
                        onChange={handleSearch}
                        className="form-control bg-light text-dark"
                      />
                      <label class="form-label text-dark" for="form1">
                        Search
                      </label>
                    </div>
                    <button
                      type="button"
                      onClick={Search}
                      className="btn btn-primary"
                    >
                      <i className="fas fa-search"></i>
                    </button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
