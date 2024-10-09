import React from "react";
import { PrePlantingForm } from "../components";
import { axiosbaseURL } from "../api/axios";
import { useLoaderData } from "react-router-dom";

const EditPreplantingActivity = () => {
  const data = useLoaderData();
  return <PrePlantingForm data={data} method="put" />;
};

export default EditPreplantingActivity;

export const loader = async ({ params }) => {
  const getActivity = (response) => {
    return response.find(
      (activity) => activity.id === Number(params.activityId)
    );
  };
  const { farmId } = params;
  try {
    const response = await axiosbaseURL.get(
      `/farm/${farmId}/activities/pre-planting`
    );
    return getActivity(response.data);
  } catch (error) {
    console.log(error);
  }
};
