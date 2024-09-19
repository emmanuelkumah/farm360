import React, { useState } from "react";
import { Button, Select, Label, TextInput, Datepicker } from "flowbite-react";
import { Form, redirect, json } from "react-router-dom";
import { toast } from "react-toastify";
import ActivityHeading from "../ActivityHeading";
import BackButton from "../BackButton";
import { axiosbaseURL } from "../../api/axios";

const FertilizerForm = () => {
  const [hasFertMethod, setHasFertMethod] = useState(false);
  const [activityDate, setActivityDate] = useState("");

  const [hasCert, setHasCert] = useState(false);
  const defaultValue = new Date();

  const handleFertMethod = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Others") {
      setHasFertMethod(!hasFertMethod);
    } else {
      setHasFertMethod(false);
    }
  };

  const handleSelectCert = (e) => {
    if (e.target.value === "Others") {
      setHasCert(!hasCert);
    } else {
      setHasCert(false);
    }
  };

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString(); // Formats to "YYYY-MM-DD"
    setActivityDate(formattedDate);
  };

  return (
    <div className="container mx-auto">
      <BackButton />
      <ActivityHeading activityHeading="Key Data Entry" />
      <Form className="container mx-auto w-full md:w-[70%]" method="post">
        <div className="my-4">
          <Label htmlFor="date" className="font-semibold my-2">
            Date of application
          </Label>
          <Datepicker
            id="date"
            placeholder="Select date of fertilizer application"
            name="activityDate"
            maxDate={defaultValue}
            value={activityDate}
            onSelectedDateChanged={(date) => handleDateChange(date)}
          />
        </div>

        <div className="my-4">
          <Label
            htmlFor="method"
            value="Type of application"
            className="my-2 font-semibold"
          />

          <Select id="method" required name="applicationType" defaultValue="">
            <option>Select the type of application</option>
            <option value="liquid">Liquid</option>
            <option value="organic">Organic</option>
            <option value="inorganic">Inorganic</option>
          </Select>
        </div>
        <div className="my-4">
          <Label
            htmlFor="chemical"
            value="Name of fertilizer"
            className="my-2 font-semibold"
          />
          <Select
            id="method"
            required
            name="fertilizerName"
            defaultValue=""
            onChange={handleFertMethod}
          >
            <option>Select fertilizer</option>
            <option value="Manure">Manure</option>
            <option value="Compost">Compost</option>
            <option value="NPK">NPK</option>
            <option value="Urea">Urea</option>
            <option value="SOA">SOA</option>
            <option value="Others">Others</option>
          </Select>
        </div>
        {hasFertMethod && (
          <div className="my-4">
            <Label
              htmlFor="others"
              value="Others(Specify)"
              className="my-2 font-semibold"
            />
            <TextInput
              type="text"
              placeholder="Enter name of fertilizer"
              id="others"
              name="otherFert"
              defaultValue=""
            />
          </div>
        )}

        <div className="my-4">
          <Label
            htmlFor="rate-apply"
            value="Rate of application(ml per acre)"
            className="my-2 font-semibold"
          />
          <TextInput
            type="number"
            placeholder="Enter the rate of application"
            id="rate-apply"
            name="applicationRateMlPerAcre"
            defaultValue=""
          />
        </div>
        <div className="my-4">
          <Label
            htmlFor="rate-apply2"
            value="Rate of application(bag per acre)"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            placeholder="Enter the rate of application"
            id="rate-apply2"
            name="applicationRateBagPerAcre"
            defaultValue=""
          />
        </div>
        <div className="my-4">
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
            name="supervisorName"
            defaultValue=""
          />
        </div>
        <div className="my-4">
          <Label
            htmlFor="contact"
            value="Contact of the supervisor"
            className="my-2 font-semibold"
          />
          <TextInput
            type="number"
            required
            placeholder="Enter contact of supervisor"
            id="contact"
            name="supervisorContact"
            defaultValue=""
          />
        </div>
        <div className="my-4">
          <Label
            htmlFor="cert"
            value="Certificate"
            className="my-2 font-semibold"
          />

          <Select
            id="cert"
            required
            name="supervisorQualification"
            defaultValue=""
            onChange={handleSelectCert}
          >
            <option>Select certificate of supervisor</option>
            <option value="MOFA">MOFA</option>
            <option value="EPA">EPA</option>
            <option value="PPRSD/NPPO">PPRSD/NPPO</option>
            <option value="Others">Others</option>
          </Select>
        </div>
        {hasCert && (
          <div className="my-4">
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
              name="otherCert"
              defaultValue=""
            />
          </div>
        )}

        <Button className="w-full md:w-1/2 mt-4" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FertilizerForm;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const formData = {
    farmId: Number(params.farmId),
    fertilizerName: data.get("fertilizerName"),
    applicationType: data.get("applicationType"),
    applicationRateMlPerAcre: Number(data.get("applicationRateMlPerAcre")),
    applicationRateBagPerAcre: Number(data.get("applicationRateBagPerAcre")),
    supervisorName: data.get("supervisorName"),

    supervisorContact: data.get("supervisorContact"),
    supervisorQualification: data.get("supervisorQualification"),
    activityDate: data.get("activityDate"),
  };
  console.log(formData);
  const response = await axiosbaseURL.post(
    "/farm/activity/fertilizer-application",
    formData
  );
  console.log("response for fertilizer activity", response);

  if (
    response.status === 401 ||
    response.status === 404 ||
    response.status === 500 ||
    response.status === 400
  ) {
    console.log(response.data);
    throw json({ message: "Could not save data." });
  }
  toast.success("Fertilizer  data submitted successfully!");
  return redirect("/app/farms");
};
