import React from "react";
import { axiosbaseURL } from "../api/axios";
import { useLoaderData } from "react-router-dom";

const ViewPlantingActivities = () => {
  const plantingData = useLoaderData();
  console.log(plantingData);
  return (
    <div>
      {plantingData.map((plantingData) => (
        <div key={plantingData.id}>
          <h2>{plantingData.farm}</h2>
          <h2>{plantingData.activityDate}</h2>
          <h2>{plantingData.cropName}</h2>
          <h2>{plantingData.landSizeCovered}</h2>
        </div>
      ))}
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
        console.log("server response for planting", response.data);

        return response.data;
      });
    return response;
  } catch (error) {
    console.log("server error", error);
  }

  return response;
};
