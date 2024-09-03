import React, { useState } from "react";
import { FarmerForm } from "../components";
import { useLoaderData, redirect } from "react-router-dom";
import axios from "axios";
import { getAuthToken } from "../utils/auth";

const AddFarmer = () => {
  // const { token } = useAuth();
  // console.log("farmer", token);
  const data = useLoaderData();
  // console.log(data);
  return (
    <>
      <section className="container mx-auto">
        <FarmerForm method="post" />
      </section>
    </>
  );
};

export default AddFarmer;

export const action = async ({ request, params }) => {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();

  //check the method
  if (method === "PATCH") {
    //const id = params.farmerId;
    let updateData = {
      id: params.farmerId,
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
    updateFarmerDetails(updateData);
  }
  //use axios.post and send the data in the body
  if (method === "POST") {
    let enteredFarmerData = {
      id: Math.floor(Math.random() * 1000),
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
    const response = await axios.post(
      "https://dev.bjlfarmersmarket.net/farmer",
      enteredFarmerData,
      {
        headers: {
          "X-Origin": "WEB",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.status);
    console.log(enteredFarmerData);
    //createFarmer(enteredFarmerData);
  }
  return redirect("..");
};

export const loader = async () => {
  // const response = await axios.get(
  //   "https://dev.bjlfarmersmarket.net/geo/regions",
  //   {
  //     headers: {
  //       Authorization: "Bearer" + token,
  //       "X-Origin": "WEB",
  //     },
  //   }
  // );
  // console.log(response.status);
  // await axios.get("");
};

// export const action = async ({ request }) => {
//   const data = await request.formData();

//   const farmerData = {
//     gender: data.get("gender"),
//     firstName: data.get("firstName"),
//     lastName: data.get("lastName"),
//     address: data.get("address"),
//     gps: data.get("gps"),
//     contact: data.get("contact"),
//     contact: data.get("contact"),
//     region: data.get("region"),
//     district: data.get("district"),
//     community: data.get("community"),
//     type: data.get("type"),
//     group: data.get("group"),
//     dateOfBirth: data.get("dateOfBirth"),
//     picture: data.get("picture"),
//   };
//   console.log(farmerData);
//   //connect to api and send request
//   return redirect("/app/farmers");
// };
