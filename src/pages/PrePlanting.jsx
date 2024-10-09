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
  const { farmId } = params;
  try {
    const response = axiosbaseURL.get(
      `/farm/${farmId}/activities/pre-planting`
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
