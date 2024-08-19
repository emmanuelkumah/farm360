import React, { useState } from "react";
import {
  Button,
  Label,
  TextInput,
  FileInput,
  Datepicker,
} from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
// import { useActivitiesContext } from "../../context/FarmersProvider";
import { useParams, Form } from "react-router-dom";
import { createShipmentActivities } from "../../data/dummyData";

const Shipment = () => {
  // const { dispatchActivity } = useActivitiesContext();
  const { farmId } = useParams();

  return (
    <div>
      <h2 className="mb-2 text-xl text-center">Key Data Entry for Shipment</h2>
      <Form
        className="container mx-auto w-full md:w-[70%]"
        method="post"
        action="../../app/shipment"
      >
        <section>
          <div className="my-2">
            <Label htmlFor="exit" className="font-semibold my-2">
              Date of exit
            </Label>
            <Datepicker
              id="exit"
              placeholder="select shipment date"
              name="date"
              maxDate={new Date()}
              defaultValue={new Date()}
              required
            />
          </div>
          <div className="my-2">
            <Label htmlFor="country" className="font-semibold my-2">
              Destination Country
            </Label>
            <TextInput
              id="country"
              type="text"
              placeholder="Enter destination country"
              name="destination"
              defaultValue=""
              required
            />
          </div>
          <div className="my-2">
            <Label htmlFor="entry" className="font-semibold my-2">
              Port of entry
            </Label>
            <TextInput
              id="entry"
              type="text"
              placeholder="Port of entry"
              name="entry"
              defaultValue=""
              required
            />
          </div>
          <div className="my-2">
            <Label htmlFor="exit" className="font-semibold my-2">
              Port of exit
            </Label>
            <TextInput
              id="exit"
              type="text"
              placeholder="Port of exit"
              name="exit"
              defaultValue=""
              required
            />
          </div>
        </section>
        <section>
          <h4>Customer information</h4>

          <div className="my-2">
            <Label htmlFor="name" className="font-semibold my-2">
              Name
            </Label>
            <TextInput
              id="name"
              type="text"
              placeholder="Enter customer name"
              name="customername"
              defaultValue=""
              required
            />
          </div>
          <div className="my-2">
            <Label htmlFor="entry" className="font-semibold my-2">
              Contact
            </Label>
            <TextInput
              id="entry"
              type="number"
              placeholder="Enter contact"
              name="contact"
              defaultValue=""
              required
            />
          </div>
          <div className="my-2">
            <Label htmlFor="exit" className="font-semibold my-2">
              Address
            </Label>
            <TextInput
              id="exit"
              type="text"
              placeholder="Enter address"
              name="address"
              defaultValue=""
              required
            />
          </div>
        </section>
        <section>
          <h4>Certification</h4>
          <div className="my-2">
            <Label htmlFor="certificate" className="font-semibold my-2">
              Upload copy of certificate
            </Label>

            <FileInput
              id="certificate"
              name="certificate"
              defaultValue=""
              required
            />
          </div>
        </section>
        <section>
          <h4>Packaging</h4>
          <div className="my-2">
            <Label htmlFor="mode" className="font-semibold my-2">
              Mode of packaging
            </Label>
            <TextInput
              id="mode"
              placeholder="Enter mode of packaging"
              type="text"
              name="packingMethod"
              defaultValue=""
              required
            />
          </div>
          <div className="my-2">
            <Label htmlFor="mode" className="font-semibold my-2">
              Number of kilos per package
            </Label>
            <TextInput
              id="mode"
              placeholder="Enter number of kilos per package"
              type="text"
              name="kilosPerPackage"
              defaultValue=""
              required
            />
          </div>
        </section>

        <Button type="submit">Save</Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Shipment;

export const action = async ({ request }) => {
  const data = await request.formData();

  const shipmentActivities = {
    exitDate: data.get("date"),
    destination: data.get("destination"),
    entry: data.get("entry"),
    exit: data.get("exit"),
    customername: data.get("customername"),
    contact: data.get("contact"),
    address: data.get("address"),
    certificate: data.get("certificate"),
    packingMethod: data.get("packingMethod"),
    kilosPerPackage: data.get("kilosPerPackage"),
  };
  createShipmentActivities(shipmentActivities);
  return null;
};
