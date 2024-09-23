import React from "react";
import { StorageActivitiesTable } from "../components";
import { axiosbaseURL } from "../api/axios";
import { useLoaderData } from "react-router-dom";

const ViewStorageActivities = () => {
  const { data } = useLoaderData();
  return (
    <div className="container mx-auto">
      <StorageActivitiesTable data={data} />
    </div>
  );
};

export default ViewStorageActivities;
export const loader = async ({ params }) => {
  const { farmId } = params;

  const response = axiosbaseURL.get(`/farm/${farmId}/activities/storage`);

  if (
    response.status === 404 ||
    response.status === 401 ||
    response.status === 400 ||
    response.status === 500
  ) {
    throw new Error("Shipment activities not found.");
  }
  return response;
};
