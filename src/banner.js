import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./banner.css";
const settings = {
  infinite: true,
  draggAble: true,
  swipeAble: true,
  customTransition: "all ease 3.5s",
  transitionDuration: 0,
  showDots: false,
  emulateTouch: true,
  autoPlay: true,
  autoPlaySpeed: 3500,
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
const Banner = ({ slider }) => {
  return (
    <>
      <div
        className="container-fluid banner pb-1 px-0"
        style={{ marginTop: "10px" }}
      >
        <div className="row">
          <div className="col-12">
            <Carousel {...settings}>
              {slider.length > 0 &&
                slider.map((el) => (
                  <div
                    key={el.id}
                    className="row"
                    style={{
                      background:
                        "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
                      borderRadius: "15px",
                      marginRight: "5px",
                      marginLeft: "5px",
                    }}
                  >
                    <div className="col-lg-5 col-md-6 col-sm-6 col-12">
                      <div className="card banner-card mt-3 mx-1 mb-4 m-lg-5 m-md-5">
                        <img
                          className="banner-img"
                          src={el.img}
                          alt="banner-image"
                        />
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-6 col-12">
                      <h1
                        className="mt-3 mt-md-5 mt-lg-5 ms-5"
                        style={{ color: "#000" }}
                      >
                        {`${el.title} (${el.year}) ${el.wood} Movie Download in 1080p `}
                      </h1>
                      <p className="bold ms-5 mt-4" style={{ color: "#000" }}>
                        {el.starcast}
                      </p>
                      <hr className="mx-5 mt-4" />
                      <div className="d-flex justify-content-center mt-4 mb-5">
                        <button
                          type="button"
                          class="btn text-white1 me-3"
                          style={{ background: "#051937" }}
                          data-mdb-ripple-color="dark"
                        >
                          Download
                        </button>
                        <button
                          type="button"
                          class="btn ms-3"
                          style={{
                            border: "2px solid #051937",
                            color: "#051937",
                            fontSize: "13px",
                            fontWeight: "bolder",
                          }}
                          data-mdb-ripple-color="dark"
                        >
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;