import React from "react";
import { Accordion } from "flowbite-react";

const TrackingFAQ = () => {
  return (
    <>
      <Accordion className="mt-10">
        <Accordion.Panel>
          <Accordion.Title className="text-[#357960] font-extrabold">
            What is the batch number?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2">
              The batch number will be a 7 digit number with 2 hyphens. eg.
              AL-24-098
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-[#357960] font-extrabold">
            How do I trace a batch number?
          </Accordion.Title>
          <Accordion.Content>
            <p>Enter the batch number of the product you want to trace</p>
            <p>
              Click "Track" button to view the trace history of the product.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title className="text-[#357960] font-extrabold">
            Where can I find the batch number?
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2">
              The batch number will be on the product packaging.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </>
  );
};

export default TrackingFAQ;
