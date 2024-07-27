import React from "react";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <nav>Navbar goes here</nav>
      <Outlet />
      <footer>Footer goes here</footer>
    </>
  );
};

export default HomeLayout;
