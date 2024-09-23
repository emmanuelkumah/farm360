import React from "react";
import { BackButton, UserRegistrationForm } from "../components";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

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
    number: data.get("number"),
    email: data.get("email"),
    password: data.get("password"),
    confirmPassword: data.get("confirmPassword"),
  };
  console.log("submitted", formData);
  toast.success("Account created successfully ");
  //connect to api and send request
  return redirect("/app/Users");
};
