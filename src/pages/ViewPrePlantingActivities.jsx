import React from "react";
import { PrePlantingActivitiesTable } from "../components";
import { axiosbaseURL } from "../api/axios";
import { useLoaderData } from "react-router-dom";

const ViewPrePlantingActivities = () => {
  const { data } = useLoaderData();
  console.log("preplanting", data);
  return (
    <div>
      <PrePlantingActivitiesTable data={data} />
    </div>
  );
};

export default ViewPrePlantingActivities;
export const loader = async ({ params }) => {
  const { farmId } = params;

  const response = axiosbaseURL.get(`/farm/${farmId}/activities/pre-planting`);

  if (
    response.status === 404 ||
    response.status === 401 ||
    response.status === 400 ||
    response.status === 500
  ) {
    throw new Error("Planting activities not found.");
  }
  return response;
};
