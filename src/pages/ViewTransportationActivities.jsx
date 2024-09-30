import React from "react";
import { axiosbaseURL } from "../api/axios";
import { TransportationActivitiesTable } from "../components";
import { useLoaderData } from "react-router-dom";

const ViewTransportationActivities = () => {
  const { data } = useLoaderData();
  return (
    <div className="container mx-auto">
      <TransportationActivitiesTable data={data} />
    </div>
  );
};

export default ViewTransportationActivities;
export const loader = async ({ params }) => {
  const { farmId } = params;

  const response = axiosbaseURL.get(
    `/farm/${farmId}/activities/transportation`
  );

  if (
    response.status === 404 ||
    response.status === 401 ||
    response.status === 400 ||
    response.status === 500
  ) {
    throw new Error("Transportation activities not found.");
  }
  return response;
};
