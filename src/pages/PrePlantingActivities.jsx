import React from "react";
import { PrePlantingData } from "../components";
import { prePlantingActivitiesData } from "../data/dummyData";

const PrePlantingActivities = () => {
  return (
    <>
      <PrePlantingData />
    </>
  );
};

export default PrePlantingActivities;

export const loader = () => {
  return prePlantingActivitiesData;
};
