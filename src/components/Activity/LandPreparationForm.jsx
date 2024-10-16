import React, { useState } from "react";
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

const LandPreparationForm = () => {
  const [activityDate, setActivityDate] = useState("");
  const [selectedActivities, setSelectedActivities] = useState([]);
  const [isSprayingActivity, setIsSprayingActivity] = useState(false);
  const [hasOtherQualification, setHasOtherQualification] = useState(false);
  const [qualification, setQualification] = useState("");

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

  const handleActivityChange = (e) => {
    setActivity(e.target.value);
    if (e.target.value === "Spraying") {
      setIsSprayingActivity(!isSprayingActivity);
    } else {
      setIsSprayingActivity(false);
    }
  };

  const handleLandActivityChange = (e) => {
    const value = e.target.value;
    if (value === "SPRAYING") {
      setIsSprayingActivity(!isSprayingActivity);
    }
    setSelectedActivities((prev) =>
      prev.includes(value)
        ? prev.filter((option) => option !== value)
        : [...prev, value]
    );
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
              value="Select the land preparation activity"
              className="my-2 font-semibold text-xl"
            />

            {landactivities.map((activity) => (
              <div className="flex items-center gap-2" key={activity.id}>
                <Checkbox
                  id={`land-activity-${activity.name}`}
                  value={activity.name.toUpperCase()}
                  name="landActivity"
                  onChange={handleLandActivityChange}
                />
                <Label htmlFor={`land-activity-${activity.name}`}>
                  {activity.name}
                </Label>
              </div>
            ))}
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
              placeholder="Select activity date"
              maxDate={defaultValue}
              name="activityDate"
              value={activityDate}
              onSelectedDateChanged={(date) => handleDateChange(date)}
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
            defaultValue=""
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
    const activites = data.get("selectedActivities");
    const supervisorQualification = getSupervisorQualification(
      data.get("supervisorQualification")
    );
    if (activites.includes("SPRAYING")) {
      return {
        farmId: Number(params.farmId),
        landSize: Number(data.get("landSize")),
        chemicalApplicationRate: Number(data.get("chemicalApplicationRate")),
        chemicalSprayed: data.get("chemicalSprayed"),
        activities: data.get("selectedActivities").split(","),
        supervisorName: data.get("supervisorName"),
        supervisorContact: data.get("supervisorContact"),
        supervisorQualification: supervisorQualification,
        activityDate: data.get("activityDate"),
      };
    }
    return {
      farmId: Number(params.farmId),
      landSize: Number(data.get("landSize")),
      activities: data.get("selectedActivities").split(","),
      activityDate: data.get("activityDate"),
    };
  }
  const formData = verifyFormFields(data);
  console.log(formData);

  // function getChemicalSprayed(chemicalSprayed) {
  //   console.log("sprayed", chemicalSprayed);
  //   if (chemicalSprayed === null) {
  //     return "none";
  //   }
  //   return chemicalSprayed;
  // }
  // const chemicalSprayed = getChemicalSprayed(data.get("chemicalSprayed"));

  function getSupervisorQualification(qualification) {
    if (qualification === "Others") {
      return data.get("OtherSupervisorQualification");
    }
    return qualification;
  }

  // const formData = {
  //   farmId: Number(params.farmId),
  //   landSize: Number(data.get("landSize")),
  //   chemicalApplicationRate: Number(data.get("chemicalApplicationRate")),
  //   chemicalSprayed: chemicalSprayed,
  //   activities: data.get("selectedActivities").split(","),
  //   supervisorName: data.get("supervisorName"),
  //   supervisorContact: data.get("supervisorContact"),
  //   supervisorQualification: supervisorQualification,
  //   activityDate: data.get("activityDate"),
  // };
  try {
    const response = await axiosbaseURL.post(
      "/farm/activity/land-preparation",
      formData
    );
    console.log(response);

    toast.success("Land Preparation data submitted successfully!");
    return redirect("/app/farms");
  } catch (error) {
    return error.response;
  }
};
