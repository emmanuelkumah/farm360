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
  const farmer = farmersData.find((farmer) => farmer.id === id);
  //handle and throw errors when connecting to backend
  if (farmer) {
    return farmer;
  } else {
    throw { message: "Could not fetch farmer details" };
  }
};
