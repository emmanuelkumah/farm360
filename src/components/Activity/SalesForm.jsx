import React, { useState } from "react";
import {
  Button,
  Select,
  Label,
  TextInput,
  FileInput,
  Datepicker,
} from "flowbite-react";
import { Form, redirect } from "react-router-dom";
import BackButton from "../BackButton";
import ActivityHeading from "../ActivityHeading";
import { axiosbaseURL } from "../../api/axios";
import { toast } from "react-toastify";

const SalesForm = () => {
  const [activityDate, setActivityDate] = useState("");
  const [buyerType, setBuyerType] = useState("");

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString();
    setActivityDate(formattedDate);
  };

  const handleBuyTypeChange = (e) => {
    setBuyerType(e.target.value);
  };
  return (
    <div className="container mx-auto">
      <BackButton />
      <ActivityHeading activityHeading="Key Data Entry For Sales" />
      <Form className="container mx-auto w-full md:w-[70%]" method="post">
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
              value={activityDate}
              onSelectedDateChanged={(date) => handleDateChange(date)}
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
              name="authorizerName"
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
              name="authorizerContact"
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
              name="authorizerQuantity"
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
            name="saleEvidenceUrl"
            defaultValue=""
          />
        </div>
        <section>
          <div className="my-4">
            <Label
              htmlFor="method"
              value="Buyer Type"
              className="my-2 font-semibold"
            />

            <Select
              id="method"
              required
              name="buyerType"
              value={buyerType}
              onChange={handleBuyTypeChange}
            >
              <option>Select buyer type</option>
              <option value="INDIVIDUAL">Individual</option>
              <option value="Company">Company</option>
            </Select>
          </div>
          <h4> Buyer Details</h4>
          <div className="my-2">
            <Label htmlFor="name" value="Name" className="my-2 font-semibold" />
            <TextInput
              id="name"
              type="text"
              placeholder="Enter name"
              name="buyerName"
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
              name="buyerQuantity"
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
              name="buyerContact"
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
          <Select id="transport" required name="transportMeans" defaultValue="">
            <option>Select transport</option>
            <option value="MANUAL">Manual</option>
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
            name="vehicleRegistrationNo"
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
            name="driversLicenseNo"
            defaultValue=""
          />
        </div>

        <Button type="submit">Save Sales activities </Button>
      </Form>
    </div>
  );
};

export default SalesForm;

export const action = async ({ request, params }) => {
  const data = await request.formData();

  const formData = {
    farmId: Number(params.farmId),
    releaseDate: data.get("releaseDate"),
    authorizerName: data.get("authorizerName"),
    authorizerContact: data.get("authorizerContact"),
    authorizerQuantity: Number(data.get("authorizerQuantity")),
    saleEvidenceUrl: data.get("saleEvidenceUrl"),
    buyerName: data.get("buyerName"),
    buyerQuantity: Number(data.get("buyerQuantity")),
    buyerContact: data.get("buyerContact"),
    buyerType: data.get("buyerType"),
    transportMeans: data.get("transportMeans"),
    vehicleName: data.get("vehicleName"),
    vehicleRegistrationNo: data.get("vehicleRegistrationNo"),
    driversLicenseNo: data.get("driversLicenseNo"),
  };

  const response = await axiosbaseURL.post(
    "/farm/activity/crop-sales",
    formData
  );

  if (
    response.status === 401 ||
    response.status === 404 ||
    response.status === 500 ||
    response.status === 400
  ) {
    throw json({ message: "Could not save data." });
  }
  toast.success("Sales  data submitted successfully!");
  return redirect("/app/farms");
};
