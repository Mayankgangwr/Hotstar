import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import "./style.css";
import Nav from "./nav";
import { Outlet, Link } from "react-router-dom";

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
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  },
};
const settings1 = {
  infinite: true,
  draggAble: false,
  swipeAble: true,
  customTransition: "all ease 1.5s",
  transitionDuration: 0,
  showDots: false,
  emulateTouch: false,
  autoPlay: false,
  autoPlaySpeed: 1500,
  responsive: {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7.8,
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
const Home = () => {
  const [recent, setRecent] = useState([]);
  const [upcoming, setUpComing] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [allmovie, setAllmovie] = useState([]);
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    getMovie();
  }, []);
  function getMovie() {
    axios
      .get(`https://sattasafari.com/hotstar/read.php`)
      .then(function (response) {
        const slide = response.data.filter((item) => {
          return item.tag.includes("slider");
        });
        setSlider(slide);
        setAllmovie(response.data);
      });
  }
  return (
    <>
      <Nav />
      <Carousel {...settings}>
        {slider.length > 0 &&
          slider.map((el) => (
            <div key={el.id} className="card mx-1 mt-1">
              <div className="card-body p-1">
                <Link to={`/movie/${el.id}`}>
                  <img src={el.img} className="slider-img" />
                </Link>
              </div>
            </div>
          ))}
      </Carousel>
      <hr />

      <div className="d-flex justify-content-between text-white">
        <span className="fw-normal ps-2">Recently Played</span>
        <i class="fas fa-angle-right pe-2"></i>
      </div>

      <Carousel {...settings1}>
        {allmovie.length > 0 &&
          allmovie
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
      <hr />
      {allmovie.filter((item) => item.tag.includes("upcoming")).length > 0 && (
        <>
          <Link
            to={`/list/upcoming`}
            className="d-flex justify-content-between text-white"
          >
            <span className="fw-normal ps-2">UpComing Movies</span>
            <i class="fas fa-angle-right pe-2"></i>
          </Link>
          <Carousel {...settings1}>
            {allmovie.length > 0 &&
              allmovie
                .filter((item) => item.tag.includes("upcoming"))
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
      )}
      <hr />
      {allmovie.filter((item) => item.tag.includes("popular")).length > 0 && (
        <>
          <Link
            to={`/list/popular`}
            className="d-flex justify-content-between text-white"
          >
            <span className="fw-normal ps-2">Popular Movies</span>
            <i class="fas fa-angle-right pe-2"></i>
          </Link>
          <Carousel {...settings1}>
            {allmovie.length > 0 &&
              allmovie
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
      )}
      <hr />
      {allmovie.filter((item) => item.tag.includes("bollywood")).length > 0 && (
        <>
          <Link
            to={`/list/bollywood`}
            className="d-flex justify-content-between text-white"
          >
            <span className="fw-normal ps-2">Bollywood Movies</span>
            <i class="fas fa-angle-right pe-2"></i>
          </Link>
          <Carousel {...settings1}>
            {allmovie.length > 0 &&
              allmovie
                .filter((item) => item.tag.includes("bollywood"))
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
      )}
      <hr />
      {allmovie.filter((item) => item.tag.includes("hollywood")).length > 0 && (
        <>
          <Link
            to={`/list/hollywood`}
            className="d-flex justify-content-between text-white"
          >
            <span className="fw-normal ps-2">Hollywood Movies</span>
            <i class="fas fa-angle-right pe-2"></i>
          </Link>
          <Carousel {...settings1}>
            {allmovie.length > 0 &&
              allmovie
                .filter((item) => item.tag.includes("hollywood"))
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
      )}
    </>
  );
};
export default Home;
