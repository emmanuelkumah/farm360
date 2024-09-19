import React from "react";
import { axiosbaseURL } from "../api/axios";
import { useLoaderData } from "react-router-dom";
import { PlantingActivitiesTable } from "../components";

const ViewPlantingActivities = () => {
  const { data } = useLoaderData();
  return (
    <div className="container mx-auto">
      <PlantingActivitiesTable data={data} />
    </div>
  );
};

export default ViewPlantingActivities;

export const loader = async ({ params }) => {
  const { farmId } = params;

  const response = axiosbaseURL.get(`/farm/${farmId}/activities/planting`);

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
