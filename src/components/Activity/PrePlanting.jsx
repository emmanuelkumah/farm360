import React from "react";
import LandPreparation from "./LandPreparation";
import PlantingMaterial from "./PlantingMaterial";
import { Button } from "flowbite-react";

const PrePlanting = () => {
  let allPrePlantingData;
  let allPlantingMaterialData;
  let prePlantingData = {};
  const getLandPreprationData = (landPrep) => {
    allPrePlantingData = landPrep;
  };

  const getPlantingMaterialData = (plantingMat) => {
    allPlantingMaterialData = plantingMat;
  };
  const handlePrePlantingSubmit = (e) => {
    e.preventDefault();

    const data = { ...allPlantingMaterialData, ...allPrePlantingData };
    console.log(data);
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
            <LandPreparation onCaptureLandPreparation={getLandPreprationData} />
            <PlantingMaterial
              onCapturePlantingMaterial={getPlantingMaterialData}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default PrePlanting;
