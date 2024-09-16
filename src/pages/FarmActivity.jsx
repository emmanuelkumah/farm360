import React from "react";
import { Activities } from "../components";
import { useParams } from "react-router-dom";
const FarmActivity = () => {
  let { farmId } = useParams();
  console.log("farm id", farmId);
  return (
    <>
      <Activities id={farmId} />
    </>
  );
};

export default FarmActivity;
export const loader = async ({ params }) => {
  const farmId = params.farmId;
  console.log("id", farmId);
  // const activities = await request(`/api/farms/${farmId}/activities`);
  return null;
};
// export const action = async ({ request, params }) => {
//   // console.log("action id", params.farmId);
//   const data = await request.formData();
//   const formData = {
//     activityDate: data.get("activityDate"),
//     weedControlMethod: data.get("weedControlMethod"),
//     chemicalName: data.get("chemicalName"),
//     chemicalApplicationRate: data.get("chemicalApplicationRate"),
//     supervisorName: data.get("supervisorName"),
//     supervisorContact: data.get("supervisorContact"),
//     supervisorQualification: data.get("supervisorQualification"),
//     otherCert: data.get("otherCert"),
//   };
//   console.log(formData, params.farmId);

//   return null;
// };
