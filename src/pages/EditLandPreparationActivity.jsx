import React from "react";
import { LandPreparationForm } from "../components";
import { axiosbaseURL } from "../api/axios";
import { useLoaderData } from "react-router-dom";

const EditLandPreparationActivity = () => {
  const data = useLoaderData();
  return (
    <div>
      <LandPreparationForm data={data} method="put" />
    </div>
  );
};

export default EditLandPreparationActivity;

export const loader = async ({ params }) => {
  const getActivity = (response) => {
    return response.find(
      (activity) => activity.id === Number(params.activityId)
    );
  };
  const { farmId } = params;
  try {
    const response = await axiosbaseURL.get(
      `/farm/${farmId}/activities/land-preparation`
    );
    return getActivity(response.data);
  } catch (error) {
    console.log(error);
  }
};
