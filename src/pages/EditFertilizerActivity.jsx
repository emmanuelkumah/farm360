import React from "react";
import { FertilizerForm } from "../components";
import { axiosbaseURL } from "../api/axios";
import { useLoaderData } from "react-router-dom";

const EditFertilizerActivity = () => {
  const data = useLoaderData();

  return (
    <div>
      <FertilizerForm data={data} method="put" />
    </div>
  );
};

export default EditFertilizerActivity;

export const loader = async ({ params }) => {
  console.log(params);
  const getActivity = (response) => {
    return response.find(
      (activity) => activity.id === Number(params.activityId)
    );
  };
  const { farmId } = params;
  try {
    const response = await axiosbaseURL.get(
      `/farm/${farmId}/activities/fertilizer-application`
    );
    return getActivity(response.data);
  } catch (error) {
    console.log(error);
  }
};
