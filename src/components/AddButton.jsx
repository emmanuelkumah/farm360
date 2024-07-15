import React, { useState } from "react";
import { Button } from "flowbite-react";
import { useStateContext } from "../context/ContextProvider";

const AddButton = ({ text }) => {
  const { openModal, setOpenModal } = useStateContext();
  return (
    <>
      <Button onClick={() => setOpenModal(true)}>{text}</Button>
    </>
  );
};

export default AddButton;
