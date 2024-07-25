import React from "react";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Datepicker,
  Select,
  Radio,
} from "flowbite-react";
import LandPreparation from "./LandPreparation";
import PlantingMaterial from "./PlantingMaterial";

const PrePlanting = () => {
  const handlePrePlantingSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
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
            <LandPreparation />
            <PlantingMaterial />
            <Button className="max-w-md" type="submit">
              Save Activity
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PrePlanting;
