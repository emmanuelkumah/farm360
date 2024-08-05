import React, { useState } from "react";
import {
  Button,
  Label,
  TextInput,
  FileInput,
  Datepicker,
} from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import { useActivitiesContext } from "../../context/FarmersProvider";
import { useParams } from "react-router-dom";

const Shipment = () => {
  const { dispatchActivity } = useActivitiesContext();
  const { farmId } = useParams();
  const [shipment, setShipment] = useState({
    shipmentDate: "",
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

  const handleShipmentDates = (date) => {
    setShipment({
      ...shipment,
      shipmentDate: date.toISOString().split("T")[0],
    });
  };
  const handleShipmentActivities = (e) => {
    const { name, value } = e.target;

    setShipment({
      ...shipment,
      [name]: value,
    });
  };
  const handleCertificateUpload = (e) => {
    const file = e.target.files[0];
    setShipment({
      ...shipment,
      certificate: file,
    });
  };

  const onShipmentSubmit = (e) => {
    e.preventDefault();
    dispatchActivity({
      type: "Add_ShipmentActivity",
      payload: { farmId, ...shipment },
    });
    setShipment({
      shipmentDate: "",
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
    toast.success("Shipment activities added successfully");
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
              onSelectedDateChanged={(date) => handleShipmentDates(date)}
              value={shipment.shipmentDate}
              placeholder="select shipment date"
              maxDate={new Date()}
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
              value={shipment.destination}
              onChange={handleShipmentActivities}
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
              value={shipment.entry}
              onChange={handleShipmentActivities}
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
              value={shipment.exit}
              onChange={handleShipmentActivities}
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
              name="name"
              value={shipment.name}
              onChange={handleShipmentActivities}
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
              value={shipment.contact}
              onChange={handleShipmentActivities}
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
              value={shipment.address}
              onChange={handleShipmentActivities}
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
              onChange={handleCertificateUpload}
              name="certificate"
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
              value={shipment.packingMethod}
              required
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
              required
            />
          </div>
        </section>

        <Button type="submit">Save</Button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Shipment;
