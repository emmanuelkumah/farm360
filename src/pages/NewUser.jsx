import React from "react";
import { Form, UserRegistrationForm } from "../components";
import { redirect, useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";

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
        {/* <Form /> */}
      </div>
    </>
  );
};

export default NewUser;

export const action = async ({ request }) => {
  const data = await request.formData();
  const enteredUserData = {
    fullName: data.get("fullName"),
    email: data.get("email"),
    password: data.get("password"),
    confirmPassword: data.get("confirmPassword"),
  };
  console.log(enteredUserData);
  //connect to api and send request
  return redirect("/app/Users");
};
