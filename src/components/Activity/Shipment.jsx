import React from "react";
import {
  Button,
  Label,
  TextInput,
  FileInput,
  Datepicker,
} from "flowbite-react";

const Shipment = () => {
  return (
    <div>
      <h2 className="mb-2 text-xl">Details Of authorizer</h2>
      <form className="flex max-w-md flex-col gap-4">
        <section>
          <div className="my-2">
            <Label htmlFor="exit" className="font-semibold my-2">
              Date of exit
            </Label>
            <Datepicker id="exit" />
          </div>
          <div className="my-2">
            <Label htmlFor="country" className="font-semibold my-2">
              Destination Country
            </Label>
            <TextInput
              id="country"
              type="text"
              placeholder="Enter destination country"
            />
          </div>
          <div className="my-2">
            <Label htmlFor="entry" className="font-semibold my-2">
              Port of entry
            </Label>
            <TextInput id="entry" type="text" placeholder="Port of entry" />
          </div>
          <div className="my-2">
            <Label htmlFor="exit" className="font-semibold my-2">
              Port of exit
            </Label>
            <TextInput id="exit" type="text" placeholder="Port of exit" />
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
            />
          </div>
          <div className="my-2">
            <Label htmlFor="entry" className="font-semibold my-2">
              Contact
            </Label>
            <TextInput id="entry" type="number" placeholder="Enter contact" />
          </div>
          <div className="my-2">
            <Label htmlFor="exit" className="font-semibold my-2">
              Address
            </Label>
            <TextInput id="exit" type="text" placeholder="Enter address" />
          </div>
        </section>
        <section>
          <h4>Certification</h4>
          <div className="my-2">
            <Label htmlFor="certificate" className="font-semibold my-2">
              Upload copy of certificate
            </Label>
            <FileInput id="certificate" />
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
            />
          </div>
        </section>

        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default Shipment;
