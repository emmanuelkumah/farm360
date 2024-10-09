import React from "react";
import { PrePlantingForm } from "../components";
import { axiosbaseURL } from "../api/axios";
import { useLoaderData } from "react-router-dom";

const PrePlanting = () => {
  const data = useLoaderData();
  return (
    <div>
      <PrePlantingForm data={data} />
    </div>
  );
};

export default PrePlanting;

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
