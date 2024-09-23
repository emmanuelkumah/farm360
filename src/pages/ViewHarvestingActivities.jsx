import React from "react";
import { useLoaderData } from "react-router-dom";
import { HarvestingActivitiesTable } from "../components";
import { axiosbaseURL } from "../api/axios";

const ViewHarvestingActivities = () => {
  const { data } = useLoaderData();
  return (
    <div className="container mx-auto">
      <HarvestingActivitiesTable data={data} />
    </div>
  );
};

export default ViewHarvestingActivities;
export const loader = async ({ params }) => {
  const { farmId } = params;

  const response = axiosbaseURL.get(`/farm/${farmId}/activities/harvesting`);

  if (
    response.status === 404 ||
    response.status === 401 ||
    response.status === 400 ||
    response.status === 500
  ) {
    throw new Error("Harvesting activities not found.");
  }
  return response;
};
