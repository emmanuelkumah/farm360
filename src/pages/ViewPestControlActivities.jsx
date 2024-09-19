import React from "react";
import { PestControlActivitiesTable } from "../components";
import { axiosbaseURL } from "../api/axios";
import { useLoaderData } from "react-router-dom";

const ViewPestControlActivities = () => {
  const { data } = useLoaderData();

  return (
    <div className="container mx-auto">
      <PestControlActivitiesTable data={data} />
    </div>
  );
};

export default ViewPestControlActivities;
export const loader = async ({ params }) => {
  const { farmId } = params;

  const response = axiosbaseURL.get(`/farm/${farmId}/activities/pest-control`);

  if (
    response.status === 404 ||
    response.status === 401 ||
    response.status === 400 ||
    response.status === 500
  ) {
    throw new Error("Pest control activities not found.");
  }
  return response;
};
