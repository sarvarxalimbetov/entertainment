import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Movies from "./pages/movies/Movies";
import Series from "./pages/series/Series";
import Bookmarked from "./pages/bookmarked/Bookmarked";
import NotFound from "./pages/notFound/NotFound";
import PrivateRoutes from "./auth/PrivateRoutes";
import Login from "./auth/login/Login";
import Signup from "./auth/signup/signup";
import Container from "./components/Container/Container";
import Layout from "./Layout/Layout.jsx";
import "./App.css";

const App = () => {

  return (
    <Container>
      <div className="wrapper">
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route element={<PrivateRoutes />}>
              <Route path="/bookmarked" element={<Bookmarked />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Container>
  );
};

export default App;
