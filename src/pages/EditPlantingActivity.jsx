import React from "react";
import PlantingForm from "../components/Activity/PlantingForm";
import { axiosbaseURL } from "../api/axios";
import { useLoaderData } from "react-router-dom";
const EditPlantingActivity = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <PlantingForm data={data} method="put" />
    </div>
  );
};

export default EditPlantingActivity;
export const loader = async ({ params }) => {
  const getActivity = (response) => {
    return response.find(
      (activity) => activity.id === Number(params.activityId)
    );
  };
  const { farmId } = params;
  try {
    const response = await axiosbaseURL.get(
      `/farm/${farmId}/activities/planting`
    );
    return getActivity(response.data);
  } catch (error) {
    console.log(error);
  }
};
