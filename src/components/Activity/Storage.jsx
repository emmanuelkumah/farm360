import React from "react";
import {
  Button,
  Select,
  Label,
  TextInput,
  FileInput,
  Datepicker,
} from "flowbite-react";

const Storage = () => {
  return (
    <div>
      <h2 className="mb-2 text-xl">Storage</h2>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <Label htmlFor="storage" className="font-semibold my-2">
            Date of storage
          </Label>
          <Datepicker id="storage" />
        </div>
        <div>
          <Label htmlFor="quantity" className="font-semibold my-2">
            Quantity
          </Label>
          <TextInput id="quantity" type="text" placeholder="Quantity" />
        </div>

        <div>
          <Label
            htmlFor="type-storage"
            value="Type of storage"
            className="my-2 font-semibold"
          />

          <Select id="method" required>
            <option>Select the type of storage</option>
            <option>Own storage</option>
            <option>Commercial Storage</option>
            <option>BJL storage</option>
            <option>Others</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="other-storage" className="font-semibold my-2">
            Others(specify)
          </Label>
          <TextInput
            id="other-storage"
            type="text"
            placeholder="Specify the other storage"
          />
        </div>
        <div>
          <Label
            htmlFor="community"
            value="Community"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            placeholder="Enter the name of community"
            id="community"
          />
        </div>
        <div>
          <Label
            htmlFor="district"
            value="District"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            placeholder="Enter the district"
            id="district"
          />
        </div>
        <div>
          <Label
            htmlFor="quality"
            value="Quality"
            className="my-2 font-semibold"
          />
          <Select id="quality" required>
            <option>Select quality</option>
            <option>Good</option>
            <option>Fairly good</option>
            <option>Bad</option>
            <option>Wet</option>
            <option>Dry</option>
          </Select>
        </div>
        <div>
          <Label
            htmlFor="chemical"
            value="Chemical name"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            placeholder="Enter chemical name"
            id="chemical"
          />
        </div>
        <div>
          <Label
            htmlFor="rate-apply"
            value="Rate of application(ml per acre)"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            placeholder="Enter the rate of application"
            id="rate-apply"
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
        <div>
          <Label
            htmlFor="scanned"
            value="Upload scanned receipt"
            className="my-2 font-semibold"
          />
          <FileInput id="file" />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Storage;
