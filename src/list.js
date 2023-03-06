import React, { useEffect, useState } from "react";
import "./style.css";
import Nav from "./nav";
import axios from "axios";
import { Outlet, Link, useParams } from "react-router-dom";

const Lists = () => {
  const [moviedata, setMoviedata] = useState([]);
  const param = useParams();
  useEffect(() => {
    getMovie();
  }, []);
  function getMovie() {
    axios
      .get(`https://sattasafari.com/hotstar/read.php`)
      .then(function (response) {
        const tagmovie = response.data.filter((item) => {
          return item.tag.includes(param.tag);
        });
        setMoviedata(tagmovie);
      });
  }
  return (
    <>
      <Nav />
      <div className="text-start text-white">
        <span className="fw-normal ps-2 text-capitalize">{`${param.tag} Movie`}</span>
      </div>
      <div className="container-fluid p-0 m-0">
        <div className="row m-0 p-0">
          {moviedata.length > 0 &&
            moviedata.map((el, index) => (
              <div
                key={el.id}
                className="col-xl-1 col-lg-2 col-md-2 col-sm-3 col-xs-3 col-4 p-0 m-0 mt-1"
              >
                <div className="card mx-2-px mt-1">
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
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default Lists;
