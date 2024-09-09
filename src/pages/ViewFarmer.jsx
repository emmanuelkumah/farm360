import React from "react";
import { FarmerDetails } from "../components";
import { redirect, useRouteLoaderData, useParams } from "react-router-dom";
import { deleteFarmer } from "../data/dummyData";
import { getAuthToken } from "../utils/auth";
import axios from "axios";

const ViewFarmer = () => {
  const farmerData = useRouteLoaderData("farmer-detail");
  const id = useParams();
  return (
    <div>
      <FarmerDetails farmerData={farmerData} id={id} />
    </div>
  );
};

export default ViewFarmer;

export const loader = () => {
  const token = getAuthToken();

  const response = axios.get("https://dev.bjlfarmersmarket.net/farmers", {
    headers: {
      "X-Origin": "WEB",
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};

//action function to delete farmer

export const action = ({ params }) => {
  const id = params.farmerId;
  console.log(`delete`, id);
  //deleteFarmer(id);
  // farmersData = farmersData.filter((farmer) => farmer.id !== id);
  // console.log(farmersData);

  return redirect("/app/farmers");
};
