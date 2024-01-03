import React from "react";
import logo from "../../../public/assets/logo.svg";
import IconNavHome from "../../../public/assets/icon-nav-home.jsx";
import IconNavMovies from "../../../public/assets/icon-nav-movies.jsx";
import IconNavSeries from "../../../public/assets/icon-nav-tv-series.jsx";
import IconNavBookmarked from "../../../public/assets/icon-nav-bookmark.jsx";
import avatar_image from "../../../public/assets/avatar_image.jpg";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="navbar_logo" />
      </Link>

      <form className="navbar_form">
        <NavLink to="/" className="navbar_button">
          <IconNavHome className="navbar_icon" />
        </NavLink>
        <NavLink to="/movies" className="navbar_button">
          <IconNavMovies />
        </NavLink>
        <NavLink to="/series" className="navbar_button">
          <IconNavSeries />
        </NavLink>
        <NavLink to="/bookmarked" className="navbar_button">
          <IconNavBookmarked />
        </NavLink>
      </form>

      <img src={avatar_image} alt="avatar image" className="navbar_avatar" />
    </div>
  );
};

export default Navbar;
