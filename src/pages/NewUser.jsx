import React from "react";
import { BackButton, UserRegistrationForm } from "../components";
import { redirect, json } from "react-router-dom";
import { toast } from "react-toastify";
import { axiosbaseURL } from "../api/axios";

const NewUser = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="my-10">
          <BackButton />
        </div>
        <UserRegistrationForm />
      </div>
    </>
  );
};

export default NewUser;

export const action = async ({ request }) => {
  const data = await request.formData();
  const formData = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    dob: data.get("dob"),
    phone: data.get("phone"),
    email: data.get("email"),
    password: data.get("password"),
    roles: ["ROLE_ADMIN"],
  };

  const response = await axiosbaseURL.post("/user", formData);

  if (
    response.status === 401 ||
    response.status === 404 ||
    response.status === 500 ||
    response.status === 400
  ) {
    throw json({ message: "Could not save data." });
  }
  toast.success("User created successfully!");
  return redirect("/app/users");
};
