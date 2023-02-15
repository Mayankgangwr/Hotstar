import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./menu.css";
const CartData = ({
  cart,
  deleteCart,
  minus,
  plus,
  show,
  restrodata,
  PlaceOrder,
  clientname,
  handleClientName,
}) => {
  const navigate = useNavigate();
  const amount = cart.reduce((total, item) => {
    return total + parseInt(item.qty) * parseInt(item.price);
  }, 0);
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
              className="me-auto mb-0  text-style">
              CART
            </h1>
          </div>
        </div>
      </nav>
      <section className="main">
        <div className="container-fluid">
          <div className="row">
            {cart.map(({ id, img, qty, title, mrp, price }) => (
              <div
                key={id}
                className="col-xl-3 card-item col-lg-4 col-md-6 col-sm-6 col-xs-6 col-12 mt-3"
              >
                <div className="card">
                  <div className="card-body p-2">
                    <div className="d-flex text-black p-0">
                      <img
                        src={img}
                        alt="Generic placeholder image"
                        className="item-logo"
                      />
                      <div className="row ps-3">
                        <div className="col-10">
                          <h6 className="text-start">{title}</h6>
                        </div>
                        <div className="col-2 text-end">
                          <h5>
                            <i
                              onClick={deleteCart}
                              data-id={id}
                              className="far fa-trash-alt"
                            ></i>
                          </h5>
                        </div>
                        <div className="col-6 d-flex">
                          <button
                            className="btn btn-primary h-75 p-qty"
                            name={id}
                            onClick={minus}
                          >
                            -
                          </button>
                          <span className="form-control h-75 mx-1 pt-1 text-center">
                            {qty}
                          </span>
                          <button
                            className="btn btn-primary h-75 p-qty"
                            name={id}
                            onClick={plus}
                          >
                            +
                          </button>
                        </div>
                        <div className="col-6 pt-1 text-end">
                          <span className="price sale-price pe-2">
                            ${price}
                          </span>
                          <span className="price mrp">${mrp}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className={`col-12 ${show} mt-3`}>
              <div className="card mb-4">
                <div className="card-header py-2">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body px-3 pb-3 pt-1">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>${(amount * 82) / 100}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      GST(18%)
                      <span>${(amount * 18) / 100}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>${amount}</strong>
                      </span>
                    </li>
                  </ul>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter Your Name"
                    onChange={handleClientName}
                    value={clientname}
                  />
                  <button
                    onClick={() => {
                      if (clientname != "") {
                        PlaceOrder();
                        if (amount > 0) {
                          navigate(
                            `/${restrodata.id}/${restrodata.tableno}/order`
                          );
                        }
                      } else {
                        alert("Enter Your Name");
                      }
                    }}
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Go to checkout
                  </button>
                  <p
                    className="text-center text-danger mt-4"
                    style={{ fontSize: "15px" }}
                  >
                    Please Dont Reload or Close window Before Complete Your
                    Order.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default CartData;


