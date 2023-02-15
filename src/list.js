import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './style.css';
import Nav from './nav';
import { Outlet, Link } from "react-router-dom";

  const Lists = () =>{
const [user, setUser] = useState([]);
const [user1, setUser1] = useState([]);
  const fetchData = () => {
    return fetch("https://api.themoviedb.org/3/movie/popular?api_key=15c6383878cae1f0db19eacf2ba37eba&language=en-US")
          .then((response) => response.json())
          .then((data) => setUser(data.results));
  }
  const fetchData1 = () => {
    return fetch("http://localhost/Apipro/api/read.php")
    .then((response) => console.log(response));
  }
  
  useEffect(() => {
    fetchData();
    fetchData1();
  },[]);
return(
<>
<Nav />
<div className="text-start text-white">
    <span className="fw-normal ps-2">Recently Played</span>
</div>
<div className="container-fluid p-0 m-0">
    <div className="row m-0 p-0">
    {user.map((el, index) => (
           <div  key={el.id} className="col-xl-1 col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4 p-0 m-0">
           <div className="card mx-2-px mt-1">
               <div className="card-body p-2-px">
                   <img src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/"+el.poster_path}  
                   style={{height:"160px", width:"100%",borderRadius: '7px'}}/>  
               </div>
           </div>
       </div>
          ))}
    </div>
</div>
</>
);
}
export default Lists;