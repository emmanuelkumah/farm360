import React from "react";
import { HarvestingData } from "../components";
import { harvestingActivitiesData } from "../data/dummyData";
const Harvesting = () => {
  return (
    <>
      <HarvestingData />
    </>
  );
};

export default Harvesting;

export const loader = () => {
  return harvestingActivitiesData;
};
