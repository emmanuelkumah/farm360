import React from "react";
import { Button, Checkbox, Label, TextInput, Datepicker } from "flowbite-react";

const LandPreparation = () => {
  return (
    <div>
      <section className="flex max-w-md flex-col gap-4">
        <div className="flex flex-col mt-4">
          <Label
            htmlFor="season"
            value="Select the planting season"
            className="mb-2"
          />
          <Datepicker id="season" />;
        </div>
        <div className="flex flex-col">
          <Label
            htmlFor="date"
            value="Select the date land was prepared"
            className="mb-2"
          />
          <Datepicker id="date" />;
        </div>
        <div className="flex flex-col">
          <Label htmlFor="landsize" value="Land size" className="mb-2" />
          <TextInput
            id="landsize"
            type="text"
            required
            placeholder="Enter land size"
          />
        </div>
        <section>
          <h2 className="text-md font-semibold">Activites</h2>
          <p>Select the date the following activities were done</p>
          <div>
            <Label htmlFor="Clearing" className="text-md font-semibold my-2">
              Clearing
            </Label>
            <Datepicker id="Clearing" />
          </div>

          <div className="flex flex-col my-2">
            <Label htmlFor="Ploughing" className="text-md font-semibold my-2">
              Ploughing
            </Label>
            <Datepicker id="Ploughing" />
          </div>

          <div className="flex flex-col my-2">
            <Label htmlFor="harrowing" className="text-md font-semibold my-2">
              Harrowing
            </Label>
            <Datepicker id="harrowing" />
          </div>

          <div className="flex flex-col my-2">
            <Label
              htmlFor="Manual Preparation"
              className="text-md font-semibold my-2"
            >
              Manual Preparation
            </Label>
            <Datepicker id="Manual Preparation" />
          </div>

          <div className="flex flex-col my-2">
            <Label htmlFor="Ridging" className="text-md font-semibold my-2">
              Ridging
            </Label>

            <Datepicker id="Ridging" />
          </div>

          <div className="flex flex-col my-2">
            <Label
              htmlFor="mound Molding"
              className="text-md font-semibold my-2"
            >
              Mound Molding
            </Label>

            <Datepicker id="mound Molding" />
          </div>
        </section>
        <h2 className="text-md font-bold">Spraying Activities</h2>
        <div className="flex flex-col my-2">
          <Label htmlFor="chemical" className="text-md font-semibold my-2">
            Chemical name
          </Label>

          <TextInput
            id="chemical"
            type="text"
            required
            placeholder="Enter the name of chemical used"
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="rate" className="text-md font-semibold my-2">
            Rate of application
          </Label>

          <TextInput
            id="rate"
            type="text"
            required
            placeholder="Enter the rate of application"
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="date-applied" className="text-md font-semibold my-2">
            Date of application
          </Label>
          <Datepicker id="date-applied" />
        </div>
      </section>
    </div>
  );
};

export default LandPreparation;
