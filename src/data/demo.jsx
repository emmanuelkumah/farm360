import React from "react";
import { PiPottedPlantBold, PiPottedPlantDuotone } from "react-icons/pi";
import { PiPlantDuotone } from "react-icons/pi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";
import avatar from "./avatar.jpg";
import avatar2 from "./avatar2.jpg";
import avatar3 from "./avatar3.png";
import avatar4 from "./avatar4.jpg";

export const links = [
  {
    name: "dashboard",
    icon: <PiPottedPlantBold />,
  },
  {
    name: "Users",
    icon: <FaUsers />,
  },
  {
    name: "Farmers",
    icon: <FaUsersLine />,
  },
  {
    name: "Farms",
    icon: <PiPottedPlantDuotone />,
  },
  {
    name: "Reports",
    icon: <TbDeviceDesktopAnalytics />,
  },
];

export const usersData = [
  {
    id: 1,
    image: avatar,
    firstName: "Emmanuel",
    lastName: "Kumah",
    email: "e.fkumah@gmail.com",
    password: "******",
    role: "Administrator",
  },
  {
    id: 2,
    image: avatar2,
    firstName: "George",
    lastName: "Addo",
    email: "george@gmail.com",
    password: "******",
    role: "Administrator",
  },
  {
    id: 3,
    image: avatar3,
    firstName: "Cindy",
    lastName: "Tama",
    email: "cindy@gmail.com",
    password: "******",
    role: "Agent",
  },
];
