import React from "react";
import { NavLink } from "react-router-dom";

const SubMenus = ({ item, onSubMenuClick }) => {
  return (
    <>
      <NavLink to={item.url} onClick={onSubMenuClick}>
        <div className="flex items-center pl-4 h-[60px] bg-secondary text-main border capitalize hover:bg-main hover:text-slate-50">
          {item.name}
        </div>
      </NavLink>
    </>
  );
};

export default SubMenus;
