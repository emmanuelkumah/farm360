import React from "react";
import { plantingActivitiesData } from "../data/dummyData";
import { useLoaderData } from "react-router-dom";
import { AllPlantingData } from "../components";
const PlantingActivities = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <AllPlantingData data={data} />
    </div>
  );
};

export default PlantingActivities;

export const loader = () => {
  //connect to api and load data
  //handle errors as well
  return plantingActivitiesData;
};
