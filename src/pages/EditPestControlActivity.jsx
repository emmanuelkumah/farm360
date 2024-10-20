import React from "react";
import { PestControlForm } from "../components";
import { useLoaderData } from "react-router-dom";
import { axiosbaseURL } from "../api/axios";

const EditPestControlActivity = () => {
  const data = useLoaderData();

  return (
    <div>
      <PestControlForm method="put" data={data} />
    </div>
  );
};

export default EditPestControlActivity;

export const loader = async ({ params }) => {
  const getActivity = (response) => {
    return response.find(
      (activity) => activity.id === Number(params.activityId)
    );
  };
  const { farmId } = params;
  try {
    const response = await axiosbaseURL.get(
      `/farm/${farmId}/activities/pest-control`
    );
    return getActivity(response.data);
  } catch (error) {
    console.log(error);
  }
};
