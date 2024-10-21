import React from "react";
import { HarvestingForm } from "../components";
import { useLoaderData } from "react-router-dom";
import { axiosbaseURL } from "../api/axios";

const EditHarvestingActivity = () => {
  const data = useLoaderData();
  return (
    <div>
      <HarvestingForm method="put" data={data} />
    </div>
  );
};

export default EditHarvestingActivity;
export const loader = async ({ params }) => {
  const getActivity = (response) => {
    return response.find(
      (activity) => activity.id === Number(params.activityId)
    );
  };
  const { farmId } = params;
  try {
    const response = await axiosbaseURL.get(
      `/farm/${farmId}/activities/harvesting`
    );
    return getActivity(response.data);
  } catch (error) {
    console.log(error);
  }
};
