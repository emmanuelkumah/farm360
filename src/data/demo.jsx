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
    name: "Dashboard",
    icon: <PiPottedPlantBold />,
    url: "",
  },
  {
    name: "Users",
    icon: <FaUsers />,
    url: "users",
  },
  {
    name: "Farmers",
    icon: <FaUsersLine />,
    url: "farmers",
  },

  {
    name: "Farms",
    icon: <PiPottedPlantDuotone />,
    url: "farms",
  },
  {
    name: "management",
    icon: <PiPottedPlantDuotone />,
    url: "management",
  },
  {
    name: "Collectors",
    icon: <FaUsersLine />,
    url: "collectors",
  },
  {
    name: "Reports",
    icon: <TbDeviceDesktopAnalytics />,
    url: "reports",
  },
];

export const dummyUsers = [
  {
    regionId: 1,
    image: avatar,
    firstName: "Emmanuel",
    lastName: "Kumah",
    email: "e.fkumah@gmail.com",
    password: "******",
    role: "Administrator",
  },
  {
    regionId: 2,
    image: avatar2,
    firstName: "Adelaine",
    lastName: "Addo",
    email: "george@gmail.com",
    password: "******",
    role: "Administrator",
  },
  {
    regionId: 3,
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
    regionId: 1,
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
    regionId: 2,
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
    regionId: 3,
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
    regionId: 4,
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

export const regions = [
  {
    regionId: 1,
    name: "Ahafo",
  },
  {
    regionId: 2,
    name: "Ashanti",
  },
  {
    regionId: 3,
    name: "Bono East",
  },
  {
    regionId: 4,
    name: "Central",
  },
  {
    regionId: 5,
    name: "Eastern",
  },
  {
    regionId: 6,
    name: "Greater Accra",
  },
  {
    regionId: 7,
    name: "Northern",
  },
  {
    regionId: 8,
    name: "North East",
  },
  {
    regionId: 9,
    name: "Oti",
  },
  {
    regionId: 10,
    name: "Savannah",
  },
  {
    regionId: 11,
    name: "Upper East",
  },
  {
    regionId: 12,
    name: "Upper West",
  },
  {
    regionId: 13,
    name: "Volta",
  },
  {
    regionId: 14,
    name: "Western North",
  },
  {
    regionId: 15,
    name: "Western",
  },
  {
    regionId: 16,
    name: "Bono",
  },
];

export const districts = [
  {
    regionId: 1,
    listDistrict: [
      "Asunafo North Municipal",
      "Asutifi North District",
      "Tano South Municipal",
      "Asutifi South District",
      "Asunafo South District",
      "Tano North Municipal",
    ],
  },
  {
    regionId: 2,
    listDistrict: [
      " Kumasi Metropolitan",
      "Ahafo Ano North Municipal",
      "Asante Akim Central Municipal",
      "Asante Akim South Municipal",
      "Asokore Mampong Municipal",
      "Asokwa Municipal",
      "Atwima Nwabiagya Municipal",
      "Bekwai Municipal",
      "Ejisu Municipal",
      "Ejura Sekyredumasi Municipal",
      "Juaben Municipal",
      "Kwabre East Municipal",
      "Kwadaso Municipal",
      "Mampong Municipal",
      "Offinso Municipal",
      "Obuasi Municipal",
      "Oforikrom Municipal",
      "Old Tafo Municipal",
      "Suame Municipal",
      "Adansi Asokwa ",
      "Adansi North ",
      "Adansi South ",
      "Afigya Kwabre North ",
      "Afigya Kwabre South ",
      "Ahafo Ano South East",
      "Ahafo Ano South West",
      "Akrofuom",
      "Amansie Central",
      "Amansie South",
      "Amansie West",
      "Asante Akim North",
      "Atwima Kwanwoma",
      "Atwima Mponua",
      "Atwima Nwabiagya North",
      "Bosome Freho",
      "Bosomtwe",
      "Obuasi East",
      "Offinso North",
      "Sekyere Afram Plains",
      "Sekyere Central ",
      "Sekyere East",
      "Sekyere Kumaw",
      "Sekyere South",
    ],
  },
];
