import React from "react";
import { SalesForm } from "../components";
import { axiosbaseURL } from "../api/axios";
import { useLoaderData } from "react-router-dom";

const EditSalesActivity = () => {
  const data = useLoaderData();

  return (
    <div>
      <SalesForm method="put" data={data} />
    </div>
  );
};

export default EditSalesActivity;

export const loader = async ({ params }) => {
  const getActivity = (response) => {
    return response.find(
      (activity) => activity.id === Number(params.activityId)
    );
  };
  const { farmId } = params;
  try {
    const response = await axiosbaseURL.get(
      `/farm/${farmId}/activities/crop-sales`
    );
    return getActivity(response.data);
  } catch (error) {
    console.log(error);
  }
};
