import React from "react";
import { SalesActivitiesTable } from "../components";
import { axiosbaseURL } from "../api/axios";
import { useLoaderData } from "react-router-dom";

const ViewSalesActivities = () => {
  const { data } = useLoaderData();

  return (
    <div className="container mx-auto">
      <SalesActivitiesTable data={data} />
    </div>
  );
};

export default ViewSalesActivities;
export const loader = async ({ params }) => {
  const { farmId } = params;

  const response = axiosbaseURL.get(`/farm/${farmId}/activities/crop-sales`);

  if (
    response.status === 404 ||
    response.status === 401 ||
    response.status === 400 ||
    response.status === 500
  ) {
    throw new Error("Sales activities not found.");
  }
  return response;
};
