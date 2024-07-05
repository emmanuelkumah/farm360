import React, { useEffect } from "react";
import {} from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import avatar from "../data/avatar.jpg";
import { Notification, UserProfile } from ".";
import { useStateContext } from "../context/ContextProvider";
import { AiOutlineMenu } from "react-icons/ai";
import { IoNotificationsCircleOutline } from "react-icons/io5";

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
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    screenSize,
    setScreenSize,
    handleClick,
  } = useStateContext();

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

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        color="blue"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          color="blue"
          dotColor="#03C9D7"
          customFunc={() => handleClick("notification")}
          icon={<IoNotificationsCircleOutline />}
        />
        <div
          className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() => handleClick("userProfile")}
        >
          <img
            src={avatar}
            alt="user profile"
            className="rounded-full w-8 h-8"
          />
          <p>
            <span className="text-gray-400 text-14">Hi, </span>
            <span className="text-gray-400 font-bold ml-1 text-14">
              Emmanuel
            </span>
          </p>
          <MdKeyboardArrowDown className="text-gray-400 text-14" />
        </div>
        {isClicked.userProfile && <UserProfile />}
        {isClicked.notification && <Notification />}
      </div>
    </div>
  );
};

export default Navbar;
