import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { UserRegistrationForm } from "../components";

const EditUser = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="my-10">
        <Button onClick={handleGoBack}>Back </Button>
      </div>
      <UserRegistrationForm />
    </div>
  );
};

export default EditUser;
