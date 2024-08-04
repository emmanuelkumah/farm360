import React, { useState } from "react";
import { Button, Label, TextInput, Select, Datepicker } from "flowbite-react";
const PestControl = () => {
  const [pestControl, setPestControl] = useState({
    earlyStageDate: "",
    earlyStageChemical: "",
    rateOfAppEarlyStage: "",
    growingStageDate: "",
    growingStageChemical: "",
    rateAppGrowingStage: "",
    preharvestingDate: "",
    preharvestingChemical: "",
    rateOfAppPreharv: "",
    supervisor: "",
    contact: "",
    certificate: "",
    otherCert: "",
  });

  const handlePestControlDate = (activity, date) => {
    setPestControl({
      ...pestControl,
      [activity]: date.toISOString().split("T")[0],
    });
  };
  const handlePestControlActivities = (e) => {
    const { name, value } = e.target;
    setPestControl({
      ...pestControl,
      [name]: value,
    });
  };
  const onPestControlActivitiesSubmit = (e) => {
    e.preventDefault();
    console.log(pestControl);
  };
  return (
    <div>
      <h2 className="mb-2 text-xl">Plant Protection</h2>
      <form
        className="flex max-w-md flex-col gap-4"
        onSubmit={onPestControlActivitiesSubmit}
      >
        <section>
          <h4>Early Stage of crop</h4>
          <div className="my-2">
            <Label htmlFor="date" className="font-semibold my-2">
              Date
            </Label>
            <Datepicker
              id="date"
              value={pestControl.earlyStageDate}
              name="earlyStageDate"
              maxDate={new Date()}
              placeholder="Select the pest control date"
              onSelectedDateChanged={(date) =>
                handlePestControlDate("earlyStageDate", date)
              }
            />
          </div>
          <div className="my-2">
            <Label htmlFor="chemical" className="font-semibold my-2">
              Name of chemical
            </Label>
            <TextInput
              id="chemical"
              type="text"
              placeholder="Enter the name of chemical"
              name="earlyStageChemical"
              value={pestControl.earlyStageChemical}
              onChange={handlePestControlActivities}
            />
          </div>
          <div className="my-2">
            <Label htmlFor="entry" className="font-semibold my-2">
              Rate of application
            </Label>
            <TextInput
              id="entry"
              type="text"
              placeholder="Enter the rate of application"
              name="rateOfAppEarlyStage"
              onChange={handlePestControlActivities}
              value={pestControl.rateOfAppEarlyStage}
            />
          </div>
        </section>
        <section>
          <h4>Growing Stage of crop</h4>
          <div className="my-2">
            <Label htmlFor="date" className="font-semibold my-2">
              Date
            </Label>
            <Datepicker
              id="date"
              value={pestControl.growingStageDate}
              name="growingStageDate"
              maxDate={new Date()}
              placeholder="Select the pest control date"
              onSelectedDateChanged={(date) =>
                handlePestControlDate("growingStageDate", date)
              }
            />
          </div>
          <div className="my-2">
            <Label htmlFor="chemical" className="font-semibold my-2">
              Name of chemical
            </Label>
            <TextInput
              id="chemical"
              type="text"
              name="growingStageChemical"
              placeholder="Enter the name of chemical"
              value={pestControl.growingStageChemical}
              onChange={handlePestControlActivities}
            />
          </div>
          <div className="my-2">
            <Label htmlFor="entry" className="font-semibold my-2">
              Rate of application
            </Label>
            <TextInput
              id="entry"
              type="text"
              name="rateAppGrowingStage"
              placeholder="Enter the rate of application"
              value={pestControl.rateAppGrowingStage}
              onChange={handlePestControlActivities}
            />
          </div>
        </section>
        <section>
          <h4>Pre-harvesting stage</h4>
          <div className="my-2">
            <Label htmlFor="date" className="font-semibold my-2">
              Date
            </Label>
            <Datepicker
              id="date"
              value={pestControl.preharvestingDate}
              name="preharvestingDate"
              maxDate={new Date()}
              placeholder="Select the pre-harvesting control date"
              onSelectedDateChanged={(date) =>
                handlePestControlDate("preharvestingDate", date)
              }
            />
          </div>
          <div className="my-2">
            <Label htmlFor="chemical" className="font-semibold my-2">
              Name of chemical
            </Label>
            <TextInput
              id="chemical"
              type="text"
              name="preharvestingChemical"
              placeholder="Enter the name of chemical"
              value={pestControl.preharvestingChemical}
              onChange={handlePestControlActivities}
            />
          </div>
          <div className="my-2">
            <Label htmlFor="entry" className="font-semibold my-2">
              Rate of application
            </Label>
            <TextInput
              id="entry"
              type="text"
              name="rateOfAppPreharv"
              value={pestControl.rateOfAppPreharv}
              onChange={handlePestControlActivities}
              placeholder="Enter the rate of application"
            />
          </div>
        </section>
        <section>
          <div>
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
              value={pestControl.supervisor}
              name="supervisor"
              onChange={handlePestControlActivities}
            />
          </div>
          <div>
            <Label
              htmlFor="contact"
              value="Contact of the supervisor"
              className="my-2 font-semibold"
            />
            <TextInput
              type="number"
              required
              placeholder="Enter name of supervisor"
              id="contact"
              name="contact"
              value={pestControl.contact}
              onChange={handlePestControlActivities}
            />
          </div>
          <div>
            <Label
              htmlFor="cert"
              value="Certificate"
              className="my-2 font-semibold"
            />

            <Select
              id="cert"
              required
              onChange={handlePestControlActivities}
              value={pestControl.certificate}
              name="certificate"
            >
              <option>Select certificate of supervisor</option>
              <option value="MOFA">MOFA</option>
              <option value="EPA">EPA</option>
              <option value="PPRSD/NPPO">PPRSD/NPPO</option>
              <option value="Others">Others</option>
            </Select>
          </div>
          {pestControl.certificate === "Others" && (
            <div>
              <Label
                htmlFor="certificate"
                value="Other Certificate"
                className="my-2 font-semibold"
              />
              <TextInput
                type="text"
                required
                placeholder="Enter the certificate of supervisor if not listed above"
                id="certificate"
                name="otherCert"
                value={pestControl.otherCert}
                onChange={handlePestControlActivities}
              />
            </div>
          )}
        </section>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default PestControl;
