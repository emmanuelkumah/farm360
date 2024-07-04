import React, { act } from "react";

const Sidebar = () => {
  const activeMenu = true;
  return (
    <>
      <div className="flex relative dark:bg-main-dark-bg">
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
            Sidebar
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg bg-whitedark:bg-secondary-dark-bg">
            Sidebar w-0
          </div>
        )}
        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? "md:ml-72" : "flex-2"
          }`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
            Navbar
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
