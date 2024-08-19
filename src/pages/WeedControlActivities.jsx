import React from "react";
import { weedControlActivitiesData } from "../data/dummyData";
import { WeedControlData } from "../components";
const WeedControlActivities = () => {
  return (
    <>
      <WeedControlData />
    </>
  );
};

export default WeedControlActivities;

export const loader = () => {
  return weedControlActivitiesData;
};
