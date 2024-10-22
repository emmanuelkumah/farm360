import React from "react";
import { ShipmentForm } from "../components";
import { axiosbaseURL } from "../api/axios";
import { useLoaderData } from "react-router-dom";

const EditShipmentActivity = () => {
  const data = useLoaderData();
  return (
    <div>
      <ShipmentForm method="put" data={data} />
    </div>
  );
};

export default EditShipmentActivity;
export const loader = async ({ params }) => {
  const getActivity = (response) => {
    return response.find(
      (activity) => activity.id === Number(params.activityId)
    );
  };
  const { farmId } = params;
  try {
    const response = await axiosbaseURL.get(
      `/farm/${farmId}/activities/shipment`
    );
    return getActivity(response.data);
  } catch (error) {
    console.log(error);
  }
};
