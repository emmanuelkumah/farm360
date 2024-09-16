import React from "react";
import { Tabs } from "flowbite-react";
import { PiPottedPlantFill } from "react-icons/pi";
import PrePlanting from "./PrePlantingForm";
import Planting from "./PlantingForm";
import WeedControl from "./WeedControlForm";
import FertilizerApplication from "./FertilizerForm";
import Harvesting from "./HarvestingForm";
import Storage from "./StorageForm";
import Sales from "./SalesForm";
import Shippment from "./ShipmentForm";
import PestControl from "./PestControlForm";

const Activities = ({ id }) => {
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
          <WeedControl id={id} />
        </Tabs.Item>
        <Tabs.Item title="Fertilizer Application" icon={PiPottedPlantFill}>
          <FertilizerApplication />
        </Tabs.Item>
        <Tabs.Item title="Pest Control " icon={PiPottedPlantFill}>
          <PestControl />
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
        <Tabs.Item title="Shipment " icon={PiPottedPlantFill}>
          <Shippment />
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

export default Activities;
