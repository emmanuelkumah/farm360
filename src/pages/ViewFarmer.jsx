import React from "react";
import { FarmerDetails } from "../components";
import { farmersData } from "../data/dummyData";
import { redirect, useRouteLoaderData } from "react-router-dom";
import { deleteFarmer } from "../data/dummyData";
const ViewFarmer = () => {
  const farmerData = useRouteLoaderData("farmer-detail");
  return (
    <div>
      <FarmerDetails farmerData={farmerData} />
    </div>
  );
};

export default ViewFarmer;

export const loader = ({ params }) => {
  const id = params.farmerId;
  console.log(typeof id);
  const farmer = farmersData.find((farmer) => farmer.id === id);
  //handle and throw errors when connecting to backend
  if (farmer) {
    return farmer;
  } else {
    throw { message: "Could not fetch farmer details" };
  }
};

//action function to delete farmer

export const action = ({ params }) => {
  const id = params.farmerId;
  deleteFarmer(id);
  // farmersData = farmersData.filter((farmer) => farmer.id !== id);
  // console.log(farmersData);

  return redirect("/app/farmers");
};
