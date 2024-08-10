import React from "react";
import { FarmerDetails } from "../components";
import { farmersData } from "../data/dummyData";
const ViewFarmer = () => {
  return (
    <div>
      <FarmerDetails />
    </div>
  );
};

export default ViewFarmer;

export const loader = ({ params }) => {
  const id = params.farmerId;
  return farmersData.find((farmer) => farmer.id === id);
};
