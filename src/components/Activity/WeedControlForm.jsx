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

import { Form, redirect, useActionData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { axiosbaseURL } from "../../api/axios";
import ActivityHeading from "../ActivityHeading";
import BackButton from "../BackButton";

const WeedControlForm = ({ data, method }) => {
  const [activityDate, setActivityDate] = useState("");
  const [weedControlMethod, setWeedControlMethod] = useState("CHEMICAL");
  const [updateWeedControlMethod, setUpdateWeedControlMethod] = useState("");
  const [isChemical, setIsChemical] = useState(true);
  const [hasOtherQualification, setHasOtherQualification] = useState(false);
  const [defaultSupervisorQualification, setDefaultSupervisorQualification] =
    useState("MOFA");
  const [updateSupervisorQualification, setUpdateSupervisorQualification] =
    useState("");

  const errors = useActionData();
  const errorMessage = errors?.data;

  useEffect(() => {
    if (data) {
      setActivityDate(data.activityDate);
      setWeedControlMethod(data.weedControlMethod);
    }
  }, []);

  const handleWeedControlMethod = (e) => {
    setWeedControlMethod(e.target.value);
  };

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString();
    setActivityDate(formattedDate);
  };
  const handleSupervisorQualification = (e) => {
    if (data) {
      setUpdateSupervisorQualification(e.target.value);
    }
    if (e.target.value === "Others") {
      setDefaultSupervisorQualification(e.target.value);
      setHasOtherQualification(!hasOtherQualification);
    } else {
      setDefaultSupervisorQualification(e.target.value);
      setHasOtherQualification(hasOtherQualification);
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
              Activity date
            </Label>
            <Datepicker
              id="weed"
              name="activityDate"
              placeholder="Select date of weed control"
              maxDate={new Date()}
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
              onChange={handleWeedControlMethod}
              value={weedControlMethod}
            >
              <option>Select method of weed control</option>
              <option value="MANUAL">Manual</option>
              <option value="CHEMICAL">Chemical</option>
            </Select>
          </div>
          {weedControlMethod === "CHEMICAL" && (
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
                  value="Rate of chemical application (in ml)"
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
              <section>
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
                    value="Select supervisor certificate"
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
                    <option value="MOFA">MOFA</option>
                    <option value="EPA">EPA</option>
                    <option value="PPRSD/NPPO">PPRSD/NPPO</option>
                    <option value="Others">Others</option>
                  </Select>
                </div>
                {defaultSupervisorQualification === "Others" && (
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
              </section>
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
        supervisorName: "",
        supervisorContact: "",
        supervisorQualification: "",
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

  function getSupervisorQualification(qualification) {
    if (qualification === "Others") {
      return data.get("OtherSupervisorQualification");
    }
    return data.get("supervisorQualification");
  }
  const method = request.method;
  const activityId = params.activityId;

  if (method === "PUT") {
    try {
      const response = await axiosbaseURL.put(
        `/farm/activity/weed-control/${activityId}`,
        formData
      );
      toast.success("Weed control updated successfully!");
      return redirect("/app/farms");
    } catch (error) {
      console.log(error.response);
    }
  }
  try {
    const response = await axiosbaseURL.post(
      "/farm/activity/weed-control",
      formData
    );
    toast.success("Weed control  data submitted successfully!");
    return redirect("/app/farms");
  } catch (error) {
    return error.response;
  }
};
