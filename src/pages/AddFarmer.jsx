import React from "react";
import { FarmerForm } from "../components";
// import axios from "axios";
const AddFarmer = () => {
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
  // await axios.get("");
};
