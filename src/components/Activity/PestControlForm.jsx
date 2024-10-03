import React, { useState } from "react";
import {
  Button,
  Label,
  TextInput,
  Select,
  Datepicker,
  Alert,
} from "flowbite-react";
import { Form, redirect, useActionData } from "react-router-dom";
import { toast } from "react-toastify";
import ActivityHeading from "../ActivityHeading";
import BackButton from "../BackButton";
import { HiInformationCircle } from "react-icons/hi";
import { axiosbaseURL } from "../../api/axios";

const PestControlForm = () => {
  const [cropStage, setCropStage] = useState("");
  const [qualification, setQualification] = useState("");
  const [hasOtherQualification, setHasOtherQualification] = useState(false);
  const [activityDate, setActivityDate] = useState("");

  const errors = useActionData();
  const errorMessage = errors?.data;

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString();
    setActivityDate(formattedDate);
  };

  const handleSelectCropStage = (e) => {
    setCropStage(e.target.value);
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
      <Form className="container mx-auto w-full md:w-[70%]" method="post">
        <div>
          <Label
            htmlFor="stage"
            value="Crop stage"
            className="my-2 font-semibold"
          />

          <Select
            id="stage"
            required
            onChange={handleSelectCropStage}
            name="cropStage"
            value={cropStage}
          >
            <option>Select stage of crop</option>
            <option value="EARLY_STAGE">Early stage</option>
            <option value="GROWING_STAGE">Growing stage</option>
            <option value="PRE_HARVESTING_STAGE">Preharvesting stage</option>
          </Select>
        </div>
        {cropStage && (
          <section>
            <div className="my-2">
              <Label htmlFor="date" className="font-semibold my-2">
                Date of activity
              </Label>
              <Datepicker
                id="date"
                name="activityDate"
                maxDate={new Date()}
                value={activityDate}
                onSelectedDateChanged={(date) => handleDateChange(date)}
              />
            </div>
            <div className="my-2">
              <Label htmlFor="chemical" className="font-semibold my-2">
                Name of chemical
              </Label>
              <TextInput
                id="chemical"
                type="text"
                placeholder="Enter the name of chemical"
                name="chemicalName"
                defaultValue=""
              />
            </div>
            <div className="my-2">
              <Label htmlFor="rate" className="font-semibold my-2">
                Rate of application
              </Label>
              <TextInput
                id="rate"
                type="text"
                placeholder="Enter the rate of application"
                name="chemicalApplicationRate"
                defaultValue=""
              />
            </div>
          </section>
        )}

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
              placeholder="Enter name of supervisor"
              id="contact"
              name="supervisorContact"
              defaultValue=""
            />
          </div>
          <div>
            <Label
              htmlFor="cert"
              value="supervisor qualification"
              className="my-2 font-semibold"
            />

            <Select
              id="supervisorQualification"
              required
              onChange={handleSupervisorQualification}
              name="supervisorQualification"
              value={qualification}
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

export default PestControlForm;

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
    cropStage: data.get("cropStage"),
    chemicalApplicationRate: data.get("chemicalApplicationRate"),

    chemicalName: data.get("chemicalName"),
    supervisorName: data.get("supervisorName"),
    supervisorContact: data.get("supervisorContact"),
    supervisorQualification: supervisorQualification,
    activityDate: data.get("activityDate"),
  };
  console.log(formData);

  try {
    const response = await axiosbaseURL.post(
      "/farm/activity/pest-control",
      formData
    );
    toast.success("Pest control  data submitted successfully!");
    return redirect("/app/farms");
  } catch (error) {
    return error.response;
  }
};
