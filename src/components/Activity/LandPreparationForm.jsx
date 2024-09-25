import React, { useState } from "react";
import { Button, Label, TextInput, Select, Datepicker } from "flowbite-react";
import { Form, redirect } from "react-router-dom";
import ActivityHeading from "../ActivityHeading";
import BackButton from "../BackButton";
import { axiosbaseURL } from "../../api/axios";
import { toast } from "react-toastify";

const LandPreparationForm = () => {
  const [clearingDate, setClearingDate] = useState("");
  const [ploughingDate, setPloughingDate] = useState("");
  const [harrowingDate, setHarrowingDate] = useState("");
  const [manualpreparationDate, setManualPreparationDate] = useState("");
  const [ridgingDate, setRidingDate] = useState("");
  const [moundDate, setMoundDate] = useState("");
  const [sprayingDate, setSprayingDate] = useState("");
  const [hasCert, setHasCert] = useState(false);
  const [activityDate, setActivityDate] = useState("");

  const defaultValue = new Date();

  const handleClearingDate = (date) => {
    const formattedDate = date.toISOString();
    setClearingDate(formattedDate);
    // setActivityDate(formattedDate);
  };
  const handlePloughingDate = (date) => {
    const formattedDate = date.toISOString();
    setPloughingDate(formattedDate);
  };
  const handleHarrowingDate = (date) => {
    const formattedDate = date.toISOString();
    setHarrowingDate(formattedDate);
  };
  const handleManualPreparationDate = (date) => {
    const formattedDate = date.toISOString();
    setManualPreparationDate(formattedDate);
  };
  const handleRidingDate = (date) => {
    const formattedDate = date.toISOString();
    setRidingDate(formattedDate);
  };
  const handleMoundDate = (date) => {
    const formattedDate = date.toISOString();
    setMoundDate(formattedDate);
  };
  const handleSprayingDate = (date) => {
    const formattedDate = date.toISOString();
    setSprayingDate(formattedDate);
  };

  const handleSelectCert = (e) => {
    if (e.target.value === "Others") {
      setHasCert(!hasCert);
    } else {
      setHasCert(false);
    }
  };
  const handleDateChange = (date) => {
    const formattedDate = date.toISOString();
    setActivityDate(formattedDate);
  };
  return (
    <div className="container mx-auto">
      <BackButton />
      <ActivityHeading activityHeading="Key Data Entry" />
      <Form className="container mx-auto w-full" method="post">
        <div className="flex flex-col">
          <div>
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
          <Label htmlFor="landsize" value="Land size" className="my-2" />
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
          <h2 className="text-lg font-semibold my-2">Activites</h2>
          <p>Select the date the following activities were done</p>
          <div>
            <Label htmlFor="Clearing" className="text-md font-semibold my-2">
              Clearing
            </Label>
            <Datepicker
              id="Clearing"
              placeholder="Select clearing date"
              maxDate={defaultValue}
              name="clearingDate"
              value={clearingDate}
              onSelectedDateChanged={(date) => handleClearingDate(date)}
            />
          </div>

          <div className="flex flex-col my-2">
            <Label htmlFor="Ploughing" className="text-md font-semibold my-2">
              Ploughing
            </Label>
            <Datepicker
              id="Ploughing"
              maxDate={defaultValue}
              placeholder="Select ploughing date"
              name="ploughingDate"
              value={ploughingDate}
              onSelectedDateChanged={(date) => handlePloughingDate(date)}
            />
          </div>
          <div className="flex flex-col my-2">
            <Label htmlFor="harrowing" className="text-md font-semibold my-2">
              Harrowing
            </Label>
            <Datepicker
              id="harrowing"
              maxDate={defaultValue}
              name="harrowingDate"
              value={harrowingDate}
              onSelectedDateChanged={(date) => handleHarrowingDate(date)}
            />
          </div>
          <div className="flex flex-col my-2">
            <Label
              htmlFor="manualPreparation"
              className="text-md font-semibold my-2"
            >
              Manual preparation
            </Label>
            <Datepicker
              id="manualPreparation"
              maxDate={defaultValue}
              name="manualDate"
              value={manualpreparationDate}
              onSelectedDateChanged={(date) =>
                handleManualPreparationDate(date)
              }
            />
          </div>
          <div className="flex flex-col my-2">
            <Label htmlFor="ridging" className="text-md font-semibold my-2">
              Ridging
            </Label>
            <Datepicker
              id="ridging"
              maxDate={defaultValue}
              name="ridgingDate"
              value={ridgingDate}
              onSelectedDateChanged={(date) => handleRidingDate(date)}
            />
          </div>
          <div className="flex flex-col my-2">
            <Label htmlFor="mound" className="text-md font-semibold my-2">
              Mound molding
            </Label>
            <Datepicker
              id="mound"
              maxDate={defaultValue}
              name="moundDate"
              value={moundDate}
              onSelectedDateChanged={(date) => handleMoundDate(date)}
            />
          </div>
          <div className="flex flex-col my-2">
            <Label htmlFor="spray" className="text-md font-semibold my-2">
              Spraying
            </Label>
            <Datepicker
              id="spray"
              maxDate={defaultValue}
              name="sprayingDate"
              value={sprayingDate}
              onSelectedDateChanged={(date) => handleSprayingDate(date)}
            />
          </div>
          {sprayingDate && (
            <section>
              <div className="my-4">
                <Label
                  htmlFor="chemical"
                  value="Name of chemical"
                  className="my-2 font-semibold"
                />
                <TextInput
                  type="text"
                  required
                  placeholder="Enter name of chemical sprayed"
                  id="chemical"
                  name="chemicalSprayed"
                  defaultValue=""
                />
              </div>
              <div className="my-4">
                <Label
                  htmlFor="rate"
                  value="Rate of chemical application"
                  className="my-2 font-semibold"
                />
                <TextInput
                  type="number"
                  required
                  placeholder="Enter rate of chemical application"
                  id="rate"
                  name="chemicalApplicationRate"
                  defaultValue=""
                />
              </div>
            </section>
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
              defaultValue=""
              onChange={handleSelectCert}
            >
              <option>Select certificate of supervisor</option>
              <option value="MOFA">MOFA</option>
              <option value="EPA">EPA</option>
              <option value="PPRSD/NPPO">PPRSD/NPPO</option>
              <option value="Others">Others</option>
            </Select>
          </div>
          {hasCert && (
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

export default LandPreparationForm;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const formData = {
    farmId: Number(params.farmId),
    landSize: Number(data.get("landSize")),
    chemicalApplicationRate: Number(data.get("chemicalApplicationRate")),
    chemicalSprayed: data.get("chemicalSprayed"),
    clearingDate: data.get("clearingDate"),
    moundMouldingDate: data.get("moundDate"),
    ridgingDate: data.get("ridgingDate"),
    manualPreparationDate: data.get("manualDate"),
    ploughingDate: data.get("ploughingDate"),
    harrowingDate: data.get("harrowingDate"),
    supervisorName: data.get("supervisorName"),
    supervisorContact: data.get("supervisorContact"),
    supervisorQualification: data.get("supervisorQualification"),
    activityDate: data.get("activityDate"),
  };

  const response = await axiosbaseURL.post(
    "/farm/activity/land-preparation",
    formData
  );
  console.log("land response", response);
  if (
    response.status === 401 ||
    response.status === 404 ||
    response.status === 500 ||
    response.status === 400
  ) {
    throw json({ message: "Could not save data." });
  }
  toast.success("Land Preparation data submitted successfully!");
  return redirect("/app/farms");
};
