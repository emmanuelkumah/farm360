import React from "react";
import { AddFarmerForm } from "../components";
import { redirect } from "react-router-dom";
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
  const enteredData = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
  };
  //use axios.post and send the data in the body
  console.log(enteredData);
  ///grab farmers data and append the entered data
  return redirect("../");
};
