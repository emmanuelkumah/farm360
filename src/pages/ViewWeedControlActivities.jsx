import React from "react";
import { WeedControlActivitiesTable } from "../components";
import { axiosbaseURL } from "../api/axios";
import { useLoaderData } from "react-router-dom";

const ViewWeedControlActivities = () => {
  const { data } = useLoaderData();
  return (
    <div className="container mx-auto">
      <WeedControlActivitiesTable data={data} />
    </div>
  );
};

export default ViewWeedControlActivities;

export const loader = ({ params }) => {
  const { farmId } = params;
  const response = axiosbaseURL.get(`/farm/${farmId}/activities/weed-control`);

  if (
    response.status === 404 ||
    response.status === 401 ||
    response.status === 500
  ) {
    throw new Error("Weed control activities not found.");
  }
  return response;
};
