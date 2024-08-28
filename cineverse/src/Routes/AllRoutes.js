import React from "react";
import { Routes, Route } from "react-router-dom";
import { MovieDetail, Movielist, PageNotFound, Search } from "../Pages";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Movielist apiPath={"movie/now_playing"} title={"Home"} />}
      ></Route>
      <Route path="/movie/:id" element={<MovieDetail />}></Route>
      <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      <Route
        path="/movies/upcoming"
        element={<Movielist apiPath={"movie/upcoming"} title={"Upcoming"} />}
      ></Route>
      <Route
        path="/movies/top"
        element={<Movielist apiPath={"movie/top_rated"} title={"Top Rated"} />}
      ></Route>
      <Route
        path="/movies/popular"
        element={<Movielist apiPath={"movie/popular"} title={"Popular"} />}
      ></Route>
      <Route
        path="/search"
        element={<Search apiPath={"search/movie"}></Search>}
      ></Route>
    </Routes>
  );
};
