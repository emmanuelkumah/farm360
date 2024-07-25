import React from "react";
import {
  Button,
  Select,
  Label,
  TextInput,
  FileInput,
  Datepicker,
} from "flowbite-react";

const Sales = () => {
  return (
    <div>
      <h2 className="mb-2 text-xl">Sales</h2>
      <form className="flex max-w-md flex-col gap-4">
        <section>
          <h4>Authorizer of relese of products for sale</h4>
          <div className="my-2">
            <Label htmlFor="release" className="font-semibold my-2">
              Release date
            </Label>
            <Datepicker id="release" />
          </div>
          <div className="my-2">
            <Label htmlFor="name" className="font-semibold my-2">
              Name of Authorizer
            </Label>
            <TextInput
              id="name"
              placeholder="Enter name of authorizer"
              type="text"
              required
            />
          </div>
          <div className="my-2">
            <Label htmlFor="contact" className="font-semibold my-2">
              Contact
            </Label>
            <TextInput
              id="contact"
              placeholder="Enter phone number"
              type="number"
            />
          </div>
          <div className="my-2">
            <Label htmlFor="contact" className="font-semibold my-2">
              Quantity
            </Label>
            <TextInput
              id="contact"
              placeholder="Enter quantity"
              type="number"
            />
          </div>
        </section>

        <div>
          <Label htmlFor="sale" className="font-semibold my-2">
            Evidence of sale
          </Label>
          <FileInput id="sale" />
        </div>
        <section>
          <h4>Indivial Buyer Details</h4>
          <div className="my-2">
            <Label htmlFor="name" value="Name" className="my-2 font-semibold" />
            <TextInput id="name" type="text" placeholder="Enter name" />
          </div>
          <div className="my-2">
            <Label
              htmlFor="quantity"
              value="Quantity"
              className="my-2 font-semibold"
            />
            <TextInput
              id="quantity"
              type="number"
              placeholder="Enter quantity"
            />
          </div>
          <div className="my-2">
            <Label
              htmlFor="contact"
              value="Contact"
              className="my-2 font-semibold"
            />
            <TextInput
              id="contact"
              type="number"
              placeholder="Enter phone number"
            />
          </div>
        </section>

        <section>
          <h4>Company Buyer Details</h4>
          <div className="my-2">
            <Label htmlFor="name" value="Name" className="my-2 font-semibold" />
            <TextInput id="name" type="text" placeholder="Enter company name" />
          </div>
          <div className="my-2">
            <Label
              htmlFor="quantity"
              value="Quantity"
              className="my-2 font-semibold"
            />
            <TextInput
              id="quantity"
              type="number"
              placeholder="Enter quantity"
            />
          </div>
          <div className="my-2">
            <Label
              htmlFor="contact"
              value="Contact"
              className="my-2 font-semibold"
            />
            <TextInput
              id="contact"
              type="number"
              placeholder="Enter phone number"
            />
          </div>
        </section>

        <div>
          <Label
            htmlFor="transport"
            value="Means of Transport"
            className="my-2 font-semibold"
          />
          <Select id="transport" required>
            <option>Select transport</option>
            <option>Manual</option>
            <option>Tractor</option>
          </Select>
        </div>
        <div>
          <Label
            htmlFor="vehicle"
            value="Vehicle name"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            placeholder="Enter vehicle name"
            id="vehicle"
          />
        </div>
        <div>
          <Label
            htmlFor="registration"
            value="Registration number"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            placeholder="Enter registration number"
            id="registration"
          />
        </div>

        <div>
          <Label
            htmlFor="license"
            value="Driver's License number"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            required
            placeholder="Enter driver's license number"
            id="license"
          />
        </div>

        <Button type="submit">Save </Button>
      </form>
    </div>
  );
};

export default Sales;
