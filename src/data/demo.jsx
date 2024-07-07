import React from "react";
import { PiPottedPlantBold, PiPottedPlantDuotone } from "react-icons/pi";
import { PiPlantDuotone } from "react-icons/pi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";

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
