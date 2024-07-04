import React from "react";
import { PiPottedPlantBold } from "react-icons/pi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineClose } from "react-icons/md";

import { Link, NavLink } from "react-router-dom";
import { links } from "../data/demo.jsx";
const Sidebar = () => {
  const activeMenu = true;
  const activeLink =
    "flex items-center gap-5  pt-3 pb-2.5 rounded-lg text-xl text-black text-md m-2";
  const normalLink =
    "flex items-center gap-5  pt-3 pb-2.5 rounded-lg text-xl  text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/app"
              onClick={() => {}}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <PiPottedPlantBold />
              <span>Farm360</span>
            </Link>
            <button
              type="button"
              onClick={() => {}}
              className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden 
         "
            >
              <MdOutlineClose />
            </button>
          </div>
          <div className="mt-10">
            {links.map((link) => (
              <div key={link.name}>
                <NavLink
                  to={`/app/${link.name}`}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {link.icon}
                  <span className="capitalize">{link.name}</span>
                </NavLink>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
