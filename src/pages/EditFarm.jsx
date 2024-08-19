import React from "react";
import { FarmForm } from "../components";
import { useRouteLoaderData } from "react-router-dom";
const EditFarm = () => {
  const farm = useRouteLoaderData("farm-detail");
  return (
    <>
      <FarmForm farm={farm} method="patch" />
    </>
  );
};

export default EditFarm;
