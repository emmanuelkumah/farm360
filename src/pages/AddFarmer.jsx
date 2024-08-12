import React from "react";
import { AddFarmerForm } from "../components";
import { redirect } from "react-router-dom";
import { createFarmer } from "../data/dummyData";
import { toast } from "react-toastify";
const AddFarmer = () => {
  return (
    <>
      <section className="container mx-auto">
        <AddFarmerForm />
      </section>
    </>
  );
};

export default AddFarmer;

//use async await if connecting to api
export const action = async ({ request }) => {
  const data = await request.formData();
  const enteredFarmerData = {
    id: String(Math.floor(Math.random() * 200000)),
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
  // console.log(enteredFarmerData);

  const enteredFarmData = {
    farmName: data.get("farmName"),
    crop: data.get("crop"),
    farmSize: data.get("farmSize"),
    farmRegion: data.get("farmRegion"),
    farmDistrict: data.get("farmDistrict"),
    farmCommunity: data.get("farmCommunity"),
  };
  // console.log(enteredFarmData);

  const enteredSecondFarmData = {
    secondFarmName: data.get("secondFarmName"),
    secondFarmCrop: data.get("secondFarmCrop"),
    secondFarmSize: data.get("secondFarmSize"),
    secondFarmRegion: data.get("secondFarmRegion"),
    secondFarmDistrict: data.get("secondFarmDistrict"),
    secondFarmCommunity: data.get("secondFarmCommunity"),
  };
  // console.log(enteredSecondFarmData);
  ///grab farmers data and append the entered data
  //

  toast.success("Form submitted successfully");
  const farmer = await createFarmer(enteredFarmerData);
  return farmer;
  return redirect("farmers");
};
