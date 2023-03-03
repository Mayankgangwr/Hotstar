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
            <p className="m-0 fs-12">{moviedt.title}</p>
            <p className="m-0">
              <span className="m-0 fw-normal fs-12">Cast:-</span>
              <span className="m-0 fs-12 fw-100">{moviedt.starcast}</span>
            </p>
            <p className="m-0">
              <span className="m-0 fw-normal fs-12">Language:- </span>
              <span className="m-0 fs-12 fw-100">{moviedt.language}</span>
            </p>
          </div>
          <div className="col-4 mt-2">
            <a href={moviedt.link} className="btn bg-light-black w-100">
              <i class="fas fa-cloud-download-alt"></i>
            </a>
          </div>
          <div className="col-4 mt-2">
            <Link to={`/watch/${moviedt.id}`}>
              <button className="btn bg-light-black w-100">
                <i class="far fa-eye"></i>
              </button>
            </Link>
          </div>
          <div className="col-4 mt-2">
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
            <img src={moviedt.img} className="movie-ss-img" />
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 px-1 mt-2">
            <img src={moviedt.img} className="movie-ss-img" />
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 px-1 mt-2">
            <img src={moviedt.img} className="movie-ss-img" />
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 px-1 mt-2">
            <img src={moviedt.img} className="movie-ss-img" />
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
    </>
  );
};
export default Movies;
