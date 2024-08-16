import React, { useState, useEffect } from "react";
import {
  Label,
  TextInput,
  Datepicker,
  Select,
  Radio,
  Button,
} from "flowbite-react";

import { useParams, Form } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { farmsData } from "../../data/dummyData";
import { createPrePlantingActivities } from "../../data/dummyData";

const PrePlanting = () => {
  const { farmId } = useParams();
  const defaultValue = new Date();

  const [farmDetails, setFarmDetails] = useState({});
  const [hasSource, setSource] = useState(false);
  const [hasTreatmentMethod, setHasTreatmentMethod] = useState(false);
  const [preparationDates, setPreparationDates] = useState({
    preparationDate: "",
    landSize: "",
    clearing: "",
    ploughing: "",
    harrowing: "",
    manualPrep: "",
    ridging: "",
    moundMolding: "",
  });
  const [sprayingActivities, setSprayingActivities] = useState({
    chemicalName: "",
    rateOfApplication: "",
    dateofApplication: "",
  });
  useEffect(() => {
    //coonect to farm api and get farm details
    const farm = getFarmOwner(farmId);
    // console.log(farm);
    setFarmDetails(farm);
  }, []);
  const getFarmOwner = (farmId) => {
    return farmsData.find((farm) => farm.id === farmId);
  };

  const showFarmOwner = () => {
    if (farmDetails.owner !== "") {
      return `${farmDetails.owner}'s farm`;
    } else {
      return "the farm";
    }
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
  // const [plantingMaterial, setPlantingMaterial] = useState({
  //   plantPart: "",
  //   source: "",
  //   otherSource: "",
  //   quantity: "",
  //   yield: "",
  //   treatmentMethod: "",
  //   chemicalUsed: "",
  //   isTreated: "",
  // });

  // const onPreplantingActivitiesSubmit = (e) => {
  //   e.preventDefault();
  //   const prePlantingActivities = {
  //     farmId: farmId,
  //     ...preparationDates,
  //     ...sprayingActivities,
  //     ...plantingMaterial,
  //   };
  //   //dispatch Activity
  //   dispatchActivity({
  //     type: "ADD_PrePlantingActivity",
  //     payload: prePlantingActivities,
  //   });
  //   //clear fields
  //   setPreparationDates({
  //     preparationDate: "",
  //     landSize: "",
  //     clearing: "",
  //     ploughing: "",
  //     harrowing: "",
  //     manualPrep: "",
  //     ridging: "",
  //     moundMolding: "",
  //   });
  //   setPlantingMaterial({
  //     plantPart: "",
  //     source: "",
  //     otherSource: "",
  //     quantity: "",
  //     yield: "",
  //     isPlantPartTreated: "",
  //     treatmentMethod: "",
  //     chemicalUsed: "",
  //     isTreated: "",
  //   });
  //   setSprayingActivities({
  //     chemicalName: "",
  //     rateOfApplication: "",
  //     dateofApplication: "",
  //   });
  //   toast.success("Pre-Planting activities submitted successfully!");
  // };

  return (
    <>
      <div className="m-10">
        <div>
          <h3 className="text-xl mt-[20%] md:mt-10">
            Record Pre Planting Activities on {showFarmOwner()}
          </h3>
          <Form method="post" action="../../app/preplanting">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex max-w-md flex-col gap-4">
                <div className="flex flex-col">
                  <Label
                    htmlFor="date"
                    value="Select the date land was prepared"
                    className="mb-2"
                  />
                  <Datepicker
                    id="date"
                    placeholder="Select date"
                    defaultValue={defaultValue}
                    maxDate={defaultValue}
                    name="preparedDate"
                  />
                </div>
                <div className="flex flex-col">
                  <Label
                    htmlFor="landsize"
                    value="Land size"
                    className="mb-2"
                  />
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
                    <Label
                      htmlFor="Clearing"
                      className="text-md font-semibold my-2"
                    >
                      Clearing
                    </Label>
                    <Datepicker
                      id="Clearing"
                      placeholder="Select clearing date"
                      defaultValue={defaultValue}
                      maxDate={defaultValue}
                      name="clearingDate"
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
                    />
                  </div>
                  <div className="flex flex-col my-2">
                    <Label
                      htmlFor="mound"
                      className="text-md font-semibold my-2"
                    >
                      Mound molding
                    </Label>
                    <Datepicker
                      id="mound"
                      defaultValue={defaultValue}
                      maxDate={defaultValue}
                      name="moundDate"
                    />
                  </div>
                </section>
              </div>
              <div className="flex max-w-md flex-col gap-4">
                <h3 className="text-xl">Spraying Activities</h3>

                <div className="flex flex-col">
                  <Label htmlFor="chemical" value="chemical" className="mb-2" />
                  <TextInput
                    id="landsize"
                    type="text"
                    name="chemicalUsed"
                    required
                    placeholder="Enter chemical name "
                    defaultValue=""
                  />
                </div>
                <div className="flex flex-col">
                  <Label
                    htmlFor="rate"
                    value="Rate of chemical application"
                    className="mb-2"
                  />
                  <TextInput
                    id="rate"
                    type="text"
                    name="rateOfApplication"
                    required
                    placeholder="Enter rate of chemical application "
                    defaultValue=""
                  />
                </div>
                <div>
                  <Label
                    htmlFor="dateOfapplication"
                    className="text-md font-semibold my-2"
                  >
                    Date of chemical application
                  </Label>
                  <Datepicker
                    id="dateOfapplication"
                    defaultValue={defaultValue}
                    maxDate={defaultValue}
                    name="dateofchemicalapplication"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <Label
                    htmlFor="planting"
                    value="Select planting material"
                    className="my-2 font-semibold"
                  />
                  <Select
                    id="planting"
                    required
                    name="plantPart"
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
                <div className="flex flex-col">
                  <Label
                    htmlFor="source"
                    value="Source of planting material"
                    className="my-2 font-semibold"
                  />

                  <Select
                    id="source"
                    name="source"
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
                      name="otherSource"
                      defaultValue=""
                      placeholder="Enter where you got the source from"
                    />
                  </div>
                )}

                <div>
                  <Label
                    htmlFor="quantity"
                    value="Quantity of planting material"
                    className="my-2 font-semibold"
                  />
                  <TextInput
                    id="quantity"
                    type="number"
                    min="1"
                    name="quantity"
                    defaultValue="1"
                    placeholder="Enter quantity"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="yield"
                    value="Yield of planting material per acre"
                    className="mb-2 font-semibold"
                  />
                  <TextInput
                    id="yield"
                    type="number"
                    min="1"
                    name="yield"
                    placeholder="Enter yield"
                  />
                </div>
                <div>
                  <fieldset className="flex max-w-md flex-col gap-4">
                    <legend className="my-2 font-semibold">
                      Was planting material treated?
                    </legend>
                    <div className="flex items-center gap-2">
                      <Radio id="yes-treatment" name="isTreated" value="Yes" />
                      <Label htmlFor="yes-treatment">Yes</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio id="no-treatment" name="isTreated" value="No" />
                      <Label htmlFor="no-treatment">No</Label>
                    </div>
                  </fieldset>
                </div>
                <div>
                  <Label
                    className="mb-2 font-semibold"
                    htmlFor="method"
                    value="Treatment method"
                  />
                  <Select
                    id="method"
                    required
                    name="treatmentMethod"
                    onChange={handleSelectTreatment}
                    defaultValue=""
                  >
                    <option>Select treatment method</option>
                    <option value="chemical">Chemical</option>
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
                        name="otherTreatmentmethod"
                        placeholder="Enter the other treatment method or chemical used"
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

          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default PrePlanting;

export const action = async ({ request }) => {
  const data = await request.formData();

  const preplantingActivitiesData = {
    preparedDate: data.get("preparedDate"),
    landSize: data.get("landSize"),
    clearingDate: data.get("clearingDate"),
    ploughingDate: data.get("ploughingDate"),
    harrowingDate: data.get("harrowingDate"),
    manualpreparationDate: data.get("manualpreparationDate"),
    ridgingDate: data.get("ridgingDate"),
    moundDate: data.get("moundDate"),
    chemicalUsed: data.get("chemicalUsed"),
    rateOfApplication: data.get("rateOfApplication"),
    dateofchemicalapplication: data.get("dateofchemicalapplication"),
    plantPart: data.get("plantPart"),
    source: data.get("source"),
    otherSource: data.get("otherSource"),
    treatmentMethod: data.get("treatmentMethod"),
    otherTreatmentmethod: data.get("otherTreatmentmethod"),
    quantity: data.get("quantity"),
    yield: data.get("yield"),
    isTreated: data.get("isTreated"),
  };
  //connect to the database to save data
  //createPlantingActivities(preplantingActivitiesData);
  createPrePlantingActivities(preplantingActivitiesData);
  return null;
};
