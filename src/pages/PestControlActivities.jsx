import React from "react";
import { PestControlData } from "../components";
import { pestControlActivitiesData } from "../data/dummyData";

const PestControlActivities = () => {
  return (
    <div>
      <PestControlData />
    </div>
  );
};

export default PestControlActivities;

export const loader = () => {
  return pestControlActivitiesData;
};
