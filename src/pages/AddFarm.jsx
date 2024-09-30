import React from "react";
import { FarmForm } from "../components";
import { axiosbaseURL } from "../api/axios";
import { redirect, useActionData } from "react-router-dom";
import { toast } from "react-toastify";

const AddFarm = () => {
  const data = useActionData();
  return (
    <div>
      <FarmForm method="post" response={data} />
    </div>
  );
};

export default AddFarm;

export const action = async ({ request }) => {
  const data = await request.formData();
  const formData = {
    name: data.get("name"),
    communityId: data.get("communityId"),
    cropType: data.get("cropType"),
    gpsAddress: data.get("gpsAddress"),
    landSize: Number(data.get("landSize")),
    farmerId: Number(data.get("farmerId")),
  };

  try {
    const response = await axiosbaseURL.post("/farm", formData);
    if (response.status === 201) {
      console.log("success", response);
      toast.success("Farm data submitted successfully!");
      return redirect("/app/farms");
    }
  } catch (error) {
    return error.response;
  }
};
