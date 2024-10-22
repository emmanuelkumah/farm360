import React from "react";
import { TransportationForm } from "../components";
import { axiosbaseURL } from "../api/axios";
import { useLoaderData } from "react-router-dom";

const EditTransportationActivity = () => {
  const data = useLoaderData();

  return (
    <div>
      <TransportationForm method="put" data={data} />
    </div>
  );
};

export default EditTransportationActivity;
export const loader = async ({ params }) => {
  const getActivity = (response) => {
    return response.find(
      (activity) => activity.id === Number(params.activityId)
    );
  };
  const { farmId } = params;
  try {
    const response = await axiosbaseURL.get(
      `/farm/${farmId}/activities/transportation`
    );
    return getActivity(response.data);
  } catch (error) {
    console.log(error);
  }
};
