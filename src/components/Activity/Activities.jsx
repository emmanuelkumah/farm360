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
import Sales from "./Sales";
import Shippment from "./Shipment";
import PestControl from "./PestControl";

const Activities = () => {
  return (
    <div className="mx-10 my-[20%] md:my-0">
      <Tabs aria-label="Tabs with underline" variant="underline">
        <Tabs.Item active title="Pre-Planting" icon={HiClipboardList}>
          <PrePlanting />
        </Tabs.Item>

        <Tabs.Item title="Planting" icon={HiClipboardList}>
          <Planting />
        </Tabs.Item>
        <Tabs.Item title="Weed Control" icon={HiClipboardList}>
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
        <Tabs.Item title="Sales" icon={HiClipboardList}>
          <Sales />
        </Tabs.Item>
        <Tabs.Item title="Shipment " icon={HiClipboardList}>
          <Shippment />
        </Tabs.Item>
        <Tabs.Item title="Pest Control " icon={HiClipboardList}>
          <PestControl />
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default Activities;
