import React, { useState } from "react";
import { FarmerForm } from "../components";
import { redirect } from "react-router-dom";
import axios from "axios";
import { getAuthToken } from "../utils/auth";

const AddFarmer = () => {
  // const { token } = useAuth();
  // console.log("farmer", token);
  // console.log(data);
  return (
    <>
      <section className="container mx-auto">
        <FarmerForm />
      </section>
    </>
  );
};

export default AddFarmer;

export const action = async ({ request }) => {
  const data = await request.formData();
  const token = getAuthToken();

  let submission = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    gender: data.get("gender"),
    homeAddress: data.get("homeAddress"),
    phone: data.get("phone"),
    dateOfBirth: "1988-09-05",
    communityId: data.get("communityId"),
    farmerType: data.get("farmerType"),
    cropType: data.get("cropType"),
  };
  console.log(submission);

  try {
    const response = await axios.post(
      "https://dev.bjlfarmersmarket.net/farmer",
      submission,
      {
        headers: {
          "X-Origin": "WEB",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Response from server:", response.data);

    if (response.status !== 200) {
      return response;
    }

    return redirect("/app/farmers");
  } catch (error) {
    console.log("error", error.response.data);
  }
};

// export const loader = async () => {
//   // const response = await axios.get(
//   //   "https://dev.bjlfarmersmarket.net/geo/regions",
//   //   {
//   //     headers: {
//   //       Authorization: "Bearer" + token,
//   //       "X-Origin": "WEB",
//   //     },
//   //   }
//   // );
//   // console.log(response.status);
//   // await axios.get("");
// };
