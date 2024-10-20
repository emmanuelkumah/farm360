import React, { useEffect, useState } from "react";
import {
  Button,
  Label,
  TextInput,
  Select,
  Datepicker,
  Alert,
  Checkbox,
} from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

import { Form, redirect, useActionData } from "react-router-dom";
import ActivityHeading from "../ActivityHeading";
import BackButton from "../BackButton";
import { axiosbaseURL } from "../../api/axios";
import { toast } from "react-toastify";

const LandPreparationForm = ({ data, method }) => {
  const [activityDate, setActivityDate] = useState("");
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [isSprayingActivity, setIsSprayingActivity] = useState(false);
  const [hasOtherQualification, setHasOtherQualification] = useState(false);
  const [defaultSupervisorQualification, setDefaultSupervisorQualification] =
    useState("MOFA");
  const [updateSupervisorQualification, setUpdateSupervisorQualification] =
    useState("");
  const [isCheckedItem, setIsCheckedItem] = useState(false);

  useEffect(() => {
    if (data) {
      setActivityDate(data.activityDate);
    }
  }, []);

  const landactivities = [
    { id: 1, name: "Clearing" },
    { id: 2, name: "Mound_moulding" },
    { id: 3, name: "Ridging" },
    { id: 4, name: "Manual_Preparation" },
    { id: 5, name: "Ploughing" },
    { id: 6, name: "Harrowing" },
    { id: 7, name: "Spraying" },
  ];

  const errors = useActionData();
  const errorMessage = errors?.data;

  const defaultValue = new Date();

  const handleLandActivityChange = (e) => {
    const value = e.target.value;
    if (value === "Spraying") {
      setIsSprayingActivity(!isSprayingActivity);
    }
    setSelectedActivities((prev) =>
      prev.includes(value)
        ? prev.filter((option) => option !== value)
        : [...prev, value]
    );
  };
  const handleActivityDate = (date) => {
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
    <div className="container mx-auto">
      <BackButton />
      <ActivityHeading activityHeading="Key Data Entry" />
      {errors ? (
        <Alert color="failure" icon={HiInformationCircle} className="max-w-2xl">
          <span className="font-medium">Info alert!</span>
          <p>{`${errorMessage.code} - ${errorMessage.message}`}</p>
        </Alert>
      ) : null}
      <Form className="container mx-auto w-full" method={method}>
        <div className="flex flex-col">
          <div className="my-4">
            <Label
              htmlFor="activity"
              value="Select the land preparation activity"
              className="my-2 font-semibold text-xl"
            />

            {landactivities.map((activity) => {
              return (
                <div className="flex items-center gap-2" key={activity.id}>
                  <Checkbox
                    id={`land-activity-${activity.name}`}
                    value={activity.name}
                    name="landActivity"
                    onChange={handleLandActivityChange}
                  />

                  <Label htmlFor={`land-activity-${activity.name}`}>
                    {activity.name}
                  </Label>
                </div>
              );
            })}
            <TextInput
              name="selectedActivities"
              value={selectedActivities}
              readOnly
              className="my-2"
            />
          </div>
          <div className="my-2">
            <Label htmlFor="activity" className="text-md font-semibold my-2">
              Activity date
            </Label>
            <Datepicker
              id="activity"
              placeholder="Select date"
              value={activityDate}
              onSelectedDateChanged={(date) => handleActivityDate(date)}
              maxDate={defaultValue}
              name="activityDate"
            />
          </div>
          <Label htmlFor="landsize" className="my-2 text-md">
            Land size (acres)
          </Label>
          <TextInput
            id="landsize"
            type="number"
            name="landSize"
            min={1}
            required
            placeholder="Enter land size"
            defaultValue={data ? data.landSize : ""}
          />
          {isSprayingActivity && (
            <div>
              <section className="my-2">
                <div>
                  <Label htmlFor="chemical" className="my-4">
                    Chemical sprayed
                  </Label>
                  <TextInput
                    type="text"
                    name="chemicalSprayed"
                    required
                    placeholder="Enter chemical sprayed"
                    id="chemical"
                    defaultValue={data ? data.chemicalSprayed : ""}
                  />
                </div>
                <div>
                  <Label htmlFor="entry" className="my-4">
                    Rate of application (ml)
                  </Label>
                  <TextInput
                    type="number"
                    required
                    placeholder="Enter rate of application"
                    id="entry"
                    name="chemicalApplicationRate"
                    defaultValue={data ? data.chemicalApplicationRate : ""}
                  />
                </div>
              </section>
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
              </section>
            </div>
          )}
        </div>

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

  function verifyFormFields(data) {
    const activities = data.get("selectedActivities");

    const convertActivitiesToUpperCase = activities.toUpperCase().split(",");
    // console.log("activities", activities.toUpperCase().split(","));
    const supervisorQualification = getSupervisorQualification(
      data.get("supervisorQualification")
    );
    if (activities.includes("Spraying")) {
      return {
        farmId: Number(params.farmId),
        landSize: Number(data.get("landSize")),
        chemicalApplicationRate: Number(data.get("chemicalApplicationRate")),
        chemicalSprayed: data.get("chemicalSprayed"),
        activities: convertActivitiesToUpperCase,
        supervisorName: data.get("supervisorName"),
        supervisorContact: data.get("supervisorContact"),
        supervisorQualification: supervisorQualification,
        activityDate: data.get("activityDate"),
      };
    }
    return {
      farmId: Number(params.farmId),
      landSize: Number(data.get("landSize")),
      activities: convertActivitiesToUpperCase,
      activityDate: data.get("activityDate"),
    };
  }
  const formData = verifyFormFields(data);

  function getSupervisorQualification(qualification) {
    if (qualification === "Others") {
      return data.get("OtherSupervisorQualification");
    }
    return qualification;
  }

  const method = request.method;
  const activityId = params.activityId;

  if (method === "PUT") {
    try {
      const response = await axiosbaseURL.put(
        `/farm/activity/land-preparation/${activityId}`,
        formData
      );

      toast.success("Land preparation data updated successfully!");
      return redirect("/app/farms");
    } catch (error) {
      console.log(error.response);
    }
  }

  try {
    const response = await axiosbaseURL.post(
      "/farm/activity/land-preparation",
      formData
    );
    toast.success("Land preparation data submitted successfully!");
    return redirect("/app/farms");
  } catch (error) {
    return error.response;
  }
};
