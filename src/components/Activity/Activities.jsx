import React from "react";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import PrePlanting from "./PrePlanting";
import Planting from "./Planting";
import WeedControl from "./WeedControl";
import FertilizerApplication from "./FertilizerApplication";
import Harvesting from "./Harvesting";
import Storage from "./Storage";

const Activities = () => {
  return (
    <div className="mx-10 my-[20%] md:my-0">
      <Tabs aria-label="Tabs with underline" variant="underline">
        <Tabs.Item active title="Pre-Planing" icon={HiUserCircle}>
          <PrePlanting />
        </Tabs.Item>

        <Tabs.Item title="Planting" icon={MdDashboard}>
          <Planting />
        </Tabs.Item>
        <Tabs.Item title="Weed Control" icon={HiAdjustments}>
          <WeedControl />
        </Tabs.Item>
        <Tabs.Item title="Fertilizer Application" icon={HiClipboardList}>
          <FertilizerApplication />
        </Tabs.Item>
        <Tabs.Item title="Harvesting" icon={HiClipboardList}>
          <Harvesting />
        </Tabs.Item>
        <Tabs.Item title="Storage" icon={HiClipboardList}>
          <Storage />
        </Tabs.Item>
        <Tabs.Item title="Shipment" icon={HiClipboardList}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Contacts tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
        <Tabs.Item title="Sales " icon={HiClipboardList}>
          This is{" "}
          <span className="font-medium text-gray-800 dark:text-white">
            Contacts tab's associated content
          </span>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default Activities;
