import React from "react";
import { ShipmentActivitiesTable } from "../components";
import { axiosbaseURL } from "../api/axios";
import { useLoaderData } from "react-router-dom";

const ViewShipmentActivities = () => {
  const { data } = useLoaderData();
  return (
    <div className="container mx-auto">
      <ShipmentActivitiesTable data={data} />
    </div>
  );
};

export default ViewShipmentActivities;

export const loader = async ({ params }) => {
  const { farmId } = params;

  const response = axiosbaseURL.get(`/farm/${farmId}/activities/shipment`);

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
