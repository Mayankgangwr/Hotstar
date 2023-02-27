import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./home";
import Movies from "./movies";
import Lists from "./list";
import Watch from "./watch";
const Apps = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/watch" element={<Watch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Apps;
