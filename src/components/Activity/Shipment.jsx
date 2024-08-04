import React, { useState } from "react";
import {
  Button,
  Label,
  TextInput,
  FileInput,
  Datepicker,
} from "flowbite-react";

const Shipment = () => {
  const [shipment, setShipment] = useState({
    date: "",
    destination: "",
    entry: "",
    exit: "",
    name: "",
    contact: "",
    address: "",
    certificate: "",
    packingMethod: "",
    kilosPerPackage: "",
  });

  const handleShipmentDates = () => {
    setShipment({
      ...shipment,
      date: date.toISOString().split("T")[0],
    });
  };
  const handleShipmentActivities = (e) => {
    const { name, value } = e.target;

    setShipment({
      ...shipment,
      [name]: value,
    });
  };
  const handleReceiptUpload = (e) => {
    const file = e.target.files[0];
    setShipment({
      ...shipment,
      receipt: file,
    });
  };

  const onShipmentSubmit = (e) => {
    e.preventDefault();
    console.log(shipment);
  };
  return (
    <div>
      <h2 className="mb-2 text-xl">Details Of authorizer</h2>
      <form
        className="flex max-w-md flex-col gap-4"
        onSubmit={onShipmentSubmit}
      >
        <section>
          <div className="my-2">
            <Label htmlFor="exit" className="font-semibold my-2">
              Date of exit
            </Label>
            <Datepicker
              id="exit"
              onSelectedDateChanged={handleShipmentDates}
              value={shipment.date}
              placeholder="select shipment date"
              maxDate={new Date()}
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
              value={shipment.destination}
              onChange={handleShipmentActivities}
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
              value={shipment.entry}
              onChange={handleShipmentActivities}
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
              name="entry"
              value={shipment.entry}
              onChange={handleShipmentActivities}
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
              name="name"
              value={shipment.name}
              onChange={handleShipmentActivities}
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
              value={shipment.contact}
              onChange={handleShipmentActivities}
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
              value={shipment.address}
              onChange={handleShipmentActivities}
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
              onChange={handleReceiptUpload}
              name="certificate"
              value={shipment.certificate}
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
              name="certificate"
              value={shipment.certificate}
              onChange={handleShipmentActivities}
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
              value={shipment.kilosPerPackage}
              onChange={handleShipmentActivities}
            />
          </div>
        </section>

        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default Shipment;
