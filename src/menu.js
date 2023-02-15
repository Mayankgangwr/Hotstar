import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import "./menu.css";
import { useNavigate, useParams } from "react-router-dom";
const Rectro = ({ FoodCard, cart, AddCart, show, contoinue }) => {
  const [cookies, removeCookies] = useCookies(["user"]);
  if (!cookies.user) {
    removeCookies();
  }
  const [input, setInput] = useState("");
  const [searchdt, setSearchdt] = useState("");
  const [MenuData, setMenuData] = useState([]);
  const parameter = useParams();
  const navigate = useNavigate();
  console.log(parameter.restroid);
  useEffect(() => {
    getUsers();
  }, []);
  function getUsers() {
    axios
      .get(
        `https://sattasafari.com/restro/read.php?restro_id=${parameter.restroid}`
      )
      .then(function (response) {
        console.log(response.data);
        setMenuData(response.data);
      });
  }
  const Filtered = (e) => {
    const value = e.target.value;
    setInput(value);
  };
  const Search = (e) => {
    const value = e.target.value.toUpperCase();
    setSearchdt(value);
  };
  const searchdata = MenuData.filter((item) => {
    if (searchdt !== "") {
      const Title = item.title.toUpperCase();
      return Title.includes(searchdt);
    } else {
      return item.title !== searchdt;
    }
  });
  console.log(searchdata);
  const sdata = searchdata.filter((item) => {
    if (input !== "") {
      return item.cat_id === input;
    } else {
      return item.cat_id !== input;
    }
  });

  return (
    <>
      <nav key="1" className={`navbar  navbar-expand nav-bg`}>
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <div className="text-center me-auto">
              <img
                src="/images/logo.png"
                height="40"
                alt="MDB Logo"
                loading="lazy"
              />
            </div>
            <h1
              className="me-auto mb-0  text-style"
             >
              MENU
            </h1>
          </div>
        </div>
      </nav>

      <section className="main mb-5">
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-6 my-1 mx-0 py-1">
              <select className="form-control" name="cat" onChange={Filtered}>
                <option value="">Select Cat</option>
                <option value="3">Breakfast</option>
                <option value="2">Lunch</option>
                <option value="1">FastFood</option>
                <option value="4">Dinner</option>
                <option value="5">Dinks</option>
              </select>
            </div>
            <div className="col-6 py-1 mx-0 my-1">
              <input
                type="text"
                className="form-control"
                name="name"
                value={searchdt}
                onChange={Search}
                placeholder="Search Food"
              />
            </div>
            {sdata.map((props) => (
              <FoodCard
                id={props.id}
                title={props.title}
                price={props.price}
                mrp={props.mrp}
                img={props.img}
                AddCart={AddCart}
              />
            ))}
          </div>
        </div>
      </section>
      <nav
        key="1"
        className={`navbar ${show} navbar-expand fixed-bottom bg-dark`}
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mt-1">
              <li className="nav-item">
                <h5 className="text-light" href="#">
                  Item{" "}
                  {cart.reduce((total, item) => {
                    return total + parseInt(item.qty);
                  }, 0)}{" "}
                </h5>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mt-1">
              <li className="nav-item">
                <button
                  onClick={() => {
                    contoinue(parameter.restroid, parameter.tableno);
                    navigate(
                      `/${parameter.restroid}/${parameter.tableno}/cart`
                    );
                  }}
                  className="btn btn-primary"
                >
                  Continue <i className="fas fa-long-arrow-alt-up"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Rectro;
