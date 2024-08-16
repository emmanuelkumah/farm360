import React from "react";
import { PrePlantingData } from "../components";
import { prePlantingActivitiesData } from "../data/dummyData";
import { useLoaderData } from "react-router-dom";

const PrePlantingActivities = () => {
  const data = useLoaderData();
  console.log(data);
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
