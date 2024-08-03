import React, { useState } from "react";
import { Label, TextInput, Datepicker, Button } from "flowbite-react";

const LandPreparation = ({
  preparationDates,
  setPreparationDates,
  sprayingActivities,
  setSprayingActivities,
}) => {
  // const [preparationDates, setPreparationDates] = useState({
  //   season: "",
  //   preparationDate: "",
  //   landSize: "",
  //   clearing: "",
  //   ploughing: "",
  //   harrowing: "",
  //   manualPrep: "",
  //   ridging: "",
  //   moundMolding: "",
  // });
  // const [sprayingActivities, setSprayingActivities] = useState({
  //   chemicalName: "",
  //   rateOfApplication: "",
  //   dateofApplication: "",
  // });

  const handlePreplantingDateChange = (activity, date) => {
    setPreparationDates({
      ...preparationDates,
      [activity]: date.toISOString().split("T")[0],
    });
  };
  const handleSprayingActivities = (e) => {
    const { name, value } = e.target;

    setSprayingActivities({ ...sprayingActivities, [name]: value });
  };

  return (
    <div>
      <section className="flex max-w-md flex-col gap-4">
        <div className="flex flex-col mt-4">
          <Label
            htmlFor="season"
            value="Select the planting season"
            className="mb-2"
          />
          <Datepicker
            id="season"
            value={preparationDates.season}
            placeholder="Select season"
            maxDate={new Date()}
            onSelectedDateChanged={(date) =>
              handlePreplantingDateChange("season", date)
            }
          />
        </div>
        <div className="flex flex-col">
          <Label
            htmlFor="date"
            value="Select the date land was prepared"
            className="mb-2"
          />
          <Datepicker
            id="date"
            placeholder="Select date"
            value={preparationDates.preparationDate}
            maxDate={new Date()}
            onSelectedDateChanged={(date) =>
              handlePreplantingDateChange("preparationDate", date)
            }
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="landsize" value="Land size" className="mb-2" />
          <TextInput
            id="landsize"
            type="number"
            min={1}
            required
            value={preparationDates.landSize}
            placeholder="Enter land size"
            onChange={(e) =>
              setPreparationDates({
                ...preparationDates,
                landSize: e.target.value,
              })
            }
          />
        </div>
        <section>
          <h2 className="text-md font-semibold">Activites</h2>
          <p>Select the date the following activities were done</p>
          <div>
            <Label htmlFor="Clearing" className="text-md font-semibold my-2">
              Clearing
            </Label>
            <Datepicker
              id="Clearing"
              value={preparationDates.clearing}
              placeholder="Select clearing date"
              maxDate={new Date()}
              onSelectedDateChanged={(date) =>
                handlePreplantingDateChange("clearing", date)
              }
            />
          </div>

          <div className="flex flex-col my-2">
            <Label htmlFor="Ploughing" className="text-md font-semibold my-2">
              Ploughing
            </Label>
            <Datepicker
              id="Ploughing"
              value={preparationDates.ploughing}
              placeholder="Select ploughing date"
              maxDate={new Date()}
              onSelectedDateChanged={(date) =>
                handlePreplantingDateChange("ploughing", date)
              }
            />
          </div>

          <div className="flex flex-col my-2">
            <Label htmlFor="harrowing" className="text-md font-semibold my-2">
              Harrowing
            </Label>
            <Datepicker
              id="harrowing"
              value={preparationDates.harrowing}
              placeholder="Select harrowing date"
              maxDate={new Date()}
              onSelectedDateChanged={(date) =>
                handlePreplantingDateChange("harrowing", date)
              }
            />
          </div>

          <div className="flex flex-col my-2">
            <Label
              htmlFor="Manual Preparation"
              className="text-md font-semibold my-2"
            >
              Manual Preparation
            </Label>
            <Datepicker
              id="Manual Preparation"
              value={preparationDates.manualPrep}
              placeholder="Select manual preparation date"
              maxDate={new Date()}
              onSelectedDateChanged={(date) =>
                handlePreplantingDateChange("manualPrep", date)
              }
            />
          </div>

          <div className="flex flex-col my-2">
            <Label htmlFor="Ridging" className="text-md font-semibold my-2">
              Ridging
            </Label>

            <Datepicker
              id="Ridging"
              value={preparationDates.ridging}
              placeholder="Select ridging date"
              maxDate={new Date()}
              onSelectedDateChanged={(date) =>
                handlePreplantingDateChange("ridging", date)
              }
            />
          </div>

          <div className="flex flex-col my-2">
            <Label
              htmlFor="mound Molding"
              className="text-md font-semibold my-2"
            >
              Mound Molding
            </Label>

            <Datepicker
              id="mound Molding"
              value={preparationDates.moundMolding}
              placeholder="Select mound molding  date"
              maxDate={new Date()}
              onSelectedDateChanged={(date) =>
                handlePreplantingDateChange("moundMolding", date)
              }
            />
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
            name="chemicalName"
            required
            placeholder="Enter the name of chemical used"
            value={sprayingActivities.chemicalName}
            onChange={handleSprayingActivities}
          />
        </div>
        <div className="flex flex-col">
          <Label htmlFor="rate" className="text-md font-semibold my-2">
            Rate of application
          </Label>

          <TextInput
            id="rate"
            type="number"
            name="rateOfApplication"
            min={1}
            value={sprayingActivities.rateOfApplication}
            required
            placeholder="Enter the rate of application"
            onChange={handleSprayingActivities}
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="date-applied" className="text-md font-semibold my-2">
            Date of application
          </Label>
          <Datepicker
            id="date-applied"
            placeholder="Select date of application"
            value={sprayingActivities.dateofApplication}
            maxDate={new Date()}
            onSelectedDateChanged={(date) =>
              setSprayingActivities({
                ...sprayingActivities,
                dateofApplication: date.toISOString().split("T")[0],
              })
            }
          />
        </div>
      </section>
    </div>
  );
};

export default LandPreparation;
