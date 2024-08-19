import React from "react";
import { NavLink } from "react-router-dom";

const SubMenus = ({ subMenu }) => {
  return (
    <div>
      <section className=" border w-full p-2 capitalize">
        <NavLink to={subMenu.url}>{subMenu.name}</NavLink>
      </section>
    </div>
  );
};

export default SubMenus;
