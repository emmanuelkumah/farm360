import React from "react";

import { FarmerForm } from "../components";
import { useRouteLoaderData } from "react-router-dom";
// import { EditFarmerForm } from "../components";

const EditFarmer = () => {
  const farmer = useRouteLoaderData("farmer-detail");

  return (
    <>
      <FarmerForm farmer={farmer} method="patch" />
    </>
  );
};

export default EditFarmer;
