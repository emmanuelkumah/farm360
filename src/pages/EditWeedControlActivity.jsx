import React from "react";
import { WeedControlForm } from "../components";
import { axiosbaseURL } from "../api/axios";
import { useLoaderData } from "react-router-dom";

const EditWeedControlActivity = () => {
  const data = useLoaderData();

  return (
    <div>
      <WeedControlForm data={data} method="put" />
    </div>
  );
};

export default EditWeedControlActivity;

export const loader = async ({ params }) => {
  const getActivity = (response) => {
    return response.find(
      (activity) => activity.id === Number(params.activityId)
    );
  };
  const { farmId } = params;
  try {
    const response = await axiosbaseURL.get(
      `/farm/${farmId}/activities/weed-control`
    );
    return getActivity(response.data);
  } catch (error) {
    console.log(error);
  }
};
