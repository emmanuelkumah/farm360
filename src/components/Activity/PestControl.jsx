import React, { useState } from "react";
import { Button, Label, TextInput, Select, Datepicker } from "flowbite-react";
const PestControl = () => {
  const [pestControl, setPestControl] = useState({
    date: "",
    chemical: "",
    rate: "",
    growingStageDate: "",
    chemicalUsed: "",
    rateAppOfChem: "",
    preharvestingDate: "",
    preharvestingChemical: "",
    supervisor: "",
    contact: "",
    certificate: "",
    anycert: "",
  });

  const handlePestControlDate = () => {
    setPestControl({
      ...pestControl,
      date: date.toISOString().split("T")[0],
    });
  };
  const handlePestActivities = (e) => {
    const { name, value } = e.target;
    setPestControl({
      ...pest,
      [name]: value,
    });
  };
  return (
    <div>
      <h2 className="mb-2 text-xl">Plant Protection</h2>
      <form className="flex max-w-md flex-col gap-4">
        <section>
          <h4>Early Stage of crop</h4>
          <div className="my-2">
            <Label htmlFor="date" className="font-semibold my-2">
              Date
            </Label>
            <Datepicker
              id="date"
              value={pestControl.date}
              onSelectedDateChanged={handlePestControlDate}
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
              name="chemical"
              value={pestControl.chemical}
              onChange={handlePestActivities}
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
              name="rate"
              onChange={handlePestActivities}
              value={pestControl.rate}
            />
          </div>
        </section>
        <section>
          <h4>Growing Stage of crop</h4>
          <div className="my-2">
            <Label htmlFor="date" className="font-semibold my-2">
              Date
            </Label>
            <Datepicker id="date" />
          </div>
          <div className="my-2">
            <Label htmlFor="chemical" className="font-semibold my-2">
              Name of chemical
            </Label>
            <TextInput
              id="chemical"
              type="text"
              placeholder="Enter the name of chemical"
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
            />
          </div>
        </section>
        <section>
          <h4>Pre-harvesting stage</h4>
          <div className="my-2">
            <Label htmlFor="date" className="font-semibold my-2">
              Date
            </Label>
            <Datepicker id="date" />
          </div>
          <div className="my-2">
            <Label htmlFor="chemical" className="font-semibold my-2">
              Name of chemical
            </Label>
            <TextInput
              id="chemical"
              type="text"
              placeholder="Enter the name of chemical"
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
            />
          </div>
          <div>
            <Label
              htmlFor="cert"
              value="Certificate"
              className="my-2 font-semibold"
            />

            <Select id="cert" required>
              <option>Select certificate of supervisor</option>
              <option>MOFA</option>
              <option>EPA</option>
              <option>PPRSD/NPPO</option>
              <option>Others</option>
            </Select>
          </div>
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
            />
          </div>
        </section>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default PestControl;
