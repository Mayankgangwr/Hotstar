import { Outlet, Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.css";
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
                  Genres
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Language
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Years
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dubbed
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
      <div className="card mx-1 mt-1">
        <div className="card-body p-1">
          <img
            src="https://www.scrolldroll.com/wp-content/uploads/2022/07/sita-ramam-south-indian-movies-august-2022.jpg"
            className="slider-img"
          />
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mt-1">
          <div className="col-3">
            <img
              src="https://www.scrolldroll.com/wp-content/uploads/2022/07/sita-ramam-south-indian-movies-august-2022.jpg"
              className="movie-logo-img"
            />
          </div>
          <div className="col-9 text-white">
            <p className="m-0 fs-12">Sita Ram Hindi Dubbed Movie 2022</p>
            <p className="m-0">
              <span className="m-0 fw-normal fs-12">Cast:-</span>
              <span className="m-0 fs-12 fw-100">
                {" "}
                Salman Khan, Katreena Kaif..
              </span>
            </p>
            <p className="m-0">
              <span className="m-0 fw-normal fs-12">Language:- </span>
              <span className="m-0 fs-12 fw-100"> Hindi, English</span>
            </p>
          </div>
          <div className="col-4 mt-2">
            <button className="btn bg-light-black w-100">
              <i class="fas fa-cloud-download-alt"></i>
            </button>
          </div>
          <div className="col-4 mt-2">
            <Link to="/watch">
              <button className="btn bg-light-black w-100">
                <i class="far fa-eye"></i>
              </button>
            </Link>
          </div>
          <div className="col-4 mt-2">
            <button className="btn bg-light-black w-100">
              <i class="fas fa-share"></i>
            </button>
          </div>
          <p className="text-start text-white fw-normal ps-1 pt-2 m-0">
            Screen Shots
          </p>

          {/* Screen Shots */}
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 px-1 mt-2">
            <img
              src="https://www.scrolldroll.com/wp-content/uploads/2022/07/sita-ramam-south-indian-movies-august-2022.jpg"
              className="movie-ss-img"
            />
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 px-1 mt-2">
            <img
              src="https://www.scrolldroll.com/wp-content/uploads/2022/07/sita-ramam-south-indian-movies-august-2022.jpg"
              className="movie-ss-img"
            />
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 px-1 mt-2">
            <img
              src="https://www.scrolldroll.com/wp-content/uploads/2022/07/sita-ramam-south-indian-movies-august-2022.jpg"
              className="movie-ss-img"
            />
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6 px-1 mt-2">
            <img
              src="https://www.scrolldroll.com/wp-content/uploads/2022/07/sita-ramam-south-indian-movies-august-2022.jpg"
              className="movie-ss-img"
            />
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
        <div className="card mx-2-px mt-1">
          <div className="card-body p-2-px">
            <img
              src="https://c8.alamy.com/comp/F762X4/indian-bollywood-hindi-film-movie-poster-of-bol-bachchan-a-rohit-shetty-F762X4.jpg"
              style={{ height: "160px", width: "100%", borderRadius: "7px" }}
            />
          </div>
        </div>
        <div className="card mx-2-px mt-1">
          <div className="card-body p-2-px">
            <img
              src="https://media5.bollywoodhungama.in/wp-content/uploads/2022/10/Kisi-Ka-Bhai...-Kisi-Ki-Jaan...-480x270.jpg"
              style={{ height: "160px", width: "100%", borderRadius: "7px" }}
            />
          </div>
        </div>
        <div className="card mx-2-px mt-1">
          <div className="card-body p-2-px">
            <img
              src="https://latestbollywoodcelebrityphotos.files.wordpress.com/2013/07/189843_437393269660184_696001941_n.jpg"
              style={{ height: "160px", width: "100%", borderRadius: "7px" }}
            />
          </div>
        </div>
        <div className="card mx-2-px mt-1">
          <div className="card-body p-2-px">
            <img
              src="https://i0.wp.com/whizbliz.com/wp-content/uploads/2021/07/EFEE.jpg"
              style={{ height: "160px", width: "100%", borderRadius: "7px" }}
            />
          </div>
        </div>
        <div className="card mx-2-px mt-1">
          <div className="card-body p-2-px">
            <img
              src="https://webneel.com/daily/sites/default/files/images/daily/09-2019/2-movie-poster-design-aladdin-disney-glossy-composite.jpg"
              style={{ height: "160px", width: "100%", borderRadius: "7px" }}
            />
          </div>
        </div>
        <div className="card mx-2-px mt-1">
          <div className="card-body p-2-px">
            <img
              src="https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/04/08/Stylish-Star-Allu-Arjun-s-Pushpa-Movie-Second-Look-Poster-.jpg"
              style={{ height: "160px", width: "100%", borderRadius: "7px" }}
            />
          </div>
        </div>
        <div className="card mx-2-px mt-1">
          <div className="card-body p-2-px">
            <img
              src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-movie-poster-template-design-0f5fff6262fdefb855e3a9a3f0fdd361_screen.jpg"
              style={{ height: "160px", width: "100%", borderRadius: "7px" }}
            />
          </div>
        </div>
        <div className="card mx-2-px mt-1">
          <div className="card-body p-2-px">
            <img
              src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg"
              style={{ height: "160px", width: "100%", borderRadius: "7px" }}
            />
          </div>
        </div>
      </Carousel>
    </>
  );
};
export default Movies;
