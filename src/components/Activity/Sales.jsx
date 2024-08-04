import React, { useState } from "react";
import {
  Button,
  Select,
  Label,
  TextInput,
  FileInput,
  Datepicker,
} from "flowbite-react";

const Sales = () => {
  const [sales, setSales] = useState({
    date: "",
    authorizer: "",
    contact: "",
    quantity: "",
    receipt: "",
    individualBuyerName: "",
    individualBuyerQuantity: "",
    individualBuyerContact: "",
    companyBuyerName: "",
    companyBuyerQuantity: "",
    companyBuyerContact: "",
    transport: "",
    vehicleName: "",
    vehicleRegNumber: "",
    driversLicense: "",
  });

  const handleSalesDate = (date) => {
    setSales({
      ...sales,
      date: date.toISOString().split("T")[0],
    });
  };
  const handleSalesActivities = (e) => {
    const { name, value } = e.target;
    setSales({
      ...sales,
      [name]: value,
    });
  };
  const handleReceiptUpload = (e) => {
    const file = e.target.files[0];
    setSales({
      ...sales,
      receipt: file,
    });
  };
  const onSalesActivitiesSubmit = (e) => {
    e.preventDefault();
    console.log(sales);
    setSales({
      date: "",
      authorizer: "",
      contact: "",
      quantity: "",
      receipt: "",
      individualBuyerName: "",
      individualBuyerQuantity: "",
      individualBuyerContact: "",
      companyBuyerName: "",
      companyBuyerQuantity: "",
      companyBuyerContact: "",
      transport: "",
      vehicleName: "",
      vehicleRegNumber: "",
      driversLicense: "",
    });
  };
  return (
    <div>
      <h2 className="mb-2 text-xl">Sales</h2>
      <form
        className="flex max-w-md flex-col gap-4"
        onSubmit={onSalesActivitiesSubmit}
      >
        <section>
          <h4>Authorizer of relese of products for sale</h4>
          <div className="my-2">
            <Label htmlFor="release" className="font-semibold my-2">
              Release date
            </Label>
            <Datepicker
              id="release"
              onSelectedDateChanged={handleSalesDate}
              value={sales.date}
              maxDate={new Date()}
              placeholder="Select the release date"
            />
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
              value={sales.authorizer}
              name="authorizer"
              onChange={handleSalesActivities}
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
              name="contact"
              value={sales.contact}
              onChange={handleSalesActivities}
            />
          </div>
          <div className="my-2">
            <Label htmlFor="quantity" className="font-semibold my-2">
              Quantity
            </Label>
            <TextInput
              id="quantity"
              placeholder="Enter quantity"
              type="number"
              value={sales.quantity}
              name="quantity"
              onChange={handleSalesActivities}
            />
          </div>
        </section>

        <div>
          <Label htmlFor="sale" className="font-semibold my-2">
            Evidence of sale
          </Label>
          <FileInput
            id="sale"
            accept="image/*"
            name="receipt"
            onChange={handleReceiptUpload}
          />
        </div>
        <section>
          <h4>Indivial Buyer Details</h4>
          <div className="my-2">
            <Label htmlFor="name" value="Name" className="my-2 font-semibold" />
            <TextInput
              id="name"
              type="text"
              placeholder="Enter name"
              name="individualBuyerName"
              value={sales.individualBuyerName}
              onChange={handleSalesActivities}
            />
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
              name="individualBuyerQuantity"
              value={sales.individualBuyerQuantity}
              onChange={handleSalesActivities}
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
              name="individualBuyerContact"
              value={sales.individualBuyerContact}
              onChange={handleSalesActivities}
            />
          </div>
        </section>

        <section>
          <h4>Company Buyer Details</h4>
          <div className="my-2">
            <Label htmlFor="name" value="Name" className="my-2 font-semibold" />
            <TextInput
              id="name"
              type="text"
              placeholder="Enter company name"
              name="companyBuyerName"
              value={sales.companyBuyerName}
              onChange={handleSalesActivities}
            />
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
              name="companyBuyerQuantity"
              value={sales.companyBuyerQuantity}
              onChange={handleSalesActivities}
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
              name="companyBuyerContact"
              value={sales.companyBuyerContact}
              onChange={handleSalesActivities}
            />
          </div>
        </section>

        <div>
          <Label
            htmlFor="transport"
            value="Means of Transport"
            className="my-2 font-semibold"
          />
          <Select
            id="transport"
            required
            name="transport"
            value={sales.transport}
            onChange={handleSalesActivities}
          >
            <option>Select transport</option>
            <option value="Manual">Manual</option>
            <option value="Tractor">Tractor</option>
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
            name="vehicleName"
            value={sales.vehicleName}
            onChange={handleSalesActivities}
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
            name="vehicleRegNumber"
            value={sales.vehicleRegNumber}
            onChange={handleSalesActivities}
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
            name="driversLicense"
            value={sales.driversLicense}
            onChange={handleSalesActivities}
          />
        </div>

        <Button type="submit">Save Sales activities </Button>
      </form>
    </div>
  );
};

export default Sales;
