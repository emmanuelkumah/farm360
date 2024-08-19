import React from "react";
import { fertActivitiesData } from "../data/dummyData";
import { FertilizerApplicationData } from "../components";

const FertilizerActivities = () => {
  return (
    <div>
      <FertilizerApplicationData />
    </div>
  );
};

export default FertilizerActivities;

export const loader = () => {
  return fertActivitiesData;
};
