import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Rectro from "./menu";
import FoodCard from "./foodcard";
import Cart from "./cart";
import OrderData from "./order";
//import MenuData from "./menudata";
const App = () => {
  const [clientname, setClientname] = useState("");
  const [restrodata, setRestroData] = useState({
    id: "",
    tableno: "",
  });
  const [MenuData, setMenuData] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  function getUsers() {
    axios
      .get("https://sattasafari.com/restro/read.php")
      .then(function (response) {
        console.log(response.data);
        setMenuData(response.data);
      });
  }
  const [orderstatus, setOrderstatus] = useState("Preparing");
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState("d-none");
  const AddCart = (e) => {
    const { value, checked } = e.target;
    if (value != "" && checked == true) {
      const isdata = cart.filter((item) => {
        if (item.id == value) {
          return true;
        } else {
          return false;
        }
      });
      if (isdata == false) {
        MenuData.filter((item) => {
          if (item.id == value) {
            setCart([
              ...cart,
              {
                id: item.id,
                title: item.title,
                mrp: item.mrp,
                price: item.price,
                img: item.img,
                restro_id: item.restro_id,
                category: item.category,
                qty: 1,
              },
            ]);
          }
        });
      }
    }
    if (value != "" && checked == false) {
      setCart(
        cart.filter((item) => {
          return item.id != value;
        })
      );
    }
  };
  const deleteCart = (e) => {
    const id = e.target.getAttribute("data-id");
    const newCart = cart.filter((item) => {
      return item.id != id;
    });
    setCart(newCart);
    console.log(cart);
  };
  useEffect(() => {
    if (cart.length > 0) {
      setShow("");
    }
    if (cart.length == 0) {
      setShow("d-none");
    }
  });
  const changeqty = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const name = e.target.name;
    console.log(value);
    if (value > 0) {
      const NewObj = cart.map((obj) => {
        if (obj.id == name) {
          return { ...obj, qty: value };
        }
        return obj;
      });
      console.log(NewObj);
      setCart(NewObj);
    }
  };
  const minus = (e) => {
    const id = e.target.name;
    const chdata = cart.filter((item) => {
      return item.id == id;
    });
    if (chdata[0].qty > 1) {
      const NewObj = cart.map((obj) => {
        if (obj.id == id) {
          return { ...obj, qty: chdata[0].qty - 1 };
        }
        return obj;
      });
      setCart(NewObj);
    }
  };
  const plus = (e) => {
    const id = e.target.name;
    const chdata = cart.filter((item) => {
      return item.id == id;
    });
    const NewObj = cart.map((obj) => {
      if (obj.id == id) {
        return { ...obj, qty: chdata[0].qty + 1 };
      }
      return obj;
    });
    setCart(NewObj);
  };
  const OnTable = () => {
    setOrderstatus("On Table");
  };
  const contoinue = (id, tableno) => {
    setRestroData({ id: id, tableno: tableno });
  };
  const handleClientName = (e) => {
    const value = e.target.value;
    setClientname(value);
  };
  const PlaceOrder = (e) => {
    //e.preventDefault();
    const inputs = {
      client_name: clientname,
      restro_id: restrodata.id,
      tableno: restrodata.tableno,
      status: orderstatus,
      products: JSON.stringify(cart),
    };
    axios
      .post("https://sattasafari.com/restro/create.php", inputs)
      .then(function (response) {
        console.log(response.data.ordid);
        window.localStorage.setItem("ordid", response.data.ordid);
        window.localStorage.setItem("orddata", JSON.stringify(cart));
      });
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/:restroid/:tableno"
            element={
              <Rectro
                FoodCard={FoodCard}
                cart={cart}
                AddCart={AddCart}
                show={show}
                contoinue={contoinue}
              />
            }
          />
          <Route
            path="/:restroid/:tableno/cart"
            element={
              <Cart
                cart={cart}
                changeqty={changeqty}
                deleteCart={deleteCart}
                minus={minus}
                plus={plus}
                show={show}
                restrodata={restrodata}
                PlaceOrder={PlaceOrder}
                clientname={clientname}
                handleClientName={handleClientName}
              />
            }
          />
          <Route
            path="/:restroid/:tableno/order"
            element={<OrderData cart={cart} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
