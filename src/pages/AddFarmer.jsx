import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { AddFarmerForm } from "../components";

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
