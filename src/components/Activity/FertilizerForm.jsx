import React, { useEffect, useState } from "react";
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
import { toast } from "react-toastify";
import ActivityHeading from "../ActivityHeading";
import BackButton from "../BackButton";
import { axiosbaseURL } from "../../api/axios";

const FertilizerForm = ({ data, method }) => {
  const [hasFertMethod, setHasFertMethod] = useState(false);
  const [activityDate, setActivityDate] = useState("");
  const [fertilizerType, setFertilizerType] = useState("");
  const [fertilizerName, setFertilizerName] = useState("");
  const [defaultSupervisorQualification, setDefaultSupervisorQualification] =
    useState("MOFA");
  const [updateSupervisorQualification, setUpdateSupervisorQualification] =
    useState("");

  console.log(data);
  const defaultValue = new Date();

  const errors = useActionData();
  const errorMessage = errors?.data;

  useEffect(() => {
    if (data) {
      setFertilizerType(data.fertilizerType);
      setActivityDate(data.activityDate);
      setFertilizerName(data.fertilizerName);
    }
  }, []);

  const handleFertMethod = (e) => {
    setFertilizerName(e.target.value);
    if (e.target.value === "Other") {
      setHasFertMethod(!hasFertMethod);
    } else {
      setHasFertMethod(false);
    }
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

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString(); // Formats to "YYYY-MM-DD"
    setActivityDate(formattedDate);
  };

  const handleFertilzerTypeChange = (e) => {
    setFertilizerType(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <BackButton />
      <ActivityHeading activityHeading="Key Data Entry" />
      {errors ? (
        <Alert color="failure" icon={HiInformationCircle} className="max-w-2xl">
          <span className="font-medium">Info alert!</span>
          <p>{`${errorMessage.code} - ${errorMessage.message}`}</p>
        </Alert>
      ) : null}
      <Form className="container mx-auto w-full md:w-[70%]" method={method}>
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
            htmlFor="fertilizer"
            value="Type of fertilizer"
            className="my-2 font-semibold"
          />

          <Select
            id="fertilizer"
            required
            name="fertilizerType"
            value={fertilizerType}
            onChange={handleFertilzerTypeChange}
          >
            <option>Select the type of fertilizer</option>
            <option value="LIQUID">Liquid</option>
            <option value="ORGANIC">Organic</option>
            <option value="INORGANIC">Inorganic</option>
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
            value={fertilizerName}
            onChange={handleFertMethod}
          >
            <option>Select fertilizer</option>
            <option value="Manure">Manure</option>
            <option value="Compost">Compost</option>
            <option value="NPK">NPK</option>
            <option value="Urea">Urea</option>
            <option value="SOA">SOA</option>
            <option value="Other">Other</option>
          </Select>
        </div>
        {hasFertMethod && (
          <div className="my-4">
            <Label
              htmlFor="others"
              value="Other fertilizer used"
              className="my-2 font-semibold"
            />
            <TextInput
              type="text"
              placeholder="Enter name of the other fertilizer"
              id="others"
              name="otherFertilizerName"
              defaultValue=""
            />
          </div>
        )}
        <div className="my-4">
          <Label
            htmlFor="method"
            value="Fertilizer application method"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            placeholder="Enter the application method"
            id="rate-apply"
            name="applicationMethod"
            defaultValue={data ? data.applicationMethod : ""}
          />
        </div>

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
            defaultValue={data ? data.applicationRateMlPerAcre : ""}
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
            defaultValue={data ? data.applicationRateBagPerAcre : ""}
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
            type="number"
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
            value={defaultSupervisorQualification}
            onChange={handleSupervisorQualification}
          >
            <option>Select certificate of supervisor</option>
            <option value="MOFA">MOFA</option>
            <option value="EPA">EPA</option>
            <option value="PPRSD/NPPO">PPRSD/NPPO</option>
            <option value="Others">Others</option>
          </Select>
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
        </div>

        <Button className="w-full  mt-4" type="submit">
          Submit activity
        </Button>
      </Form>
    </div>
  );
};

export default FertilizerForm;

export const action = async ({ request, params }) => {
  const data = await request.formData();

  function getFertilizerName(fertilizerName) {
    if (fertilizerName === "Other") {
      return data.get("otherFertilizerName");
    }
    return data.get("fertilizerName");
  }
  const fertName = getFertilizerName(data.get("fertilizerName"));

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
    fertilizerName: fertName,
    fertilizerType: data.get("fertilizerType"),
    applicationMethod: data.get("applicationMethod"),
    applicationRateMlPerAcre: Number(data.get("applicationRateMlPerAcre")),
    applicationRateBagPerAcre: Number(data.get("applicationRateBagPerAcre")),
    supervisorName: data.get("supervisorName"),

    supervisorContact: data.get("supervisorContact"),
    supervisorQualification: supervisorQualification,
    activityDate: data.get("activityDate"),
  };

  const method = request.method;
  const activityId = params.activityId;

  if (method === "PUT") {
    try {
      const response = await axiosbaseURL.put(
        `/farm/activity/fertilizer-application/${activityId}`,
        formData
      );

      toast.success("Fertilizer activity data updated successfully!");
      return redirect("/app/farms");
    } catch (error) {
      console.log(error.response);
    }
  }

  try {
    const response = await axiosbaseURL.post(
      "/farm/activity/fertilizer-application",
      formData
    );
    toast.success("Fertilizer data submitted successfully!");
    return redirect("/app/farms");
  } catch (error) {
    return error.response;
  }
};
