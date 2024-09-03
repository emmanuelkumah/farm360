import React from "react";
import { FarmerForm } from "../components";
import { useLoaderData } from "react-router-dom";

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
