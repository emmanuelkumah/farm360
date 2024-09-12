import React, { useEffect, useState } from "react";
import { Avatar, Dropdown, Button } from "flowbite-react";
import { useStateContext } from "../context/ContextProvider";
import { AiOutlineMenu } from "react-icons/ai";
import { redirect, useNavigate } from "react-router-dom";

const NavButton = ({ customFunc, icon, color, dotColor }) => (
  <button
    type="button"
    onClick={customFunc}
    style={{ color }}
    className="relative text-xl rounded-full p-3 hover:bg-light-gray"
  >
    <span
      style={{ background: dotColor }}
      className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
    />
    {icon}
  </button>
);

const Navbar = () => {
  // const { token } = useAuth();
  // console.log(token);
  const navigate = useNavigate();

  const { setActiveMenu, screenSize, setScreenSize } = useStateContext();
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const handleLogOut = () => {
    localStorage.removeItem("token");

    // navigation("/login");
    navigate("/login");
  };

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        color="#357960"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        icon={<AiOutlineMenu />}
      />
      <div>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>

          <Dropdown.Item>
            <Button onClick={handleLogOut}>Log out</Button>
          </Dropdown.Item>

          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
