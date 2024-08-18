import React, { useState, useEffect } from "react";
import {
  Button,
  Select,
  Label,
  TextInput,
  FileInput,
  Datepicker,
} from "flowbite-react";
import { useParams, Form } from "react-router-dom";
import { farmsData, createSalesActivities } from "../../data/dummyData";

const Sales = () => {
  const [farmDetails, setFarmDetails] = useState({});

  const { farmId } = useParams();

  useEffect(() => {
    //coonect to farm api and get farm details
    const farm = getFarmOwner(farmId);
    // console.log(farm);
    setFarmDetails(farm);
  }, []);

  const getFarmOwner = (farmId) => {
    return farmsData.find((farm) => farm.id === farmId);
  };

  const showFarmOwner = () => {
    if (farmDetails.owner !== "") {
      return `${farmDetails.owner}'s farm`;
    } else {
      return "the farm";
    }
  };

  return (
    <div>
      <h2 className="mb-2 text-xl text-center">
        Record Sales Activities on {showFarmOwner()}
      </h2>
      <Form
        className="container mx-auto w-full md:w-[70%]"
        method="post"
        action="../../app/sales"
      >
        <section>
          <h4>Authorizer of relese of products for sale</h4>
          <div className="my-2">
            <Label htmlFor="release" className="font-semibold my-2">
              Release date
            </Label>
            <Datepicker
              id="release"
              name="releaseDate"
              defaultValue={new Date()}
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
              name="authorizer"
              defaultValue=""
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
              defaultValue=""
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
              name="quantity"
              defaultValue=""
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
            defaultValue=""
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
              defaultValue=""
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
              defaultValue=""
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
              defaultValue=""
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
              defaultValue=""
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
              defaultValue=""
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
              defaultValue=""
            />
          </div>
        </section>

        <div className="my-4">
          <Label
            htmlFor="transport"
            value="Means of Transport"
            className="my-2 font-semibold"
          />
          <Select id="transport" required name="transport" defaultValue="">
            <option>Select transport</option>
            <option value="Manual">Manual</option>
            <option value="Tractor">Tractor</option>
          </Select>
        </div>
        <div className="my-4">
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
            defaultValue=""
          />
        </div>
        <div className="my-4">
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
            defaultValue=""
          />
        </div>

        <div className="my-4">
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
            defaultValue=""
          />
        </div>

        <Button type="submit">Save Sales activities </Button>
      </Form>
    </div>
  );
};

export default Sales;

export const action = async ({ request }) => {
  const data = await request.formData();
  const salesActivitiesData = {
    releaseDate: data.get("releaseDate"),
    authorizer: data.get("authorizer"),
    authorizerContact: data.get("contact"),
    quantity: data.get("quantity"),
    receipt: data.get("receipt"),
    individualBuyerName: data.get("individualBuyerName"),
    individualBuyerQuantity: data.get("individualBuyerQuantity"),
    companyBuyerName: data.get("companyBuyerName"),
    companyBuyerContact: data.get("companyBuyerContact"),
    transport: data.get("transport"),
    vehicleName: data.get("vehicleName"),
    vehicleRegNumber: data.get("vehicleRegNumber"),
    driversLicense: data.get("driversLicense"),
  };
  //connect to the database to save data
  createSalesActivities(salesActivitiesData);
  return null;
};
