import React, { useEffect, useState } from "react";
import {
  Button,
  Select,
  Label,
  TextInput,
  FileInput,
  Datepicker,
  Alert,
} from "flowbite-react";
import { Form, redirect, useActionData } from "react-router-dom";
import BackButton from "../BackButton";
import ActivityHeading from "../ActivityHeading";
import { axiosbaseURL } from "../../api/axios";
import { toast } from "react-toastify";
import { HiInformationCircle } from "react-icons/hi";

const SalesForm = ({ method, data }) => {
  const [activityDate, setActivityDate] = useState("");
  const [buyerType, setBuyerType] = useState("");
  const [showTransportDetails, setShowTransportDetails] = useState(false);
  const [transportMeans, setTransportMeans] = useState("");

  const errors = useActionData();
  const errorMessage = errors?.data;

  useEffect(() => {
    if (data) {
      setActivityDate(data.releaseDate);
      setBuyerType(data.buyerType);
      displayTransportMeans(data.transportMeans);
    }
  }, []);

  const displayTransportMeans = (means) => {
    if (means === "TRACTOR") {
      setShowTransportDetails(true);
      setTransportMeans(means);
    }
    setTransportMeans(means);
  };

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString();
    setActivityDate(formattedDate);
  };

  const handleBuyTypeChange = (e) => {
    setBuyerType(e.target.value);
  };
  const handleTransportMeansChange = (e) => {
    const value = e.target.value;
    console.log(value);
    if (value === "TRACTOR") {
      setShowTransportDetails(true);
      setTransportMeans(value);
    } else {
      setTransportMeans(value);
      setShowTransportDetails(false);
    }
  };
  return (
    <div className="container mx-auto">
      <BackButton />
      <ActivityHeading activityHeading="Key Data Entry For Sales" />
      {errors ? (
        <Alert color="failure" icon={HiInformationCircle} className="max-w-2xl">
          <span className="font-medium">Info alert!</span>
          <p>{`${errorMessage.code} - ${errorMessage.message}`}</p>
        </Alert>
      ) : null}
      <Form className="container mx-auto w-full md:w-[70%]" method={method}>
        <section>
          <h4 className="text-xl">Authorizer of relese of products for sale</h4>
          <div className="my-2">
            <Label htmlFor="release" className="font-semibold my-2">
              Release date
            </Label>
            <Datepicker
              id="release"
              name="releaseDate"
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
              defaultValue={data ? data.authorizerName : ""}
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
              defaultValue={data ? data.authorizerContact : ""}
            />
          </div>
          <div className="my-2">
            <Label htmlFor="quantity" className="font-semibold my-2">
              Quantity sold
            </Label>
            <TextInput
              id="quantity"
              placeholder="Enter quantity"
              type="number"
              name="authorizerQuantity"
              defaultValue={data ? data.authorizerQuantity : ""}
            />
          </div>
        </section>

        <div>
          <Label htmlFor="sale" className="font-semibold my-2">
            Evidence of sale
          </Label>
          <TextInput
            id="sale"
            type="url"
            placeholder="Enter the url of the sales document"
            name="saleEvidenceUrl"
            defaultValue={data ? data.saleEvidenceUrl : ""}
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
              <option value="COMPANY">Company</option>
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
              defaultValue={data ? data.buyerName : ""}
            />
          </div>
          <div className="my-2">
            <Label
              htmlFor="quantity"
              value="Quantity purchased"
              className="my-2 font-semibold"
            />
            <TextInput
              id="quantity"
              type="number"
              placeholder="Enter quantity"
              name="buyerQuantity"
              defaultValue={data ? data.buyerQuantity : ""}
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
              defaultValue={data ? data.buyerContact : ""}
            />
          </div>
        </section>

        <div className="my-4">
          <Label
            htmlFor="transport"
            value="Means of Transport"
            className="my-2 font-semibold"
          />
          <Select
            id="transport"
            required
            name="transportMeans"
            value={transportMeans}
            onChange={handleTransportMeansChange}
          >
            <option value="MANUAL">Manual</option>
            <option value="TRACTOR">Tractor</option>
          </Select>
        </div>
        {showTransportDetails && (
          <section>
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
                defaultValue={data ? data.vehicleRegistrationNo : ""}
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
                defaultValue={data ? data.driversLicenseNo : ""}
              />
            </div>
          </section>
        )}

        <Button type="submit">Save Sales activities </Button>
      </Form>
    </div>
  );
};

export default SalesForm;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const method = request.method;
  const activityId = params.activityId;

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
    vehicleRegistrationNo: data.get("vehicleRegistrationNo"),
    driversLicenseNo: data.get("driversLicenseNo"),
  };

  if (method === "PUT") {
    try {
      const response = await axiosbaseURL.put(
        `/farm/activity/crop-sales/${activityId}`,
        formData
      );
      toast.success("Sales activity updated successfully!");
      return redirect("/app/farms");
    } catch (error) {
      console.log(error.response);
    }
  }

  try {
    const response = await axiosbaseURL.post(
      "/farm/activity/crop-sales",
      formData
    );
    console.log(response);
    toast.success("Sales activity  submitted successfully!");
    return redirect("/app/farms");
  } catch (error) {
    return error.response;
  }
};
