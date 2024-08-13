import React from "react";
import { EditFarmerForm } from "../components";
import { redirect } from "react-router-dom";
import { updateFarmerDetails } from "../data/dummyData";
const EditFarmer = () => {
  return (
    <>
      <EditFarmerForm />
    </>
  );
};

export default EditFarmer;
//use async await if connecting to api
export const action = async ({ request }) => {
  const data = await request.formData();
  const enteredFarmerData = {
    //id: String(Math.floor(Math.random() * 200000)),
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    gender: data.get("gender"),
    picture: data.get("picture"),
    address: data.get("address"),
    gps: data.get("gps"),
    contact: data.get("contact"),
    dateOfBirth: data.get("dateOfBirth"),
    region: data.get("region"),
    district: data.get("district"),
    community: data.get("community"),
    type: data.get("type"),
    group: data.get("group"),
  };
  //use axios.post and send the data in the body
  //console.log(enteredFarmerData);
  updateFarmerDetails(enteredFarmerData);

  // toast.success("Farmer details submitted successfully");
  // const farmer = createFarmer(enteredFarmerData);
  // return redirect("..");
  return redirect("/app/farmers");
};
