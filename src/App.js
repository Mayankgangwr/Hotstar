import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./home";
import Movies from "./movies";
import Lists from "./list";
import Search from "./search";
import Watch from "./watch";
import AddMovie from "./addmovie";
const Apps = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movie/:id" element={<Movies />} />
          <Route path="/list/:tag" element={<Lists />} />
          <Route path="/search/:tag" element={<Search />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="/addmovie" element={<AddMovie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Apps;
