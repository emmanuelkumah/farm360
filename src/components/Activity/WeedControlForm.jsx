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

const WeedControlForm = ({ data, method }) => {
  const [activityDate, setActivityDate] = useState("");
  const [defaultWeedControlMethod, setDefaultWeedControlMethod] =
    useState("CHEMICAL");
  const [updateWeedControlMethod, setUpdateWeedControlMethod] = useState("");
  const [isChemical, setIsChemical] = useState(false);
  const [hasOtherQualification, setHasOtherQualification] = useState(false);
  const [defaultSupervisorQualification, setDefaultSupervisorQualification] =
    useState("MOFA");
  const [updateSupervisorQualification, setUpdateSupervisorQualification] =
    useState("");
  const [weedControl, setWeedControl] = useState("");

  const errors = useActionData();
  const errorMessage = errors?.data;

  useEffect(() => {
    if (data) {
      setUpdateWeedControlMethod(data.weedControlMethod);
      displayOtherFields(data);
    }
  }, []);

  const displayOtherFields = (data) => {
    if (data.weedControlMethod === "CHEMICAL") {
      setIsChemical(true);
    }
  };

  const handleSelectWeedControl = (e) => {
    if (e.target.value === "MANUAL") {
      setIsChemical(false);
      setUpdateWeedControlMethod(e.target.value);
    }
    if (e.target.value === "CHEMICAL") {
      setIsChemical(true);
      setUpdateWeedControlMethod(e.target.value);
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
        <Form className="container mx-auto w-full md:w-[70%]" method={method}>
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
              value={data ? data.activityDate : activityDate}
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
              value={
                updateWeedControlMethod
                  ? updateWeedControlMethod
                  : defaultWeedControlMethod
              }
            >
              <option>Select method of weed control</option>
              <option value="MANUAL">Manual</option>
              <option value="CHEMICAL">Chemical</option>
            </Select>
          </div>
          {isChemical && (
            <div>
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
                  defaultValue={data ? data.chemicalName : ""}
                />
              </div>
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
                  defaultValue={data ? data.chemicalApplicationRate : ""}
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
                  defaultValue={data ? data.supervisorName : ""}
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
                  placeholder="Enter contact of supervisor"
                  id="contact"
                  name="supervisorContact"
                  defaultValue={data ? data.supervisorContact : ""}
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
                  value={
                    updateSupervisorQualification
                      ? updateSupervisorQualification
                      : defaultSupervisorQualification
                  }
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

  const formData = verifyFormFields(data);
  console.log("data", formData);

  function verifyFormFields(data) {
    const supervisorQualification = getSupervisorQualification(
      data.get("supervisorQualification")
    );
    const chemicalUsed = getChemicalUsed(data.get("weedControlMethod"));

    if (data.get("weedControlMethod") === "MANUAL") {
      return {
        farmId: Number(params.farmId),
        weedControlMethod: data.get("weedControlMethod"),
        activityDate: data.get("activityDate"),
      };
    }
    return {
      farmId: Number(params.farmId),
      weedControlMethod: data.get("weedControlMethod"),
      chemicalApplicationRate: Number(data.get("chemicalApplicationRate")),
      chemicalName: chemicalUsed,
      supervisorName: data.get("supervisorName"),
      supervisorContact: data.get("supervisorContact"),
      supervisorQualification: supervisorQualification,
      activityDate: data.get("activityDate"),
    };
  }
  function getChemicalUsed(control) {
    if (control === "CHEMICAL") {
      return data.get("chemicalName");
    }
    return data.get("weedControlMethod");
  }
  // const chemicalUsed = getChemicalUsed(data.get("weedControlMethod"));

  function getSupervisorQualification(qualification) {
    if (qualification === "Others") {
      return data.get("OtherSupervisorQualification");
    }
    return data.get("supervisorQualification");
  }

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
};
