import React from "react";
import { Button, Select, Label, TextInput, Datepicker } from "flowbite-react";

const WeedControl = () => {
  return (
    <div>
      <div>
        <h2 className="mb-2 text-xl">Weed Control Activities</h2>
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <Label htmlFor="weed" className="font-semibold my-2">
              Date of weed control
            </Label>
            <Datepicker id="weed" />
          </div>

          <div>
            <Label
              htmlFor="method"
              value="Method of weed control"
              className="my-2 font-semibold"
            />

            <Select id="method" required>
              <option>Select method of weed control</option>
              <option>Hand</option>
              <option>Chemical</option>
            </Select>
          </div>
          <div>
            <Label
              htmlFor="chemical"
              value="Name of chemical"
              className="my-2 font-semibold"
            />
            <TextInput
              type="text"
              required
              placeholder="Enter name of chemical"
              id="chemical"
            />
          </div>
          <div>
            <Label
              htmlFor="rate"
              value="Rate of chemical application"
              className="my-2 font-semibold"
            />
            <TextInput
              type="text"
              required
              placeholder="Enter rate of application"
              id="rate"
            />
          </div>
          <div>
            <Label
              htmlFor="supervisor"
              value="Supervisor"
              className="my-2 font-semibold"
            />
            <TextInput
              type="text"
              required
              placeholder="Enter name of supervisor"
              id="supervisor"
            />
          </div>
          <div>
            <Label
              htmlFor="contact"
              value="Contact of the supervisor"
              className="my-2 font-semibold"
            />
            <TextInput
              type="number"
              required
              placeholder="Enter name of supervisor"
              id="contact"
            />
          </div>
          <div>
            <Label
              htmlFor="cert"
              value="Certificate"
              className="my-2 font-semibold"
            />

            <Select id="cert" required>
              <option>Select certificate of supervisor</option>
              <option>MOFA</option>
              <option>EPA</option>
              <option>PPRSD/NPPO</option>
              <option>Others</option>
            </Select>
          </div>
          <div>
            <Label
              htmlFor="certificate"
              value="Other Certificate"
              className="my-2 font-semibold"
            />
            <TextInput
              type="text"
              required
              placeholder="Enter the certificate of supervisor if not listed above"
              id="certificate"
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default WeedControl;
