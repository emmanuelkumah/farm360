import React from "react";
import { FarmDetails } from "../components";
import { useRouteLoaderData, redirect } from "react-router-dom";
import { deleteFarm, farmsData } from "../data/dummyData";

const ViewFarm = () => {
  const farmData = useRouteLoaderData("farm-detail");
  return (
    <>
      <FarmDetails farmData={farmData} />
    </>
  );
};

export default ViewFarm;

export const loader = ({ params }) => {
  const id = params.farmId;
  console.log(typeof id);
  const farm = farmsData.find((farm) => farm.id === id);
  //handle and throw errors when connecting to backend
  if (farm) {
    return farm;
  } else {
    throw { message: "Could not fetch farm details" };
  }
};

//action to delete farmer
export const action = ({ params }) => {
  const id = params.farmId;
  deleteFarm(id);

  return redirect("/app/farms");
};
