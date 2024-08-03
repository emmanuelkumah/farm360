import React, { useState } from "react";
import LandPreparation from "./LandPreparation";
import PlantingMaterial from "./PlantingMaterial";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrePlanting = () => {
  const { farmId } = useParams();
  const [preparationDates, setPreparationDates] = useState({
    season: "",
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
  const [plantingMaterial, setPlantingMaterial] = useState({
    plantPart: "",
    source: "",
    otherSource: "",
    quantity: "",
    yield: "",
    isPlantPartTreated: "",
    treatmentMethod: "",
    chemicalUsed: "",
    isTreated: "",
  });

  const handlePrePlantingSubmit = (e) => {
    e.preventDefault();
    const allPrePlanting = {
      farmId: farmId,
      ...preparationDates,
      ...sprayingActivities,
      ...plantingMaterial,
    };
    console.log(allPrePlanting);
    //clear fields
    setPreparationDates({
      season: "",
      preparationDate: "",
      landSize: "",
      clearing: "",
      ploughing: "",
      harrowing: "",
      manualPrep: "",
      ridging: "",
      moundMolding: "",
    });
    setPlantingMaterial({
      plantPart: "",
      source: "",
      otherSource: "",
      quantity: "",
      yield: "",
      isPlantPartTreated: "",
      treatmentMethod: "",
      chemicalUsed: "",
      isTreated: "",
    });
    setSprayingActivities({
      chemicalName: "",
      rateOfApplication: "",
      dateofApplication: "",
    });
    toast.success("Pre-Planting activities submitted successfully!");
  };

  return (
    <>
      <div className="m-10">
        <div>
          <h3 className="text-xl mt-[20%] md:mt-10">
            Record Pre Planting Activities
          </h3>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={handlePrePlantingSubmit}
          >
            <LandPreparation
              preparationDates={preparationDates}
              setPreparationDates={setPreparationDates}
              sprayingActivities={sprayingActivities}
              setSprayingActivities={setSprayingActivities}
            />
            <PlantingMaterial
              plantingMaterial={plantingMaterial}
              setPlantingMaterial={setPlantingMaterial}
            />
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default PrePlanting;
