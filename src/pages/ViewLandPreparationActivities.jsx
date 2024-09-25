import React from "react";
import { LandPreparationTable } from "../components";
import { useLoaderData } from "react-router-dom";
import { axiosbaseURL } from "../api/axios";

const ViewLandPreparationActivities = () => {
  const { data } = useLoaderData();
  return (
    <div className="container mx-auto">
      <LandPreparationTable data={data} />
    </div>
  );
};

export default ViewLandPreparationActivities;
export const loader = async ({ params }) => {
  const { farmId } = params;

  const response = axiosbaseURL.get(
    `/farm/${farmId}/activities/land-preparation`
  );

  if (
    response.status === 404 ||
    response.status === 401 ||
    response.status === 400 ||
    response.status === 500
  ) {
    throw new Error("Land preparation activities not found.");
  }
  return response;
};
