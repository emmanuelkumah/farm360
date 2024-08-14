import React from "react";

import { FarmerForm } from "../components";
import { useRouteLoaderData } from "react-router-dom";
// import { EditFarmerForm } from "../components";

const EditFarmer = () => {
  const farmer = useRouteLoaderData("farmer-detail");
  console.log(farmer);

  return (
    <>
      <FarmerForm farmer={farmer} method="patch" />
    </>
  );
};

export default EditFarmer;
//use async await if connecting to api
// export const action = async ({ request }) => {
//   const data = await request.formData();
//   const enteredFarmerData = {
//     //id: String(Math.floor(Math.random() * 200000)),
//     firstName: data.get("firstName"),
//     lastName: data.get("lastName"),
//     gender: data.get("gender"),
//     picture: data.get("picture"),
//     address: data.get("address"),
//     gps: data.get("gps"),
//     contact: data.get("contact"),
//     dateOfBirth: data.get("dateOfBirth"),
//     region: data.get("region"),
//     district: data.get("district"),
//     community: data.get("community"),
//     type: data.get("type"),
//     group: data.get("group"),
//   };
//   //use axios.post and send the data in the body
//   //console.log(enteredFarmerData);
//   updateFarmerDetails(enteredFarmerData);

//   // toast.success("Farmer details submitted successfully");
//   // const farmer = createFarmer(enteredFarmerData);
//   // return redirect("..");
//   return redirect("/app/farmers");
// };
