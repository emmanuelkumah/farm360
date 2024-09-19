import React, { useState } from "react";
import { Button, Label, TextInput, Select, Datepicker } from "flowbite-react";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import ActivityHeading from "../ActivityHeading";
import BackButton from "../BackButton";
import { axiosbaseURL } from "../../api/axios";

const PestControlForm = () => {
  const [cropStage, setCropStage] = useState("");
  const [cert, setCert] = useState("");
  const [showOtherCert, setShowOtherCert] = useState(false);
  const [activityDate, setActivityDate] = useState("");

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString();
    setActivityDate(formattedDate);
  };

  const handleSelectCropStage = (e) => {
    setCropStage(e.target.value);
  };
  const handleSelectCert = (e) => {
    const value = e.target.value;
    setCert(value);
    if (value === "Others") {
      setShowOtherCert(!showOtherCert);
    } else {
      setShowOtherCert(false);
    }
  };

  return (
    <div className="container mx-auto">
      <BackButton />
      <ActivityHeading activityHeading="Key Data Entry" />
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
                Date
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
                name="chemical"
                defaultValue=""
              />
            </div>
            <div className="my-2">
              <Label htmlFor="entry" className="font-semibold my-2">
                Rate of application
              </Label>
              <TextInput
                id="entry"
                type="text"
                placeholder="Enter the rate of application"
                name="rate"
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
              value="supervisorQualification"
              className="my-2 font-semibold"
            />

            <Select
              id="supervisorQualification"
              required
              onChange={handleSelectCert}
              name="supervisorQualification"
              value={cert}
            >
              <option>Select certificate of supervisor</option>
              <option value="MOFA">MOFA</option>
              <option value="EPA">EPA</option>
              <option value="PPRSD/NPPO">PPRSD/NPPO</option>
              <option value="Others">Others</option>
            </Select>
          </div>
          {showOtherCert && (
            <div className="my-4">
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
                name="otherCert"
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

  const formData = {
    farmId: Number(params.farmId),
    cropStage: data.get("cropStage"),
    supervisorName: data.get("supervisorName"),
    supervisorContact: data.get("supervisorContact"),
    supervisorQualification: data.get("supervisorQualification"),
    activityDate: data.get("activityDate"),
  };
  const response = await axiosbaseURL.post(
    "/farm/activity/pest-control",
    formData
  );

  if (
    response.status === 401 ||
    response.status === 404 ||
    response.status === 500 ||
    response.status === 400
  ) {
    throw json({ message: "Could not save data." });
  }
  toast.success("Pest control  data submitted successfully!");
  return redirect("/app/farms");
};
