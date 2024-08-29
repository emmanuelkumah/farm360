import React from "react";
import { Form } from "../components";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";

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
      <Form />
    </div>
  );
};

export default EditUser;
