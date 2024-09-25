import React, { useState } from "react";
import {
  Label,
  TextInput,
  Datepicker,
  Select,
  Radio,
  Button,
} from "flowbite-react";

import { useParams, Form } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosbaseURL } from "../../api/axios";
import BackButton from "../BackButton";
import ActivityHeading from "../ActivityHeading";

const PrePlantingForm = () => {
  const [hasSource, setSource] = useState(false);
  const [hasTreatmentMethod, setHasTreatmentMethod] = useState(false);
  const [activityDate, setActivityDate] = useState("");
  const [clearingDate, setClearingDate] = useState("");
  const [ploughingDate, setPloughingDate] = useState("");
  const [harrowingDate, setHarrowingDate] = useState("");
  const [manualpreparationDate, setManualPreparationDate] = useState("");
  const [ridgingDate, setRidingDate] = useState("");
  const [moundDate, setMoundDate] = useState("");
  const [chemicalDate, setChemicalDate] = useState("");

  const defaultValue = new Date();

  const handleActivityDate = (date) => {
    const formattedDate = date.toISOString();
    setActivityDate(formattedDate);
  };
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

  const handleSelectSource = (e) => {
    if (e.target.value === "Others") {
      setSource(!hasSource);
    } else {
      setSource(false);
    }
  };

  const handleSelectTreatment = (e) => {
    if (e.target.value === "Other") {
      setHasTreatmentMethod(!hasTreatmentMethod);
    } else {
      setSource(false);
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <BackButton />
        <ActivityHeading activityHeading="Key Data Entries For Pre-Planting" />
        <Form method="post" className="w-full">
          <div className="grid grid-cols-1">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <Label
                  htmlFor="date"
                  value="Select the date"
                  className="mb-2"
                />
                <Datepicker
                  id="date"
                  placeholder="Select date"
                  value={activityDate}
                  onSelectedDateChanged={(date) => handleActivityDate(date)}
                  maxDate={defaultValue}
                  name="activityDate"
                />
                <div className="my-4">
                  <div>
                    <Label
                      htmlFor="chemical"
                      value="Chemical sprayed"
                      className="mb-2"
                    />
                    <TextInput
                      id="chemical"
                      type="text"
                      name="ChemicalSprayed"
                      required
                      placeholder="Enter chemical name "
                      defaultValue=""
                    />
                  </div>
                </div>
                <div className="my-4">
                  <div className="flex flex-col">
                    <Label
                      htmlFor="rate"
                      value="Rate of chemical application"
                      className="mb-2"
                    />
                    <TextInput
                      id="rate"
                      type="number"
                      name="chemicalApplicationRate"
                      required
                      placeholder="Enter rate of chemical application "
                      defaultValue=""
                    />
                  </div>
                </div>

                <div className="my-4">
                  <div className="flex flex-col">
                    <Label
                      htmlFor="source"
                      value="Source of planting material"
                      className="my-2 font-semibold"
                    />

                    <Select
                      id="source"
                      name="plantingMaterialSource"
                      required
                      defaultValue=""
                      onChange={handleSelectSource}
                    >
                      <option>Select Source of planting material</option>
                      <option value="Local inputs dealer">
                        Local inputs dealer
                      </option>
                      <option value="MOFA">MOFA</option>
                      <option value="BJL">BJL</option>
                      <option value="Own field">Own field</option>
                      <option value="Imported">Imported</option>
                      <option value="Others">Others</option>
                    </Select>
                  </div>
                  {hasSource && (
                    <div className="flex flex-col">
                      <Label
                        htmlFor="seed"
                        value="Other Source"
                        className="my-2 font-semibold"
                      />
                      <TextInput
                        id="seed"
                        type="text"
                        name="plantingMaterialSource"
                        defaultValue=""
                        placeholder="Enter where you got the source from"
                      />
                    </div>
                  )}
                </div>
                <div className="my-4">
                  <Label
                    htmlFor="quantity"
                    value="Quantity of planting material"
                    className="my-2 font-semibold"
                  />
                  <TextInput
                    id="quantity"
                    type="number"
                    min="1"
                    name="plantingMaterialQuantity"
                    defaultValue="1"
                    placeholder="Enter quantity"
                  />
                </div>
                <div className="my-4">
                  <Label
                    htmlFor="yield"
                    value="Yield of planting material per acre"
                    className="mb-2 font-semibold"
                  />
                  <TextInput
                    id="yield"
                    type="number"
                    min="1"
                    name="plantingMaterialYield"
                    placeholder="Enter yield"
                  />
                </div>
                <div className="my-4">
                  <fieldset className="flex flex-col gap-4">
                    <legend className="my-2 font-semibold">
                      Was planting material treated?
                    </legend>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="yes-treatment"
                        name="plantingMaterialIsTreated"
                        value={true}
                      />
                      <Label htmlFor="yes-treatment">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="no-treatment"
                        name="plantingMaterialIsTreated"
                        value={false}
                      />
                      <Label htmlFor="no-treatment">No</Label>
                    </div>
                  </fieldset>
                </div>
                <div className="my-4">
                  <Label
                    htmlFor="planting"
                    value="Select planting material"
                    className="my-2 font-semibold"
                  />
                  <Select
                    id="planting"
                    required
                    name="plantingMaterial"
                    defaultValue=""
                  >
                    <option>Select planting material</option>
                    <option value="seed">Seed</option>
                    <option value="sucker">Sucker</option>
                    <option value="seedlings">Seedlings</option>
                    <option value="tuber">Tuber</option>
                    <option value="stem">Stem</option>
                    <option value="rhizome">Rhizome</option>
                    <option value="bulbs">Bulbs</option>
                  </Select>
                </div>
              </div>
              {/* <div className="flex flex-col">
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
              </div> */}
              {/* <section>
                <h2 className="text-md font-semibold">Activites</h2>
                <p>Select the date the following activities were done</p>
                <div>
                  <Label
                    htmlFor="Clearing"
                    className="text-md font-semibold my-2"
                  >
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
                  <Label
                    htmlFor="Ploughing"
                    className="text-md font-semibold my-2"
                  >
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
                  <Label
                    htmlFor="harrowing"
                    className="text-md font-semibold my-2"
                  >
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
                  <Label
                    htmlFor="ridging"
                    className="text-md font-semibold my-2"
                  >
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
              </section> */}
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <Label
                  className="mb-2 font-semibold"
                  htmlFor="method"
                  value="Treatment method"
                />
                <Select
                  id="method"
                  required
                  name="plantingMaterialTreatmentMethod"
                  defaultValue=""
                  onSelect={handleSelectTreatment}
                >
                  <option>Select treatment method</option>
                  <option value="Chemical">Chemical</option>
                  <option value="hot water">Hot water</option>
                  <option value="Other">Other</option>
                </Select>
                {hasTreatmentMethod && (
                  <div className="my-4">
                    <Label
                      className="mb-2 font-semibold"
                      htmlFor="other"
                      value="Other treatment method or chemical used"
                    />
                    <TextInput
                      id="other"
                      type="text"
                      required
                      defaultValue=""
                      name="plantingMaterialTreatmentMethod"
                      placeholder="Enter the other treatment method or chemical used"
                    />
                  </div>
                )}
              </div>
              <div className="my-2">
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
              <div className="my-2">
                <Label
                  htmlFor="supervisor"
                  value="Supervisor"
                  className="my-2 font-semibold"
                />
                <TextInput
                  type="text"
                  required
                  placeholder="Enter contact of supervisor"
                  id="supervisor"
                  name="supervisorContact"
                  defaultValue=""
                />
              </div>
              <div className="my-2">
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
                >
                  <option>Select certificate of supervisor</option>
                  <option value="MOFA">MOFA</option>
                  <option value="EPA">EPA</option>
                  <option value="PPRSD/NPPO">PPRSD/NPPO</option>
                  <option value="Others">Others</option>
                </Select>
              </div>
              <Button className="bg-main" type="submit">
                Save PrePlanting Activity
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default PrePlantingForm;

export const action = async ({ request, params }) => {
  const data = await request.formData();

  function strToBoolean(str) {
    const lowercaseStr = str.toLowerCase();
    if (lowercaseStr === "true") return true;
    if (lowercaseStr === "false") return false;
    return null;
  }

  const treated = strToBoolean(data.get("plantingMaterialIsTreated"));
  const formData = {
    farmId: Number(params.farmId),
    chemicalApplicationRate: Number(data.get("chemicalApplicationRate")),
    ChemicalSprayed: data.get("ChemicalSprayed"),
    plantingMaterial: data.get("plantingMaterial"),
    plantingMaterialYield: Number(data.get("plantingMaterialYield")),
    plantingMaterialQuantity: Number(data.get("plantingMaterialQuantity")),
    plantingMaterialSource: data.get("plantingMaterialSource"),
    plantingMaterialTreatmentMethod: data.get(
      "plantingMaterialTreatmentMethod"
    ),

    plantingMaterialIsTreated: treated,
    supervisorName: data.get("supervisorName"),
    supervisorContact: data.get("supervisorContact"),
    supervisorQualification: data.get("supervisorQualification"),
    activityDate: data.get("activityDate"),
  };

  console.log("Form data:", formData);

  const response = await axiosbaseURL.post(
    "/farm/activity/pre-planting",
    formData
  );
  console.log("response for preplanting", response);

  if (
    response.status === 401 ||
    response.status === 404 ||
    response.status === 500 ||
    response.status === 400
  ) {
    console.log(response.data);
    throw json({ message: "Could not save data." });
  }
  toast.success("Pre-planting  data submitted successfully!");
  return redirect("/app/farms");
};
