import React from "react";
import { SalesData } from "../components";
import { salesActivitiesData } from "../data/dummyData";

const Sales = () => {
  return (
    <div>
      <SalesData />
    </div>
  );
};

export default Sales;

export const loader = () => {
  return salesActivitiesData;
};
