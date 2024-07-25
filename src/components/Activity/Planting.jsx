import React from "react";
import { Button, Select, Label, TextInput, Datepicker } from "flowbite-react";

const Planting = () => {
  return (
    <div>
      <h2 className="mb-2 text-xl">Planting Activities</h2>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <Label htmlFor="planting" className="font-semibold my-2">
            Date of planting
          </Label>
          <Datepicker id="planting" />
        </div>

        <div>
          <Label
            htmlFor="crop"
            value="Name of crop"
            className="my-2 font-semibold"
          />

          <Select id="crop" required>
            <option>Select name of crop</option>
            <option>Soya</option>
            <option>Cowpea</option>
            <option>Groundnut</option>
          </Select>
        </div>
        <div>
          <Label
            htmlFor="kilo"
            value="Kilo planted"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            required
            placeholder="Kilo of seeds planted"
            id="kilo"
          />
        </div>
        <div>
          <Label
            htmlFor="size"
            value="Land size covered on that date"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            required
            placeholder="Enter land size covered"
            id="size"
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
  );
};

export default Planting;
