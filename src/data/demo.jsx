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
    name: "management",
    icon: <PiPottedPlantDuotone />,
  },
  {
    name: "Reports",
    icon: <TbDeviceDesktopAnalytics />,
  },
];

export const dummyUsers = [
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
    firstName: "Adelaine",
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

export const farmersData = [
  {
    id: 1,
    image: avatar,
    firstName: "Cindy",
    lastName: "Tama",
    district: "Damango",
    address: "44 Mahogany street",
    phone: "0244222333",
    crop: "soya bean",
    farmSize: "4",
    primaryFarm: "CindyFarm 1",
    otherFarm: "CindyFarm 2",
  },
  {
    id: 2,
    image: avatar2,
    firstName: "Janet",
    lastName: "Ayowe",
    district: "Sisala",
    address: "44 Mahogany street",
    phone: "0244222333",
    crop: "soya bean",
    farmSize: "4",
    primaryFarm: "JanetFarm 1",
    otherFarm: "JanetFarm 2",
  },
  {
    id: 3,
    image: avatar3,
    firstName: "Yaw",
    lastName: "Aboloa",
    district: "Sisala",
    address: "44 Mahogany street",
    phone: "0244222333",
    crop: "soya bean",
    farmSize: "4",
    primaryFarm: "YawFarm 1",
    otherFarm: "YawFarm 2",
  },
  {
    id: 4,
    image: avatar4,
    firstName: "Daniel",
    lastName: "Amoah",
    district: "Fawome",
    address: "23 Banana street",
    phone: "0244222333",
    crop: "Cowpea",
    farmSize: "4",
    primaryFarm: "DanielFarm 1",
    other: "DanielFarm 2",
  },
];
