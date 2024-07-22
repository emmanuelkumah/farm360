import React, { useState } from "react";
import { Button, Modal, TextInput } from "flowbite-react";
import { useTraceabilityContext } from "../context/TraaceabilityProvider";

const Traceability = ({ openModal, setOpenModal }) => {
  const [flowName, setFlowName] = useState("");
  const { dispatch } = useTraceabilityContext();

  const handleAddFlow = (event) => {
    setFlowName(event.target.value);
  };

  const handleTraceabilitySubmit = (e) => {
    e.preventDefault();
    console.log(flowName);
    dispatch({
      type: "Add_flow",
      payload: { id: Math.floor(Math.random() * 1000), flow: flowName },
    });
    setFlowName("");
    setOpenModal(false);
  };
  return (
    <div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Create Traceability Flow</Modal.Header>
        <Modal.Body>
          <div>
            <form onSubmit={handleTraceabilitySubmit}>
              <TextInput
                placeholder="Enter flow name"
                value={flowName}
                onChange={handleAddFlow}
              />
              <Button className="mt-5" type="submit">
                Add Flow
              </Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Traceability;
