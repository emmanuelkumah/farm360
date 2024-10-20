import React, { useEffect, useState } from "react";
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

const PestControlForm = ({ method, data }) => {
  const [cropStage, setCropStage] = useState("");
  const [supervisorQualification, setSupervisorQualification] =
    useState("MOFA");
  const [hasOtherQualification, setHasOtherQualification] = useState(false);
  const [activityDate, setActivityDate] = useState("");

  const errors = useActionData();
  const errorMessage = errors?.data;

  useEffect(() => {
    if (data) {
      setCropStage(data.cropStage);
      setSupervisorQualification(data.supervisorQualification);
      setActivityDate(data.activityDate);
    }
  }, []);

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString();
    setActivityDate(formattedDate);
  };

  const handleSelectCropStage = (e) => {
    setCropStage(e.target.value);
  };

  const handleSupervisorQualification = (e) => {
    const value = e.target.value;
    setSupervisorQualification(value);
    if (value === "Others") {
      setSupervisorQualification(value);
      setHasOtherQualification(!hasOtherQualification);
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
      <Form className="container mx-auto w-full md:w-[70%]" method={method}>
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
                defaultValue={data ? data.chemicalName : ""}
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
                defaultValue={data ? data.chemicalApplicationRate : ""}
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
              placeholder="Enter name of supervisor"
              id="contact"
              name="supervisorContact"
              defaultValue={data ? data.supervisorContact : ""}
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
  const method = request.method;
  const activityId = params.activityId;

  if (method === "PUT") {
    try {
      const response = await axiosbaseURL.put(
        `/farm/activity/pest-control/${activityId}`,
        formData
      );
      toast.success("Pest control activity updated successfully!");
      return redirect("/app/farms");
    } catch (error) {
      console.log(error.response);
    }
  }

  try {
    const response = await axiosbaseURL.post(
      "/farm/activity/pest-control",
      formData
    );
    toast.success("Pest control activity  submitted successfully!");
    return redirect("/app/farms");
  } catch (error) {
    return error.response;
  }
};
