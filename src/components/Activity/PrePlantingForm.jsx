import React, { useEffect, useState } from "react";
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

const PrePlantingForm = ({ data, method }) => {
  const [defaultMaterialSource, setDefaultMaterialSource] = useState("BJL");
  const [updatePlantingMaterialSource, setUpdatePlantingMaterialSource] =
    useState("");
  const [defualtTreatmentMethod, setDefaultTreatmentMethod] =
    useState("Chemical");
  const [updateTreatmentMethod, setUpdateTreatmentMethod] = useState("");
  const [hasMaterialSource, setHasMaterialSource] = useState(false);
  const [isTreated, setIsTreated] = useState("yes");
  const [hasTreatmentMethod, setHasTreatmentMethod] = useState(false);
  const [hasOtherQualification, setHasOtherQualification] = useState(false);
  const [activityDate, setActivityDate] = useState("");
  const [defaultSupervisorQualification, setDefaultSupervisorQualification] =
    useState("MOFA");
  const [updateSupervisorQualification, setUpdateSupervisorQualification] =
    useState("");

  const defaultValue = new Date();

  const errors = useActionData();
  const errorMessage = errors?.data;

  useEffect(() => {
    if (data) {
      setUpdatePlantingMaterialSource(data.plantingMaterialSource);
      const converted = treatmentMethodToSentenceCase(
        data.plantingMaterialTreatmentMethod
      );
      setActivityDate(data.activityDate);
      setUpdateTreatmentMethod(converted);
      setUpdateSupervisorQualification(data.supervisorQualification);
    }
  }, []);

  const handleActivityDate = (date) => {
    const formattedDate = date.toISOString();
    setActivityDate(formattedDate);
  };

  const treatmentMethodToSentenceCase = (str) => {
    return str?.charAt(0).toUpperCase() + str?.slice(1).toLowerCase();
  };
  const handleSelectSource = (e) => {
    console.log(e.target.value);
    if (data) {
      setUpdatePlantingMaterialSource(e.target.value);
    }
    if (e.target.value === "Others") {
      setDefaultMaterialSource(e.target.value);

      setHasMaterialSource(!hasMaterialSource);
    } else {
      setDefaultMaterialSource(e.target.value);
      setHasMaterialSource(false);
    }
  };

  const handleSelectTreatmentMethod = (e) => {
    if (data) {
      setUpdateTreatmentMethod(e.target.value);
    }
    if (e.target.value === "Other") {
      setDefaultTreatmentMethod(e.target.value);
      setHasTreatmentMethod(!hasTreatmentMethod);
    } else {
      setDefaultTreatmentMethod(e.target.value);
      setHasTreatmentMethod(hasTreatmentMethod);
    }
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
            <p>{` ${errorMessage.message}`}</p>
          </Alert>
        ) : null}
        <Form method={method} className="w-full">
          <div className="grid grid-cols-1">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col">
                <Label
                  htmlFor="date"
                  value="Select the activity date"
                  className="mb-2"
                />
                <Datepicker
                  id="date"
                  placeholder="Select date"
                  value={activityDate}
                  onSelectedDateChanged={(date) => handleActivityDate(date)}
                  maxDate={defaultValue}
                  name="activityDate"
                  required={true}
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
                      value={
                        updatePlantingMaterialSource
                          ? updatePlantingMaterialSource
                          : defaultMaterialSource
                      }
                      onChange={handleSelectSource}
                    >
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
                    defaultValue={data ? data.plantingMaterial : ""}
                  >
                    <option>Select the planting material</option>
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
                    defaultValue={data ? data.plantingMaterialQuantity : "1"}
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
                    defaultValue={data ? data.plantingMaterialYield : ""}
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
                        value="yes"
                        checked={isTreated === "yes"}
                        onChange={() => setIsTreated("yes")}
                      />
                      <Label htmlFor="yes-treatment">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="no-treatment"
                        name="plantingMaterialIsTreated"
                        value="no"
                        checked={isTreated === "no"}
                        onChange={() => setIsTreated("no")}
                      />
                      <Label htmlFor="no-treatment">No</Label>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
            {isTreated === "yes" && (
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
                    value={
                      updateTreatmentMethod
                        ? updateTreatmentMethod
                        : defualtTreatmentMethod
                    }
                    onChange={handleSelectTreatmentMethod}
                  >
                    <option value="Chemical">Chemical</option>
                    <option value="Hot water">Hot water</option>
                    <option value="Other">Other</option>
                  </Select>
                  {defualtTreatmentMethod === "Other" && (
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
                {defualtTreatmentMethod === "Chemical" && (
                  <section>
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
                          defaultValue={data ? data.chemicalSprayed : ""}
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
                          defaultValue={data ? data.chemicalApplicationRate : 0}
                        />
                      </div>
                    </div>
                    <section>
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
                          defaultValue={data ? data.supervisorName : ""}
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
                          defaultValue={data ? data.supervisorContact : ""}
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
                          value={
                            updateSupervisorQualification
                              ? updateSupervisorQualification
                              : defaultSupervisorQualification
                          }
                          onChange={handleSupervisorQualification}
                        >
                          <option value="MOFA">MOFA</option>
                          <option value="EPA">EPA</option>
                          <option value="PPRSD/NPPO">PPRSD/NPPO</option>
                          <option value="Others">Others</option>
                        </Select>
                        {defaultSupervisorQualification === "Others" && (
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
                    </section>
                  </section>
                )}
              </div>
            )}
            <Button className="bg-main mt-10" type="submit">
              Save PrePlanting Activity
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default PrePlantingForm;

export const action = async ({ request, params }) => {
  const data = await request.formData();

  function fetchPlantingmaterialSource(plantingMaterial) {
    if (plantingMaterial === "Others") {
      return data.get("otherPlantingMaterialSource");
    }
    return data.get("plantingMaterialSource");
  }

  function convertToBoolean(data) {
    if (data === "no") {
      return false;
    }
    return true;
  }

  const formData = verifyFormFields(data, params);
  function verifyFormFields(data) {
    const source = fetchPlantingmaterialSource(
      data.get("plantingMaterialSource")
    );
    const treated = convertToBoolean(data.get("plantingMaterialIsTreated"));

    const supervisorQualification = getSupervisorQualification(
      data.get("supervisorQualification")
    );
    if (data.get("plantingMaterialIsTreated") === "no") {
      return {
        farmId: Number(params.farmId),
        activityDate: data.get("activityDate"),
        plantingMaterial: data.get("plantingMaterial"),
        plantingMaterialYield: Number(data.get("plantingMaterialYield")),
        plantingMaterialQuantity: Number(data.get("plantingMaterialQuantity")),
        plantingMaterialSource: source,
        plantingMaterialIsTreated: treated,
        chemicalApplicationRate: 0,
      };
    }
    //data to submit is treatment method is hot water
    if (data.get("plantingMaterialTreatmentMethod") === "Hot water") {
      return {
        farmId: Number(params.farmId),
        activityDate: data.get("activityDate"),
        plantingMaterial: data.get("plantingMaterial"),
        plantingMaterialYield: Number(data.get("plantingMaterialYield")),
        plantingMaterialQuantity: Number(data.get("plantingMaterialQuantity")),
        plantingMaterialSource: source,
        plantingMaterialIsTreated: treated,
        plantingMaterialTreatmentMethod: data.get(
          "plantingMaterialTreatmentMethod"
        ),
        chemicalApplicationRate: 0,
      };
    }

    return {
      farmId: Number(params.farmId),
      chemicalApplicationRate: Number(data.get("chemicalApplicationRate")),
      ChemicalSprayed: data.get("ChemicalSprayed"),
      plantingMaterial: data.get("plantingMaterial"),
      plantingMaterialYield: Number(data.get("plantingMaterialYield")),
      plantingMaterialQuantity: Number(data.get("plantingMaterialQuantity")),
      plantingMaterialSource: source,
      plantingMaterialIsTreated: treated,
      plantingMaterialTreatmentMethod: data.get(
        "plantingMaterialTreatmentMethod"
      ),

      supervisorName: data.get("supervisorName"),
      supervisorContact: data.get("supervisorContact"),
      supervisorQualification: supervisorQualification,
      activityDate: data.get("activityDate"),
    };
  }
  function getSupervisorQualification(qualification) {
    if (qualification === "Others") {
      return data.get("OtherSupervisorQualification");
    }
    return data.get("supervisorQualification");
  }
  const method = request.method;
  const activityId = params.activityId;

  if (method === "PUT") {
    try {
      const response = await axiosbaseURL.put(
        `/farm/activity/pre-planting/${activityId}`,
        formData
      );
      toast.success("Pre planting  data updated successfully!");
      return redirect("/app/farms");
    } catch (error) {
      console.log(error.response);
    }
  }

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
