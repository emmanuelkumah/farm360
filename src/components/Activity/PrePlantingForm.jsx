import React, { useState } from "react";
import {
  Label,
  TextInput,
  Datepicker,
  Select,
  Radio,
  Button,
  Alert,
} from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

import { Form, redirect, useActionData } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosbaseURL } from "../../api/axios";
import BackButton from "../BackButton";
import ActivityHeading from "../ActivityHeading";

const PrePlantingForm = () => {
  const [materialSource, setMaterialSource] = useState("");
  const [hasMaterialSource, setHasMaterialSource] = useState(false);
  const [hasTreatmentMethod, setHasTreatmentMethod] = useState(false);
  const [hasOtherQualification, setHasOtherQualification] = useState(false);
  const [qualification, setQualification] = useState("");
  const [treatmentMethod, setTreatmentMethod] = useState("");
  const [activityDate, setActivityDate] = useState("");
  const defaultValue = new Date();

  const errors = useActionData();
  const errorMessage = errors?.data;

  const handleActivityDate = (date) => {
    const formattedDate = date.toISOString();
    setActivityDate(formattedDate);
  };

  const handleSelectSource = (e) => {
    setMaterialSource(e.target.value);
    if (e.target.value === "Others") {
      setHasMaterialSource(!hasMaterialSource);
    } else {
      setHasMaterialSource(false);
    }
  };

  const handleSelectTreatment = (e) => {
    setTreatmentMethod(e.target.value);

    if (e.target.value === "Other") {
      setHasTreatmentMethod(!hasTreatmentMethod);
    } else {
      setHasTreatmentMethod(false);
    }
  };

  const handleSupervisorQualification = (e) => {
    setQualification(e.target.value);
    if (e.target.value === "Others") {
      setHasOtherQualification(!hasOtherQualification);
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <BackButton />
        <ActivityHeading activityHeading="Key Data Entries For Pre-Planting" />
        {errors ? (
          <Alert
            color="failure"
            icon={HiInformationCircle}
            className="max-w-2xl"
          >
            <span className="font-medium">Info alert!</span>
            <p>{`${errorMessage.code} - ${errorMessage.message}`}</p>
          </Alert>
        ) : null}
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
                      value={materialSource}
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
                  {hasMaterialSource && (
                    <div className="flex flex-col">
                      <Label
                        htmlFor="seed"
                        value="Other Source"
                        className="my-2 font-semibold"
                      />
                      <TextInput
                        id="seed"
                        type="text"
                        name="otherPlantingMaterialSource"
                        defaultValue=""
                        placeholder="Enter where you got the source from"
                      />
                    </div>
                  )}
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
                        defaultValue="true"
                      />
                      <Label htmlFor="yes-treatment">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="no-treatment"
                        name="plantingMaterialIsTreated"
                        defaultValue="false"
                      />
                      <Label htmlFor="no-treatment">No</Label>
                    </div>
                  </fieldset>
                </div>
              </div>
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
                  value={treatmentMethod}
                  onChange={handleSelectTreatment}
                >
                  <option>Select treatment method</option>
                  <option value="Chemical">Chemical</option>
                  <option value="Hot water">Hot water</option>
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
                      name="plantingMaterialTreatmentMethodOther"
                      placeholder="Enter the other treatment method or chemical used"
                    />
                  </div>
                )}
              </div>
              <div className="my-4">
                <div>
                  <Label
                    htmlFor="chemical"
                    value="Name of chemical"
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
                    value="Rate of chemical application(ml)"
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
                  value="Supervisor Contact"
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
                  value={qualification}
                  onChange={handleSupervisorQualification}
                >
                  <option>Select certificate of supervisor</option>
                  <option value="MOFA">MOFA</option>
                  <option value="EPA">EPA</option>
                  <option value="PPRSD/NPPO">PPRSD/NPPO</option>
                  <option value="Others">Others</option>
                </Select>
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

  function strToBoolean(isTreated) {
    if (isTreated === "false") {
      return false;
    }
    return true;
  }

  const treated = strToBoolean(data.get("plantingMaterialIsTreated"));

  const treatmentMethod = getOtherTreatmentmethod(
    data.get("plantingMaterialTreatmentMethod")
  );
  function getOtherTreatmentmethod(treatment) {
    if (treatment === "Other") {
      return data.get("plantingMaterialTreatmentMethodOther");
    }
    return data.get("plantingMaterialTreatmentMethod");
  }

  function getOtherPlantingmaterialSource(plantingMaterial) {
    if (plantingMaterial === "Others") {
      return data.get("otherPlantingMaterialSource");
    }
    return data.get("plantingMaterialSource");
  }
  const plantingSource = getOtherPlantingmaterialSource(
    data.get("plantingMaterialSource")
  );
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
    chemicalApplicationRate: Number(data.get("chemicalApplicationRate")),
    ChemicalSprayed: data.get("ChemicalSprayed"),
    plantingMaterial: data.get("plantingMaterial"),
    plantingMaterialYield: Number(data.get("plantingMaterialYield")),
    plantingMaterialQuantity: Number(data.get("plantingMaterialQuantity")),
    plantingMaterialSource: plantingSource,
    plantingMaterialTreatmentMethod: treatmentMethod,

    plantingMaterialIsTreated: treated,
    supervisorName: data.get("supervisorName"),
    supervisorContact: data.get("supervisorContact"),
    supervisorQualification: supervisorQualification,
    activityDate: data.get("activityDate"),
  };

  try {
    const response = await axiosbaseURL.post(
      "/farm/activity/pre-planting",
      formData
    );
    toast.success("Pre planting  data submitted successfully!");
    return redirect("/app/farms");
  } catch (error) {
    return error.response;
  }
};
