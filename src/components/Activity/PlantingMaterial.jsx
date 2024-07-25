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
const PlantingMaterial = () => {
  return (
    <div>
      <section className="flex max-w-md flex-col gap-4">
        <div className="flex flex-col mt-4">
          <Label
            htmlFor="planting"
            value="Select planting material"
            className="my-2 font-semibold"
          />
          <Select id="planting" required>
            <option value="">Select planting material</option>
            <option>Seed</option>
            <option>Sucker</option>
            <option>Seedlings</option>
            <option>Tuber</option>
            <option>Stem</option>
            <option>Rhizome</option>
            <option>Bulbs</option>
          </Select>
        </div>
        <div className="flex flex-col">
          <Label
            htmlFor="planting"
            value="Source of planting material"
            className="my-2 font-semibold"
          />

          <Select id="planting" required>
            <option>Local inputs dealer</option>
            <option>MOFA</option>
            <option>BJL</option>
            <option>Own field</option>
            <option>Imported</option>
            <option>Others</option>
          </Select>
        </div>
        <div className="flex flex-col">
          <Label
            htmlFor="seed"
            value="Other Source"
            className="my-2 font-semibold"
          />
          <TextInput
            id="seed"
            type="text"
            placeholder="Enter where you got the source from"
            helperText={
              <>
                Enter the name of the company or individual you got the planting
                material from
              </>
            }
          />
        </div>
        <div>
          <Label
            htmlFor="quantity"
            value="Quantity of planting material"
            className="my-2 font-semibold"
          />
          <TextInput id="quantity" type="number" />
        </div>

        <div>
          <Label
            htmlFor="yield"
            value="Yield of planting material per acre"
            className="mb-2 font-semibold"
          />
          <TextInput id="yield" type="number" />
        </div>
        <div>
          <fieldset className="flex max-w-md flex-col gap-4">
            <legend className="my-2 font-semibold">
              Was planting material treated?
            </legend>
            <div className="flex items-center gap-2">
              <Radio
                id="yes-treatment"
                name="treatment"
                value="Yes"
                defaultChecked
              />
              <Label htmlFor="yes-treatment">Yes</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="no-treatment" name="treatment" value="No" />
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
          <Select id="method" required>
            <option>Chemical</option>
            <option>Hot water</option>
            <option>Other</option>
          </Select>
        </div>
        <div>
          <Label
            className="mb-2 font-semibold"
            htmlFor="other"
            value="Chemical name"
          />
          <TextInput
            id="other"
            type="text"
            placeholder="Chemical used"
            helperText={<>Enter the other treatment method or chemical used</>}
          />
        </div>
      </section>
    </div>
  );
};

export default PlantingMaterial;
