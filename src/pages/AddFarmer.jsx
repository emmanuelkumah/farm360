import React from "react";
import { FarmerForm } from "../components";
import { axiosbaseURL } from "../api/axios";
import { redirect, useActionData } from "react-router-dom";
import { toast } from "react-toastify";

const AddFarmer = () => {
  const errors = useActionData();
  return (
    <>
      <section className="container mx-auto">
        <FarmerForm errors={errors} />
      </section>
    </>
  );
};

export default AddFarmer;

export const action = async ({ request }) => {
  const data = await request.formData();

  const farmerImage = data.get("picture");
  console.log(farmerImage);

  let farmerData = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    gender: data.get("gender"),
    homeAddress: data.get("homeAddress"),
    phone: data.get("phone"),
    dateOfBirth: data.get("dateOfBirth"),
    communityId: data.get("communityId"),
    farmerType: data.get("farmerType"),
    cropType: data.get("cropType"),
    groupId: Number(data.get("groupId")),
  };

  try {
    const response = await axiosbaseURL.post("/farmer", farmerData);
    if (response.status === 201) {
      console.log("success", response);
      toast.success("Farmer data submitted successfully!");
      return redirect("/app/farmers");
    }
  } catch (error) {
    return error.response;
  }
};
