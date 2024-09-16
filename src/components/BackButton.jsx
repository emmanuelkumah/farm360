import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <button
      onClick={handleGoBack}
      className="px-4 py-2 bg-main text-white rounded hover:bg-secondary transition-colors"
    >
      Go Back
    </button>
  );
};

export default BackButton;
