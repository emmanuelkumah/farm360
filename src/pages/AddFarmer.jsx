import React from "react";
import { FarmerForm } from "../components";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
const AddFarmer = () => {
  const data = useLoaderData();
  console.log(data);
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
  const response = await axios.get("http://18.134.98.183:8080//geo/regions");
  console.log(response);

  // await axios.get("");
};
