import React, { useState } from "react";
import { Button, Select, Label, TextInput, Datepicker } from "flowbite-react";

const FertilizerApplication = () => {
  const [fertApplication, setFertApplication] = useState({
    date: "",
    type: "",
    method: "",
    rateInMl: "",
    ratePerBag: "",
    otherFert: "",
    supervisor: "",
    contact: "",
    certificate: "",
    otherCert: "",
  });
  const handleFertApplicationDate = (date) => {
    setFertApplication({
      ...fertApplication,
      date: date.toISOString().split("T")[0],
    });
  };
  const handleFertilizerActivities = (e) => {
    const { name, value } = e.target;
    setFertApplication({
      ...fertApplication,
      [name]: value,
    });
  };
  const onFertilizerActivitiesSubmit = (e) => {
    e.preventDefault();
    console.log(fertApplication);
    setFertApplication({
      date: "",
      type: "",
      name: "",
      method: "",
      rateInMl: "",
      ratePerBag: "",
      otherFert: "",
      supervisor: "",
      contact: "",
      certificate: "",
      otherCert: "",
    });
  };
  return (
    <div>
      <h2 className="mb-2 text-xl">Fertilizer Application</h2>
      <form
        className="flex max-w-md flex-col gap-4"
        onSubmit={onFertilizerActivitiesSubmit}
      >
        <div>
          <Label htmlFor="date" className="font-semibold my-2">
            Date of application
          </Label>
          <Datepicker
            id="date"
            value={fertApplication.date}
            placeholder="Select date of fertilizer application"
            name="date"
            maxDate={new Date()}
            onSelectedDateChanged={(date) => handleFertApplicationDate(date)}
          />
        </div>

        <div>
          <Label
            htmlFor="method"
            value="Type of application"
            className="my-2 font-semibold"
          />

          <Select
            id="method"
            required
            name="type"
            value={fertApplication.type}
            onChange={handleFertilizerActivities}
          >
            <option>Select the type of application</option>
            <option value="liquid">Liquid</option>
            <option value="organic">Organic</option>
            <option value="inorganic">Inorganic</option>
          </Select>
        </div>
        <div>
          <Label
            htmlFor="chemical"
            value="Name of fertilizer"
            className="my-2 font-semibold"
          />
          <Select
            id="method"
            required
            value={fertApplication.method}
            name="method"
            onChange={handleFertilizerActivities}
          >
            <option>Select fertilizer</option>
            <option value="Manure">Manure</option>
            <option value="Compost">Compost</option>
            <option value="NPK">NPK</option>
            <option value="Urea">Urea</option>
            <option value="SOA">SOA</option>
            <option value="Others">Others</option>
          </Select>
        </div>
        {fertApplication.method === "Others" && (
          <div>
            <Label
              htmlFor="others"
              value="Others(Specify)"
              className="my-2 font-semibold"
            />
            <TextInput
              type="text"
              placeholder="Enter name of fertilizer"
              id="others"
              name="others"
              value={fertApplication.otherFert}
              onChange={handleFertilizerActivities}
            />
          </div>
        )}

        <div>
          <Label
            htmlFor="rate-apply"
            value="Rate of application(ml per acre)"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            placeholder="Enter the rate of application"
            id="rate-apply"
            name="rateInMl"
            value={fertApplication.rateInMl}
            onChange={handleFertilizerActivities}
          />
        </div>
        <div>
          <Label
            htmlFor="rate-apply2"
            value="Rate of application(bag per acre)"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            placeholder="Enter the rate of application"
            id="rate-apply2"
            name="ratePerBag"
            value={fertApplication.ratePerBag}
            onChange={handleFertilizerActivities}
          />
        </div>
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
            name="supervisor"
            value={fertApplication.supervisor}
            onChange={handleFertilizerActivities}
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
            placeholder="Enter contact of supervisor"
            id="contact"
            name="contact"
            value={fertApplication.contact}
            onChange={handleFertilizerActivities}
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
            value={fertApplication.certificate}
            name="certificate"
            onChange={handleFertilizerActivities}
          >
            <option>Select certificate of supervisor</option>
            <option value="MOFA">MOFA</option>
            <option value="EPA">EPA</option>
            <option value="PPRSD/NPPO">PPRSD/NPPO</option>
            <option value="Others">Others</option>
          </Select>
        </div>
        {fertApplication.certificate === "Others" && (
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
              value={fertApplication.otherCert}
              onChange={handleFertilizerActivities}
            />
          </div>
        )}

        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default FertilizerApplication;
