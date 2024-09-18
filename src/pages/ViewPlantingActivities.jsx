import React from "react";
import { axiosbaseURL } from "../api/axios";
import { useLoaderData } from "react-router-dom";
import { PlantingActivitiesTable } from "../components";

const ViewPlantingActivities = () => {
  const plantingData = useLoaderData();
  return (
    <div className="container mx-auto">
      <PlantingActivitiesTable data={plantingData} />
    </div>
  );
};

export default ViewPlantingActivities;

export const loader = async ({ params }) => {
  const id = params.farmId;
  try {
    const response = axiosbaseURL
      .get(`/farm/${id}/activities/planting`)
      .then((response) => {
        return response.data;
      });
    return response;
  } catch (error) {
    console.log("server error", error.response);
    return error.response;
  }

  // return response;
};
