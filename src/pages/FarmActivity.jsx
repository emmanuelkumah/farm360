import React from "react";
import { Activities } from "../components";
import { useParams } from "react-router-dom";
const FarmActivity = () => {
  let { farmId } = useParams();
  console.log("farm id", farmId);
  return (
    <>
      <Activities id={farmId} />
    </>
  );
};

export default FarmActivity;
export const loader = async ({ params }) => {
  const farmId = params.farmId;
  console.log("id", farmId);
  // const activities = await request(`/api/farms/${farmId}/activities`);
  return null;
};
