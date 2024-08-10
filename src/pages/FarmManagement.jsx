import React from "react";
import { Tabs } from "flowbite-react";
import { PiPottedPlantFill } from "react-icons/pi";

import PrePlantingData from "../components/SavedActivities/PrePlantingData";
import {
  FertilizerApplicationData,
  HarvestingData,
  PestControlData,
  PlantingData,
  SalesData,
  ShipmentData,
  StorageData,
  WeedControlData,
} from "../components";
const FarmManagement = () => {
  return (
    <> Farm management tab</>
    // <div className="mx-10">
    //   <Tabs aria-label="Default tabs" variant="fullWidth">
    //     <Tabs.Item active title="Pre-Planting" icon={PiPottedPlantFill}>
    //       <PrePlantingData />
    //     </Tabs.Item>
    //     <Tabs.Item title="Planting" icon={PiPottedPlantFill}>
    //       <PlantingData />
    //     </Tabs.Item>
    //     <Tabs.Item title="Weed Control" icon={PiPottedPlantFill}>
    //       <WeedControlData />
    //     </Tabs.Item>
    //     <Tabs.Item title="Fertilizer Application" icon={PiPottedPlantFill}>
    //       <FertilizerApplicationData />
    //     </Tabs.Item>
    //     <Tabs.Item title="Harvesting" icon={PiPottedPlantFill}>
    //       <HarvestingData />
    //     </Tabs.Item>
    //     <Tabs.Item title="Storage" icon={PiPottedPlantFill}>
    //       <StorageData />
    //     </Tabs.Item>
    //     <Tabs.Item title="Sales" icon={PiPottedPlantFill}>
    //       <SalesData />
    //     </Tabs.Item>
    //     <Tabs.Item title="Pest Control" icon={PiPottedPlantFill}>
    //       <PestControlData />
    //     </Tabs.Item>
    //     <Tabs.Item title="Shipment" icon={PiPottedPlantFill}>
    //       <ShipmentData />
    //     </Tabs.Item>
    //   </Tabs>
    // </div>
  );
};

export default FarmManagement;
