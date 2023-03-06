import React, { useEffect, useState } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
import axios from "axios";
import Nav from "./nav";
const settings = {
  infinite: true,
  draggAble: true,
  swipeAble: true,
  customTransition: "all ease 1.5s",
  transitionDuration: 0,
  showDots: false,
  emulateTouch: true,
  autoPlay: true,
  autoPlaySpeed: 1500,
  responsive: {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7.5,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5.5,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3.5,
      slidesToSlide: 1, // optional, default to 1.
    },
  },
};

const Movies = () => {
  const param = useParams();
  const [moviedt, setMoviedt] = useState([]);
  const [almoviedt, setAlmoviedt] = useState([]);
  const [links, setLinks] = useState("");
  const [sspic, setSspic] = useState("");
  useEffect(() => {
    getMovie();
    getAlMovie();
  }, []);
  function getMovie() {
    axios
      .get(`https://sattasafari.com/hotstar/read.php?id=${param.id}`)
      .then(function (response) {
        if (response.data.message !== "") {
        }
        setMoviedt(response.data[0]);
        setLinks(JSON.parse(response.data[0].link));
        setSspic(JSON.parse(response.data[0].ss));
      });
  }
  function getAlMovie() {
    axios
      .get(`https://sattasafari.com/hotstar/read.php`)
      .then(function (response) {
        setAlmoviedt(response.data);
      });
  }
  return (
    <>
      <Nav />
      <div className="card mx-1 mt-1">
        <div className="card-body p-1">
          <img src={moviedt.img} className="slider-img" />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mt-1">
          <div className="col-3">
            <img src={moviedt.img} className="movie-logo-img" />
          </div>
          <div className="col-9 text-white">
            <p className="m-0 fs-14 text-capitalize">{moviedt.title}</p>
            <p className="m-0">
              <span className="m-0 fw-normal fs-13">Cast:-</span>
              <span className="m-0 fs-13 fw-100">{moviedt.starcast}</span>
            </p>
            <p className="m-0">
              <span className="m-0 fw-normal fs-13">Language:- </span>
              <span className="m-0 fs-13 fw-100">{moviedt.language}</span>
            </p>
          </div>
          <div className="col-6 mt-2 dropdown">
            <a
              className="btn w-100 bg-light-black me-2 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink3"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-cloud-download-alt"></i>
            </a>
            <ul
              style={{
                width: "120px",
                boxShadow: "rgb(137 137 137) 1px 1px 1px",
              }}
              className="dropdown-menu dropdown-menu-end mt-2  bg-dark"
              aria-labelledby="navbarDropdownMenuLink3"
            >
              <li>
                <a
                  className="dropdown-item text-capitalize text-light"
                  href={links.link1}
                >
                  {`1080p (${links.size1})`}
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-capitalize text-light"
                  href={links.link2}
                >
                  {`720p (${links.size2})`}
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item text-capitalize text-light"
                  href={links.link2}
                >
                  {`480p (${links.size3})`}
                </a>
              </li>
            </ul>
          </div>
          {/*<div className="col-4 mt-2">
            {moviedt.id == "" ? (
              <button className="btn bg-light-black w-100" disabled>
                <i class="far fa-eye"></i>
              </button>
            ) : (
              <Link to={`/watch/${moviedt.id}`}>
                <button className="btn bg-light-black w-100">
                  <i class="far fa-eye"></i>
                </button>
              </Link>
            )}
          </div>*/}
          <div className="col-6 mt-2">
            <Link
              to={`https://5efjbo-3000.preview.csb.app/movie/${moviedt.id}`}
              className="btn bg-light-black w-100"
            >
              <i class="fas fa-share"></i>
            </Link>
          </div>
          <p className="text-start text-white fw-normal ps-1 pt-2 m-0">
            Screen Shots
          </p>

          {/* Screen Shots */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 px-1 mt-2">
            <img src={sspic.img1} className="movie-ss-img" />
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 px-1 mt-2">
            <img src={sspic.img2} className="movie-ss-img" />
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 px-1 mt-2">
            <img src={sspic.img3} className="movie-ss-img" />
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 px-1 mt-2">
            <img src={sspic.img4} className="movie-ss-img" />
          </div>
          {/* close Screen Shots */}
        </div>
      </div>

      <hr />
      <div className="d-flex justify-content-between text-white">
        <span className="fw-normal ps-2">Recently Played</span>
        <i class="fas fa-angle-right pe-2"></i>
      </div>
      <Carousel {...settings}>
        {almoviedt.length > 0 &&
          almoviedt
            .filter((item) => item.tag.includes("popular"))
            .map((el, index) => (
              <div key={el.id} className="card mx-2-px mt-1">
                <div className="card-body p-2-px">
                  <Link to={`/movie/${el.id}`}>
                    <img
                      src={el.img}
                      style={{
                        height: "160px",
                        width: "100%",
                        borderRadius: "7px",
                      }}
                    />
                  </Link>
                </div>
              </div>
            ))}
      </Carousel>
      <div className="container-fluid bg-light fixed-bottom section-share-link">
        <div className="row">
          <div className="col-lg-1 col-md-2 col-sm-2 col-4">
            <a
              href="#"
              class="btn btn-outline-success btn-floating"
              data-mdb-ripple-color="dark"
            >
              <i class="fas fa-star"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Movies;
