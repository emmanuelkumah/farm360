import React from "react";
import { FertilizingActivitiesTable } from "../components";
import { useLoaderData } from "react-router-dom";
import { axiosbaseURL } from "../api/axios";

const ViewFertilizingActivities = () => {
  const { data } = useLoaderData();

  return (
    <div className="container mx-auto">
      <FertilizingActivitiesTable data={data} />
    </div>
  );
};

export default ViewFertilizingActivities;
export const loader = async ({ params }) => {
  const { farmId } = params;

  const response = axiosbaseURL.get(
    `/farm/${farmId}/activities/fertilizer-application`
  );

  if (
    response.status === 404 ||
    response.status === 401 ||
    response.status === 400 ||
    response.status === 500
  ) {
    throw new Error("Fertilizing activities not found.");
  }
  return response;
};
