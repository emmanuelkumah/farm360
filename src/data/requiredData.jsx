import React from "react";
import { PiPottedPlantBold, PiPottedPlantDuotone } from "react-icons/pi";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { FaUsers } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";

export const sidebarMenus = [
  {
    name: "Dashboard",
    icon: <PiPottedPlantBold />,
    iconClose: <MdKeyboardArrowDown />,
    iconOpened: <MdOutlineKeyboardArrowUp />,
    url: "#",
  },
  {
    name: "Users",
    icon: <FaUsers />,
    iconClose: <MdKeyboardArrowDown />,
    iconOpened: <MdOutlineKeyboardArrowUp />,
    url: "users",
  },

  {
    name: "Farmers",
    icon: <FaUsersLine />,
    iconClose: <MdKeyboardArrowDown />,
    iconOpened: <MdOutlineKeyboardArrowUp />,
    url: "farmers",
  },

  {
    name: "Farms",
    icon: <PiPottedPlantDuotone />,
    iconClose: <MdKeyboardArrowDown />,
    iconOpened: <MdOutlineKeyboardArrowUp />,
    url: "farms",
  },

  {
    name: "CTE",
    icon: <PiPottedPlantDuotone />,
    iconClose: <MdKeyboardArrowDown />,
    iconOpened: <MdOutlineKeyboardArrowUp />,
    url: "#",
    subMenu: [
      {
        name: "preplanting",
        url: "cte/preplanting",
      },
      {
        name: "planting",
        url: "cte/planting",
      },
      {
        name: "Weed control",
        url: "cte/weedcontrol",
      },
      {
        name: "Fertilizing",
        url: "cte/fertilizer",
      },
      {
        name: "Pest Control",
        url: "cte/pestcontrol",
      },
      {
        name: "harvesting",
        url: "cte/harvesting",
      },
      {
        name: "storage",
        url: "cte/storage",
      },
      {
        name: "sales",
        url: "cte/sales",
      },
      {
        name: "shipment",
        url: "cte/shipment",
      },
    ],
  },

  {
    name: "Reports",
    icon: <TbDeviceDesktopAnalytics />,
    iconClose: <MdKeyboardArrowDown />,
    iconOpened: <MdOutlineKeyboardArrowUp />,
    url: "reports",
  },
];

export const activities = [
  {
    activityId: 1,
    name: "Pre-Planting",
    icon: "🍂",
    link: "pre-planting",
  },
  {
    activityId: 2,
    name: "land-preparation",
    icon: "🍂",
    link: "land-preparation",
  },
  {
    activityId: 3,
    name: "Planting",
    icon: "🌱",
    link: "planting",
  },
  {
    activityId: 4,
    name: "Weed Control",
    icon: "🌿",
    link: "weed-control",
  },
  {
    activityId: 5,
    name: "fertilizing",
    icon: "🧪",
    link: "fertilizing",
  },
  {
    activityId: 6,
    name: "Pest control",
    icon: "🐛",
    link: "pest-control",
  },
  {
    activityId: 7,
    name: "Harvesting",
    icon: "🌾",
    link: "harvesting",
  },
  {
    activityId: 8,
    name: "Storage",
    icon: "🏡",
    link: "storage",
  },
  {
    activityId: 9,
    name: "Sales",
    icon: "💰",
    link: "sales",
  },
  {
    activityId: 10,
    name: "Shipment",
    icon: "🚚",
    link: "Shipment",
  },
  {
    activityId: 11,
    name: "Transporation",
    icon: "🚚",
    link: "transporation",
  },
];
