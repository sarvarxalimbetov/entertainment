import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout_outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
