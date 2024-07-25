import React from "react";
import { Button, Select, Label, TextInput, Datepicker } from "flowbite-react";

const FertilizerApplication = () => {
  return (
    <div>
      <h2 className="mb-2 text-xl">Fertilizer Application</h2>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <Label htmlFor="date" className="font-semibold my-2">
            Date of application
          </Label>
          <Datepicker id="date" />
        </div>

        <div>
          <Label
            htmlFor="method"
            value="Type of application"
            className="my-2 font-semibold"
          />

          <Select id="method" required>
            <option>Select the type of application</option>
            <option>Liquid</option>
            <option>Organic</option>
            <option>Inorganic</option>
          </Select>
        </div>
        <div>
          <Label
            htmlFor="chemical"
            value="Name of fertilizer"
            className="my-2 font-semibold"
          />
          <Select id="method" required>
            <option>Select fertilizer</option>
            <option>Manure</option>
            <option>Compost</option>
            <option>NPK</option>
            <option>Urea</option>
            <option>SOA</option>
            <option>Others</option>
          </Select>
        </div>
        <div>
          <Label
            htmlFor="others"
            value="Others(Specify)"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            placeholder="Enter name of fertilizer"
            id="others"
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
            htmlFor="rate-apply2"
            value="Rate of application(bag per acre)"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            placeholder="Enter the rate of application"
            id="rate-apply2"
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

export default FertilizerApplication;
