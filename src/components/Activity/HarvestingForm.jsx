import React, { useEffect, useState } from "react";
import {
  Button,
  Select,
  Label,
  TextInput,
  Datepicker,
  Alert,
} from "flowbite-react";
import { redirect, Form, useActionData } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import BackButton from "../BackButton";
import { axiosbaseURL } from "../../api/axios";
import ActivityHeading from "../ActivityHeading";
import { HiInformationCircle } from "react-icons/hi";

const HarvestingForm = ({ data, method }) => {
  const [modeOfHarvesting, setModeOfHarvesting] = useState("");
  const [hasHarvesting, setHasHarvesting] = useState(false);
  const [supervisorQualification, setSupervisorQualification] = useState("");
  const [hasOtherQualification, setHasOtherQualification] = useState(false);
  const [otherQualification, setOtherQualification] = useState("");
  const [activityDate, setActivityDate] = useState("");

  const errors = useActionData();
  const errorMessage = errors?.data;

  useEffect(() => {
    if (data) {
      setActivityDate(data.dateOfHarvest);
      setModeOfHarvesting(data.modeOfHarvesting);
      displayQualification(data.supervisorQualification);
    }
  }, []);

  const displayQualification = (value) => {
    if (value !== "MOFA" && value !== "EPA" && value !== "PPRSD/NPPO") {
      setSupervisorQualification("Others");
      setHasOtherQualification(true);
      setOtherQualification(value);
    } else {
      setSupervisorQualification(value);
    }
  };

  const handleSelectHarvesting = (e) => {
    setModeOfHarvesting(e.target.value);
    if (e.target.value === "MACHINERY") {
      setHasHarvesting(!hasHarvesting);
    } else {
      setHasHarvesting(false);
    }
  };
  const handleSupervisorQualification = (e) => {
    const value = e.target.value;
    console.log(value);
    setSupervisorQualification(value);
    setHasOtherQualification(false);
    if (value === "Others") {
      setSupervisorQualification(value);
      setHasOtherQualification(true);
    }
  };
  const handleDateChange = (date) => {
    const formattedDate = date.toISOString();
    setActivityDate(formattedDate);
  };
  return (
    <div className="container mx-auto">
      <BackButton />
      <ActivityHeading activityHeading="Key Data Entry For Harvesting" />
      {errors ? (
        <Alert color="failure" icon={HiInformationCircle} className="max-w-2xl">
          <span className="font-medium">Info alert!</span>
          <p>{`${errorMessage.code} - ${errorMessage.message}`}</p>
        </Alert>
      ) : null}
      <Form className="container mx-auto w-full md:w-[70%]" method={method}>
        <div className="my-4">
          <Label htmlFor="date" className="font-semibold my-2">
            Date of harvest
          </Label>
          <Datepicker
            id="date"
            placeholder="Select the harvesting date"
            maxDate={new Date()}
            name="dateOfHarvest"
            value={activityDate}
            onSelectedDateChanged={(date) => handleDateChange(date)}
          />
        </div>
        <div className="my-4">
          <Label htmlFor="acres" className="font-semibold my-2">
            Acres Harvested
          </Label>
          <TextInput
            id="acres"
            type="number"
            required
            placeholder="Enter acres harvested"
            name="acresHarvested"
            defaultValue={data ? data.acresHarvested : ""}
          />
        </div>
        <div className="my-4">
          <Label htmlFor="bags" className="font-semibold my-2">
            Bags Harvested
          </Label>
          <TextInput
            id="bags"
            type="number"
            required
            placeholder="Enter number of bags harvested"
            name="bagsHarvested"
            defaultValue={data ? data.bagsHarvested : ""}
          />
        </div>
        <div className="my-4">
          <Label htmlFor="weight" className="font-semibold my-2">
            Weight per bag harvested (kg)
          </Label>
          <TextInput
            id="weight"
            type="number"
            required
            placeholder="Enter weight per bag harvested"
            name="weightPerBagHarvested"
            defaultValue={data ? data.weightPerBagHarvested : ""}
          />
        </div>

        <div className="my-4">
          <Label
            htmlFor="modeofHarvesting"
            value="Mode of harvesting"
            className="my-2 font-semibold"
          />

          <Select
            id="modeofHarvesting"
            required
            value={modeOfHarvesting}
            name="modeOfHarvesting"
            onChange={handleSelectHarvesting}
          >
            <option value="MANUAL">Manual</option>
            <option value="MACHINERY">Machinery</option>
          </Select>
        </div>
        {hasHarvesting && (
          <div>
            <Label
              htmlFor="machine"
              value="Name of machine"
              className="my-2 font-semibold"
            />
            <Select id="machine" required name="machine" defaultValue="">
              <option value="Sheller">Sheller</option>
              <option value="Threshing">Threshing</option>
            </Select>
          </div>
        )}

        <div className="my-4">
          <Label
            htmlFor="supervisor"
            value="Name of the supervisor"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            required
            placeholder="Enter name of supervisor"
            id="contact"
            name="supervisorName"
            defaultValue={data ? data.supervisorName : ""}
          />
        </div>
        <div>
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
          <div className="my-4">
            <TextInput
              type="text"
              required
              placeholder="Enter other qualification of supervisor"
              id="supervisor"
              name="OtherSupervisorQualification"
              value={otherQualification}
              onChange={(e) => setOtherQualification(e.target.value)}
            />
          </div>
        )}

        <Button type="submit" className="bg-main mt-4 w-full">
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default HarvestingForm;

export const action = async ({ request, params }) => {
  const data = await request.formData();
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
    dateOfHarvest: data.get("dateOfHarvest"),
    acresHarvested: Number(data.get("acresHarvested")),
    bagsHarvested: Number(data.get("bagsHarvested")),
    weightPerBagHarvested: Number(data.get("weightPerBagHarvested")),
    modeOfHarvesting: data.get("modeOfHarvesting"),
    supervisorName: data.get("supervisorName"),
    supervisorContact: data.get("supervisorContact"),
    supervisorQualification: supervisorQualification,
  };

  const method = request.method;
  const activityId = params.activityId;

  if (method === "PUT") {
    try {
      const response = await axiosbaseURL.put(
        `/farm/activity/harvesting/${activityId}`,
        formData
      );
      toast.success("Harvesting activity updated successfully!");
      return redirect("/app/farms");
    } catch (error) {
      console.log(error.response);
    }
  }

  try {
    const response = await axiosbaseURL.post(
      "/farm/activity/harvesting",
      formData
    );
    toast.success("Havesting activity  submitted successfully!");
    return redirect("/app/farms");
  } catch (error) {
    return error.response;
  }
};
