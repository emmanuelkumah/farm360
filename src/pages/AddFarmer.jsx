import React from "react";
import { FarmerForm } from "../components";
// import { redirect, json } from "react-router-dom";
// import axios from "axios";
// import { getAuthToken } from "../utils/auth";

const AddFarmer = () => {
  return (
    <>
      <section className="container mx-auto">
        <FarmerForm />
      </section>
    </>
  );
};

export default AddFarmer;

// export const action = async ({ request }) => {
//   const data = await request.formData();
//   const token = getAuthToken();

//   let submission = {
//     firstName: data.get("firstName"),
//     lastName: data.get("lastName"),
//     gender: data.get("gender"),
//     homeAddress: data.get("homeAddress"),
//     phone: data.get("phone"),
//     dateOfBirth: "1988-09-05",
//     communityId: data.get("communityId"),
//     farmerType: data.get("farmerType"),
//     cropType: data.get("cropType"),
//   };
//   //console.log(submission);

//   const response = await axios.post(
//     "https://dev.bjlfarmersmarket.net/farmer",
//     submission,
//     {
//       headers: {
//         "X-Origin": "WEB",
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );

//   console.log("Response from server:", response.data);
//   if (response.data) {
//     console.log("data saved successfully");
//     return redirect("/app/farmers");
//   }

//   if (response.status !== 200) {
//     return response;
//   }
// };
