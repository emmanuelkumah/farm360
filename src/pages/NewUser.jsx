import React from "react";
import { UserRegistrationForm } from "../components";
import { redirect, useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { toast } from "react-toastify";

const NewUser = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="my-10">
          <Button onClick={handleGoBack}>Back </Button>
        </div>
        <UserRegistrationForm />
      </div>
    </>
  );
};

export default NewUser;

export const action = async ({ request }) => {
  const data = await request.formData();
  const enteredUserData = {
    email: data.get("email"),
    password: data.get("password"),
    confirmPassword: data.get("confirmPassword"),
  };
  console.log("submitted", enteredUserData);
  toast.success("Account created successfully ");
  //connect to api and send request
  return redirect("/app/Users");
};
