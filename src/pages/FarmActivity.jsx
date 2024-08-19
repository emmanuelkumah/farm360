import React from "react";
import { Activities } from "../components";
const FarmActivity = () => {
  return (
    <>
      <Activities />
    </>
  );
};

export default FarmActivity;

export const action = async ({ request }) => {
  const data = await request.formData();
  const preplantingActivitiesData = {
    preparedDate: data.get("preparedDate"),
    landSize: data.get("landSize"),
    clearingDate: data.get("clearingDate"),
    ploughingDate: data.get("ploughingDate"),
    harrowingDate: data.get("harrowingDate"),
    manualpreparationDate: data.get("manualpreparationDate"),
  };
  console.log(preplantingActivitiesData);
};
