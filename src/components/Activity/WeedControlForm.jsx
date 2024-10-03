import React, { useState, useEffect } from "react";
import {
  Button,
  Select,
  Label,
  TextInput,
  Datepicker,
  Alert,
} from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

import { useParams, Form, redirect, useActionData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { axiosbaseURL } from "../../api/axios";
import ActivityHeading from "../ActivityHeading";
import BackButton from "../BackButton";

const WeedControlForm = () => {
  const [activityDate, setActivityDate] = useState("");
  const [isChemical, setIsChemical] = useState(false);
  const [hasOtherQualification, setHasOtherQualification] = useState(false);
  const [qualification, setQualification] = useState("");
  const [weedControl, setWeedControl] = useState("");

  const errors = useActionData();
  const errorMessage = errors?.data;

  const handleSelectWeedControl = (e) => {
    setWeedControl(e.target.value);
    if (e.target.value === "CHEMICAL") {
      setIsChemical(!isChemical);
    } else {
      setIsChemical(false);
    }
  };

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString(); // Formats to "YYYY-MM-DD"
    setActivityDate(formattedDate);
  };
  const handleSupervisorQualification = (e) => {
    setQualification(e.target.value);
    if (e.target.value === "Others") {
      setHasOtherQualification(!hasOtherQualification);
    } else {
      setHasOtherQualification(false);
    }
  };

  return (
    <div>
      <div className="container mx-auto">
        <BackButton />
        <ActivityHeading activityHeading="Key Data Entries For Weed Control" />
        {errors ? (
          <Alert
            color="failure"
            icon={HiInformationCircle}
            className="max-w-2xl"
          >
            <span className="font-medium">Info alert!</span>
            <p>{`${errorMessage.code} - ${errorMessage.message}`}</p>
          </Alert>
        ) : null}
        <Form className="container mx-auto w-full md:w-[70%]" method="post">
          <div className="my-4">
            <Label htmlFor="weed" className="font-semibold my-2">
              Date of weed control
            </Label>
            <Datepicker
              id="weed"
              name="activityDate"
              placeholder="Select date of weed control"
              maxDate={new Date()}
              required
              value={activityDate}
              onSelectedDateChanged={(date) => handleDateChange(date)}
            />
          </div>

          <div className="my-4">
            <Label
              htmlFor="method"
              value="Method of weed control"
              className="my-2 font-semibold"
            />

            <Select
              id="method"
              required
              name="weedControlMethod"
              onChange={handleSelectWeedControl}
              value={weedControl}
            >
              <option>Select method of weed control</option>
              <option value="MANUAL">Manual</option>
              <option value="CHEMICAL">Chemical</option>
            </Select>
          </div>
          {isChemical && (
            <div className="my-4">
              <Label
                htmlFor="chemical"
                value="Name of chemical"
                className="my-2 font-semibold"
              />
              <TextInput
                type="text"
                required
                placeholder="Enter name of chemical"
                id="chemical"
                name="chemicalName"
                defaultValue=""
              />
            </div>
          )}

          <div className="my-4">
            <Label
              htmlFor="rate"
              value="Rate of chemical application"
              className="my-2 font-semibold"
            />
            <TextInput
              type="text"
              required
              placeholder="Enter rate of application"
              id="rate"
              name="chemicalApplicationRate"
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
              type="text"
              required
              placeholder="Enter name of supervisor"
              id="contact"
              name="supervisorContact"
              defaultValue=""
              helperText={
                <>
                  <p>Prefix phone number with 233 Eg.233244555333</p>
                </>
              }
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
              value={qualification}
              onChange={handleSupervisorQualification}
            >
              <option>Select certificate of supervisor</option>
              <option value="MOFA">MOFA</option>
              <option value="EPA">EPA</option>
              <option value="PPRSD/NPPO">PPRSD/NPPO</option>
              <option value="Others">Others</option>
            </Select>
          </div>
          {hasOtherQualification && (
            <div className="my-4">
              <TextInput
                type="text"
                required
                placeholder="Enter other qualification of supervisor"
                id="supervisor"
                name="OtherSupervisorQualification"
                defaultValue=""
              />
            </div>
          )}

          <Button className="w-full" type="submit">
            Submit
          </Button>
        </Form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default WeedControlForm;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  function getChemicalUsed(control) {
    if (control === "CHEMICAL") {
      return data.get("chemicalName");
    }
    return data.get("weedControlMethod");
  }
  const chemicalUsed = getChemicalUsed(data.get("weedControlMethod"));

  function getSupervisorQualification(qualification) {
    if (qualification === "Others") {
      return data.get("OtherSupervisorQualification");
    }
    return data.get("supervisorQualification");
  }
  const supervisorQualification = getSupervisorQualification(
    data.get("supervisorQualification")
  );

  const formData = {
    farmId: Number(params.farmId),
    weedControlMethod: data.get("weedControlMethod"),
    chemicalApplicationRate: Number(data.get("chemicalApplicationRate")),
    chemicalName: chemicalUsed,
    supervisorName: data.get("supervisorName"),
    supervisorContact: data.get("supervisorContact"),
    supervisorQualification: supervisorQualification,
    activityDate: data.get("activityDate"),
  };

  try {
    const response = await axiosbaseURL.post(
      "/farm/activity/weed-control",
      formData
    );
    console.log(response);
    toast.success("Weed control  data submitted successfully!");
    return redirect("/app/farms");
  } catch (error) {
    return error.response;
  }

  // const response = await axiosbaseURL.post(
  //   "/farm/activity/weed-control",
  //   formData
  // );
  // console.log("weed response", response);

  // if (
  //   response.status === 401 ||
  //   response.status === 404 ||
  //   response.status === 500 ||
  //   response.status === 400
  // ) {
  //   console.log(response.data);
  //   throw json({ message: "Could not save data." });
  // }
  // toast.success("Weedcontrol  data submitted successfully!");
  // return redirect("/app/farms");
};
