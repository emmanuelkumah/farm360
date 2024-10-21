import React from "react";
import { StorageForm } from "../components";
import { useLoaderData } from "react-router-dom";
import { axiosbaseURL } from "../api/axios";

const EditStorageActivity = () => {
  const data = useLoaderData();
  return (
    <div>
      <StorageForm method="put" data={data} />
    </div>
  );
};

export default EditStorageActivity;

export const loader = async ({ params }) => {
  const getActivity = (response) => {
    return response.find(
      (activity) => activity.id === Number(params.activityId)
    );
  };
  const { farmId } = params;
  try {
    const response = await axiosbaseURL.get(
      `/farm/${farmId}/activities/storage`
    );
    return getActivity(response.data);
  } catch (error) {
    console.log(error);
  }
};
