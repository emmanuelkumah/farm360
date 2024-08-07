import React from "react";
import { Tabs } from "flowbite-react";
import { PiPottedPlantFill } from "react-icons/pi";
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
        <Tabs.Item active title="Pre-Planting" icon={PiPottedPlantFill}>
          <PrePlanting />
        </Tabs.Item>
        <Tabs.Item title="Planting" icon={PiPottedPlantFill}>
          <Planting />
        </Tabs.Item>
        <Tabs.Item title="Weed Control" icon={PiPottedPlantFill}>
          <WeedControl />
        </Tabs.Item>
        <Tabs.Item title="Fertilizer Application" icon={PiPottedPlantFill}>
          <FertilizerApplication />
        </Tabs.Item>
        <Tabs.Item title="Harvesting" icon={PiPottedPlantFill}>
          <Harvesting />
        </Tabs.Item>
        <Tabs.Item title="Storage" icon={PiPottedPlantFill}>
          <Storage />
        </Tabs.Item>
        <Tabs.Item title="Sales" icon={PiPottedPlantFill}>
          <Sales />
        </Tabs.Item>

        <Tabs.Item title="Pest Control " icon={PiPottedPlantFill}>
          <PestControl />
        </Tabs.Item>
        <Tabs.Item title="Shipment " icon={PiPottedPlantFill}>
          <Shippment />
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default Activities;
