import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.css';
import Nav from './nav';
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
  autoPlaySpeed : 1500,
  responsive: {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
      }
  }
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
    autoPlaySpeed : 1500,
    responsive: {
      desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7.8,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 5.5,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3.5,
          slidesToSlide: 1 // optional, default to 1.
        }
    }
    };  
  const Home = () =>{
    const [recent, setRecent] = useState([]);
    const [upcoming, setUpComing] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [popular, setPopular] = useState([]);
    
  const Popular= () => {
    return fetch("https://api.themoviedb.org/3/movie/popular?api_key=15c6383878cae1f0db19eacf2ba37eba&language=en-US&page=1")
          .then((response) => response.json())
          .then((data) => setPopular(data.results));
    }
  const recentData = () => {
    return fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=15c6383878cae1f0db19eacf2ba37eba&language=en-US&page=1")
          .then((response) => response.json())
          .then((data) => setRecent(data.results));
  }
  const UpComing = () => {
    return fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=15c6383878cae1f0db19eacf2ba37eba&language=en-US&page=1")
          .then((response) => response.json())
          .then((data) => setUpComing(data.results));
  }
  const TopRated = () => {
    return fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=15c6383878cae1f0db19eacf2ba37eba&language=en-US&page=1")
          .then((response) => response.json())
          .then((data) => setTopRated(data.results));
  }
  useEffect(() => {
    UpComing();
    recentData();
    TopRated();
    Popular();
  },[]);
return(
<>
<Nav />
<Carousel {...settings}>

<div className="card mx-1 mt-1">
    <div className="card-body p-1">
    <Link to="/movies">
      <img src="https://www.scrolldroll.com/wp-content/uploads/2022/07/sita-ramam-south-indian-movies-august-2022.jpg"  
       className="slider-img"/>
    </Link>  
    </div>
  </div>
  <div className="card mx-1 mt-1">
    <div className="card-body p-1">
      <img src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2015/11/ghayal-once-again-movie-poster-3.jpg"  
       className="slider-img"/>  
    </div>
  </div>
  <div className="card mx-1 mt-1">
    <div className="card-body p-1">
      <img src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg"  
       className="slider-img"/>  
    </div>
  </div>
  <div className="card mx-1 mt-1">
    <div className="card-body p-1">
      <img src="https://m.media-amazon.com/images/I/71niXI3lxlL._SY679_.jpg"  
       className="slider-img"/>  
    </div>
  </div>
  
</Carousel>
<hr/>

<Link to="/lists" className="d-flex justify-content-between text-white">
<span className="fw-normal ps-2">Recently Played</span>
    <i class="fas fa-angle-right pe-2"></i>
    </Link>

<Carousel {...settings1}>
{recent.map((el, index) => (
<div key={el.id} className="card mx-2-px mt-1">
    <div className="card-body p-2-px">
      <img src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/"+el.poster_path}  
      style={{height:"160px", width:"100%",borderRadius: '7px'}}/>  
    </div>
  </div>
))}
</Carousel>
<hr/>
<div className="d-flex justify-content-between text-white">
    <span className="fw-normal ps-2">UpComing Movies</span>
    <i class="fas fa-angle-right pe-2"></i>
</div>
<Carousel {...settings1}>

{upcoming.map((el, index) => (
<div key={el.id} className="card mx-2-px mt-1">
    <div className="card-body p-2-px">
      <img src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/"+el.poster_path}  
      style={{height:"160px", width:"100%",borderRadius: '7px'}}/>  
    </div>
  </div>
))}
</Carousel>
<hr/>
<div className="d-flex justify-content-between text-white">
    <span className="fw-normal ps-2">TopRated Movies</span>
    <i class="fas fa-angle-right pe-2"></i>
</div>
<Carousel {...settings1}>
{topRated.map((el, index) => (
<div key={el.id} className="card mx-2-px mt-1">
    <div className="card-body p-2-px">
      <img src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/"+el.poster_path}  
      style={{height:"160px", width:"100%",borderRadius: '7px'}}/>  
    </div>
  </div>
))}
</Carousel>
<hr/>
<div className="d-flex justify-content-between text-white">
    <span className="fw-normal ps-2">Popular Movies</span>
    <i class="fas fa-angle-right pe-2"></i>
</div>
<Carousel {...settings1}>
{popular.map((el, index) => (
<div key={el.id} className="card mx-2-px mt-1">
    <div className="card-body p-2-px">
      <img src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/"+el.poster_path}  
      style={{height:"160px", width:"100%",borderRadius: '7px'}}/>  
    </div>
  </div>
))}
</Carousel>
</>
);
}
export default Home;