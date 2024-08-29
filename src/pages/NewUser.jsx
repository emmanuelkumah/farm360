import React from "react";
import { Form } from "../components";
import { redirect } from "react-router-dom";

const NewUser = () => {
  return (
    <div>
      <Form />
    </div>
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
