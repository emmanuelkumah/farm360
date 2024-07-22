import { Button, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Traceability } from "../components";

import { useTraceabilityContext } from "../context/TraaceabilityProvider";

const TraceabilityFlow = () => {
  const [openModal, setOpenModal] = useState(false);
  const { state } = useTraceabilityContext();
  console.log(state);
  return (
    <>
      <section className="m-10">
        <h3>Traceability Flow</h3>
        <div className="flex flex-col md:flex-row gap-5">
          <div>
            {" "}
            <TextInput />
          </div>
          <div>
            <Button className="" onClick={() => setOpenModal(true)}>
              Create Flow
            </Button>
          </div>
        </div>
        <Traceability openModal={openModal} setOpenModal={setOpenModal} />
      </section>
    </>
  );
};

export default TraceabilityFlow;
