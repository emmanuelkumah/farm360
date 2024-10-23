import React, { useEffect, useState } from "react";
import {
  Button,
  Select,
  Label,
  TextInput,
  Datepicker,
  Alert,
} from "flowbite-react";
import { Form, redirect, useActionData } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosbaseURL } from "../../api/axios";
import BackButton from "../BackButton";
import ActivityHeading from "../ActivityHeading";

const PlantingForm = ({ data, method }) => {
  const defaultValue = new Date();
  const [defaultCrop, setDefaultCrop] = useState("Soya");
  const [updateCrop, setUpdateCrop] = useState("");
  const [activityDate, setActivityDate] = useState("");
  const [supervisorQualification, setSupervisorQualification] = useState("");
  const [hasOtherQualification, setHasOtherQualification] = useState(false);
  const [otherQualification, setOtherQualification] = useState("");

  const errors = useActionData();
  const errorMessage = errors?.data;

  useEffect(() => {
    if (data) {
      setUpdateCrop(data.cropName);
      setActivityDate(data.activityDate);
      displayQualification(data.supervisorQualification);
    }
  }, []);

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString();
    console.log(formattedDate);
    setActivityDate(formattedDate);
  };

  const displayQualification = (value) => {
    if (value !== "MOFA" && value !== "EPA" && value !== "PPRSD/NPPO") {
      setSupervisorQualification("Others");
      setHasOtherQualification(true);
      setOtherQualification(value);
    } else {
      setSupervisorQualification(value);
    }
  };

  const handleSupervisorQualification = (e) => {
    const value = e.target.value;
    setSupervisorQualification(value);
    setHasOtherQualification(false);
    if (value === "Others") {
      setSupervisorQualification(value);
      setHasOtherQualification(true);
    }
  };

  const handleCropUpdate = (e) => {
    setUpdateCrop(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <BackButton />
      <ActivityHeading activityHeading="Key Data Entries for Planting" />
      {errors ? (
        <Alert color="failure" icon={HiInformationCircle} className="max-w-2xl">
          <span className="font-medium">Info alert!</span>
          <p>{`${errorMessage.code} - ${errorMessage.message}`}</p>
        </Alert>
      ) : null}
      <Form className="w-full" method={method}>
        <div className="my-4">
          <Label htmlFor="planting" className="font-semibold my-4">
            Date of planting
          </Label>
          <Datepicker
            id="planting"
            name="activityDate"
            placeholder="Select planting date"
            maxDate={defaultValue}
            value={activityDate}
            onSelectedDateChanged={(date) => handleDateChange(date)}
          />
        </div>

        <div className="my-4">
          <Label
            htmlFor="crop"
            value="Name of crop"
            className="my-2 font-semibold"
          />

          <Select
            id="crop"
            required
            name="cropName"
            value={updateCrop ? updateCrop : defaultCrop}
            onChange={handleCropUpdate}
          >
            <option>Select name of crop</option>
            <option value="soya">Soya</option>
          </Select>
        </div>
        <div className="my-4">
          <Label
            htmlFor="kilo"
            value="Kilo planted"
            className="my-2 font-semibold"
          />
          <TextInput
            type="number"
            required
            placeholder="Kilo of seeds planted"
            name="kilosPlanted"
            id="kilo"
            defaultValue={data ? data.kilosPlanted : ""}
          />
        </div>
        <div className="my-4">
          <Label
            htmlFor="size"
            value="Land size covered on that date"
            className="my-2 font-semibold"
          />
          <TextInput
            type="number"
            required
            placeholder="Enter land size covered"
            id="size"
            name="landSizeCovered"
            defaultValue={data ? data.landSizeCovered : ""}
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
            maxLength={10}
            defaultValue={data ? data.supervisorContact : ""}
          />
        </div>
        <div className="my-4">
          <Label
            htmlFor="cert"
            value="Select Supervisor Certificate"
            className="my-2 font-semibold"
          />

          <Select
            id="cert"
            required
            name="supervisorQualification"
            value={supervisorQualification}
            onChange={handleSupervisorQualification}
          >
            <option value="MOFA">MOFA</option>
            <option value="EPA">EPA</option>
            <option value="PPRSD/NPPO">PPRSD/NPPO</option>
            <option value="Others">Others</option>
          </Select>
        </div>
        {hasOtherQualification && (
          <div>
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
              name="otherQualification"
              value={otherQualification}
              onChange={(e) => setOtherQualification(e.target.value)}
            />
          </div>
        )}

        <Button type="submit" className="my-4 w-full  bg-main">
          Submit planting activities
        </Button>
      </Form>
    </div>
  );
};

export default PlantingForm;

export const action = async ({ request, params }) => {
  const data = await request.formData();

  function getSupervisorQualification(qualification) {
    if (qualification === "Others") {
      return data.get("otherQualification");
    }
    return data.get("supervisorQualification");
  }
  const supervisorQualification = getSupervisorQualification(
    data.get("supervisorQualification")
  );
  console.log("qualification", supervisorQualification);
  const formData = {
    farmId: Number(params.farmId),
    cropName: data.get("cropName"),
    kilosPlanted: Number(data.get("kilosPlanted")),
    landSizeCovered: Number(data.get("landSizeCovered")),
    supervisorName: data.get("supervisorName"),
    supervisorContact: data.get("supervisorContact"),
    supervisorQualification: supervisorQualification,
    activityDate: data.get("activityDate"),
  };

  console.log("Form data:", formData);

  const method = request.method;
  const activityId = params.activityId;

  if (method === "PUT") {
    try {
      const response = await axiosbaseURL.put(
        `/farm/activity/planting/${activityId}`,
        formData
      );

      toast.success("Planting data updated successfully!");
      return redirect("/app/farms");
    } catch (error) {
      console.log(error.response);
    }
  }

  try {
    const response = await axiosbaseURL.post(
      "/farm/activity/planting",
      formData
    );
    toast.success("Planting activity  submitted successfully!");
    return redirect("/app/farms");
  } catch (error) {
    return error.response;
  }
};
