import React, { useState } from "react";
import { Button, Label, TextInput, Select, Datepicker } from "flowbite-react";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import ActivityHeading from "../ActivityHeading";
import BackButton from "../BackButton";
const LandPreparationForm = () => {
  const [clearingDate, setClearingDate] = useState("");
  const [ploughingDate, setPloughingDate] = useState("");
  const [harrowingDate, setHarrowingDate] = useState("");
  const [manualpreparationDate, setManualPreparationDate] = useState("");
  const [ridgingDate, setRidingDate] = useState("");
  const [moundDate, setMoundDate] = useState("");

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
  const handleChemicalDate = (date) => {
    const formattedDate = date.toISOString();
    setChemicalDate(formattedDate);
  };
  return (
    <div className="container mx-auto">
      <BackButton />
      <ActivityHeading activityHeading="Key Data Entry" />
      <Form className="container mx-auto w-full md:w-[70%]" method="post">
        <div className="flex flex-col">
          <Label htmlFor="landsize" value="Land size" className="mb-2" />
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
          <h2 className="text-md font-semibold">Activites</h2>
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
              defaultValue={defaultValue}
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
              defaultValue={defaultValue}
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
              defaultValue={defaultValue}
              maxDate={defaultValue}
              name="manualpreparationDate"
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
              defaultValue={defaultValue}
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
              defaultValue={defaultValue}
              maxDate={defaultValue}
              name="moundDate"
              value={moundDate}
              onSelectedDateChanged={(date) => handleMoundDate(date)}
            />
          </div>
        </section>

        <Button className="w-full mt-10" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default LandPreparationForm;
