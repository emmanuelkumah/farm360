import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Datepicker,
  Select,
  Radio,
} from "flowbite-react";
const PlantingMaterial = ({ onCapturePlantingMaterial }) => {
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

  const handlePlantingMaterialChange = (e) => {
    const { name, value } = e.target;
    setPlantingMaterial({ ...plantingMaterial, [name]: value });
  };
  onCapturePlantingMaterial(plantingMaterial);
  return (
    <div>
      <section className="flex max-w-md flex-col gap-4">
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
            value={plantingMaterial.plantPart}
            onChange={handlePlantingMaterialChange}
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
            value={plantingMaterial.source}
            onChange={handlePlantingMaterialChange}
            required
          >
            <option value="Local inputs dealer">Local inputs dealer</option>
            <option value="MOFA">MOFA</option>
            <option value="BJL">BJL</option>
            <option value="Own field">Own field</option>
            <option value="Imported">Imported</option>
            <option value="Others">Others</option>
          </Select>
        </div>
        {plantingMaterial.source === "Others" && (
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
              value={plantingMaterial.otherSource}
              placeholder="Enter where you got the source from"
              onChange={handlePlantingMaterialChange}
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
            placeholder="Enter quantity"
            value={plantingMaterial.quantity}
            onChange={handlePlantingMaterialChange}
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
            value={plantingMaterial.yield}
            onChange={handlePlantingMaterialChange}
          />
        </div>
        <div>
          <fieldset className="flex max-w-md flex-col gap-4">
            <legend className="my-2 font-semibold">
              Was planting material treated?
            </legend>
            <div className="flex items-center gap-2">
              <Radio
                id="yes-treatment"
                name="isTreated"
                value="Yes"
                onChange={handlePlantingMaterialChange}
                defaultChecked
              />
              <Label htmlFor="yes-treatment">Yes</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio
                id="no-treatment"
                name="isTreated"
                value="No"
                onChange={handlePlantingMaterialChange}
              />
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
            value={plantingMaterial.treatmentMethod}
            onChange={handlePlantingMaterialChange}
          >
            <option value="chemical">Chemical</option>
            <option value="hot water">Hot water</option>
            <option value="other">Other</option>
          </Select>
        </div>
        {(plantingMaterial.treatmentMethod === "chemical" ||
          plantingMaterial.treatmentMethod === "other") && (
          <div>
            <Label
              className="mb-2 font-semibold"
              htmlFor="other"
              value="Other treatment method or chemical used"
            />
            <TextInput
              id="other"
              type="text"
              required
              name="chemicalUsed"
              onChange={handlePlantingMaterialChange}
              placeholder="Enter the other treatment method or chemical used"
            />
          </div>
        )}
        <Button className="max-w-md" type="submit">
          Save Pre-Planting Activities
        </Button>
      </section>
    </div>
  );
};

export default PlantingMaterial;
