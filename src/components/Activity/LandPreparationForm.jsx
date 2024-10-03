import React, { useState } from "react";
import {
  Button,
  Label,
  TextInput,
  Select,
  Datepicker,
  Alert,
} from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

import { Form, redirect, useActionData } from "react-router-dom";
import ActivityHeading from "../ActivityHeading";
import BackButton from "../BackButton";
import { axiosbaseURL } from "../../api/axios";
import { toast } from "react-toastify";

const LandPreparationForm = () => {
  const [activityDate, setActivityDate] = useState("");
  const [activity, setActivity] = useState("");
  const [isSprayingActivity, setIsSprayingActivity] = useState(false);
  const [hasOtherQualification, setHasOtherQualification] = useState(false);
  const [qualification, setQualification] = useState("");

  const errors = useActionData();
  const errorMessage = errors?.data;

  const defaultValue = new Date();

  const handleActivityChange = (e) => {
    setActivity(e.target.value);
    if (e.target.value === "Spraying") {
      setIsSprayingActivity(!isSprayingActivity);
    } else {
      setIsSprayingActivity(false);
    }
  };

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString();
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
    <div className="container mx-auto">
      <BackButton />
      <ActivityHeading activityHeading="Key Data Entry" />
      {errors ? (
        <Alert color="failure" icon={HiInformationCircle} className="max-w-2xl">
          <span className="font-medium">Info alert!</span>
          <p>{`${errorMessage.code} - ${errorMessage.message}`}</p>
        </Alert>
      ) : null}
      <Form className="container mx-auto w-full" method="post">
        <div className="flex flex-col">
          <div className="my-4">
            <Label
              htmlFor="activity"
              value="Select land preparation activity"
              className="my-2 font-semibold"
            />

            <Select
              id="activity"
              required
              name="activity"
              value={activity}
              onChange={handleActivityChange}
            >
              <option>Select activity</option>
              <option value="Clearing">Clearing</option>
              <option value="Mound molding">Mound molding</option>
              <option value="Ridging">Ridging</option>
              <option value="Manual Preparation">Manual preparation</option>
              <option value="Ploughing">Ploughing </option>
              <option value="Harrowing">Harrowing </option>
              <option value="Spraying"> Spraying </option>
            </Select>
          </div>
          {isSprayingActivity && (
            <section className="my-2">
              <div>
                <Label htmlFor="chemical" className="my-2">
                  Chemical sprayed
                </Label>
                <TextInput
                  type="text"
                  required
                  placeholder="Enter chemical sprayed"
                  id="chemical"
                />
              </div>
              <div>
                <Label htmlFor="entry" className="my-2">
                  Rate of application (ml)
                </Label>
                <TextInput
                  type="number"
                  required
                  placeholder="Enter rate of application"
                  id="entry"
                  name="chemicalApplicationRate"
                />
              </div>
            </section>
          )}
          <div className="my-2">
            <Label htmlFor="activity" className="text-md font-semibold my-2">
              Select date of activity
            </Label>
            <Datepicker
              id="activity"
              placeholder="Select clearing date"
              maxDate={defaultValue}
              name="activityDate"
              value={activityDate}
              onSelectedDateChanged={(date) => handleDateChange(date)}
            />
          </div>
          <Label htmlFor="landsize" className="my-2">
            Land size (acres)
          </Label>
          <TextInput
            id="landsize"
            type="number"
            name="landSize"
            min={1}
            required
            placeholder="Enter land size"
            defaultValue=""
          />
        </div>
        <section>
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
              defaultValue=""
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
        </section>

        <Button className="w-full mt-10" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default LandPreparationForm;

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
    landSize: Number(data.get("landSize")),
    chemicalApplicationRate: Number(data.get("chemicalApplicationRate")),
    chemicalSprayed: data.get("chemicalSprayed"),
    activity: data.get("activity"),
    sprayingDate: data.get("sprayingDate"),
    supervisorName: data.get("supervisorName"),
    supervisorContact: data.get("supervisorContact"),
    supervisorQualification: supervisorQualification,
    activityDate: data.get("activityDate"),
  };

  try {
    const response = await axiosbaseURL.post(
      "/farm/activity/land-preparation",
      formData
    );
    if (response.status === 201) {
      console.log("success", response);
      toast.success("Land Preparation data submitted successfully!");
      return redirect("/app/farmers");
    }
  } catch (error) {
    return error.response;
  }
};
