import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ message, type }) => {
  const showToast = () => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "warning":
        toast.warning(message);
        break;
      default:
        toast(message);
    }
  };
  return showToast;
};

export default CustomToast;
