import React from "react";
import { Button, Select, Label, TextInput, Datepicker } from "flowbite-react";

const Harvesting = () => {
  return (
    <div>
      <h2 className="mb-2 text-xl">Harvesting</h2>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <Label htmlFor="date" className="font-semibold my-2">
            Date of harvest
          </Label>
          <Datepicker id="date" />
        </div>
        <div>
          <Label htmlFor="acres" className="font-semibold my-2">
            Acres Harvested
          </Label>
          <TextInput
            id="acres"
            type="text"
            required
            placeholder="Enter acres harvested"
          />
        </div>
        <div>
          <Label htmlFor="bags" className="font-semibold my-2">
            Bags Harvested
          </Label>
          <TextInput
            id="bags"
            type="number"
            required
            placeholder="Enter number of bags harvested"
          />
        </div>
        <div>
          <Label htmlFor="weight" className="font-semibold my-2">
            Weight per bag harvested
          </Label>
          <TextInput
            id="weight"
            type="number"
            required
            placeholder="Enter weight per bag harvested"
          />
        </div>

        <div>
          <Label
            htmlFor="modeofHarvesting"
            value="Mode of harvesting"
            className="my-2 font-semibold"
          />

          <Select id="modeofHarvesting" required>
            <option>Select the mode of harvesting</option>
            <option>Manual</option>
            <option>Machinery</option>
          </Select>
        </div>
        <div>
          <Label
            htmlFor="machine"
            value="Name of machine"
            className="my-2 font-semibold"
          />
          <Select id="machine" required>
            <option>Select machine used</option>
            <option>Sheller</option>
            <option>Threshing</option>
          </Select>
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

export default Harvesting;
