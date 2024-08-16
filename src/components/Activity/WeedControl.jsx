import React, { useState } from "react";
import { Button, Select, Label, TextInput, Datepicker } from "flowbite-react";
import { useActivitiesContext } from "../../context/FarmersProvider";
import { useParams, Form } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const WeedControl = () => {
  const [weedControlActivities, setWeedControlActivities] = useState({
    dateOfWeeding: "",
    weedControlMethod: "",
    chemical: "",
    rateOfApplication: "",
    supervisor: "",
    contact: "",
    certificateOfSupervisor: "",
    otherCert: "",
  });
  const { dispatchActivity } = useActivitiesContext();
  const { farmId } = useParams();
  const handleWeedingDate = (date) => {
    setWeedControlActivities({
      ...weedControlActivities,
      dateOfWeeding: date.toISOString().split("T")[0],
    });
  };
  const handleWeedingActivities = (e) => {
    const { name, value } = e.target;
    setWeedControlActivities({
      ...weedControlActivities,
      [name]: value,
    });
  };

  const onWeedControlActivitiesSubmit = (e) => {
    e.preventDefault();
    setWeedControlActivities({
      dateOfWeeding: "",
      weedControlMethod: "",
      chemical: "",
      rateOfApplication: "",
      supervisor: "",
      contact: "",
      certificateOfSupervisor: "",
      otherCert: "",
    });
    dispatchActivity({
      type: "Add_WeedControlActivity",
      payload: { farmId, ...weedControlActivities },
    });
    toast.success("Weed control activities submitted successfully!");
  };
  return (
    <div>
      <div>
        <h2 className="mb-2 text-xl">Weed Control Activities</h2>
        <Form
          className="flex max-w-md flex-col gap-4"
          onSubmit={onWeedControlActivitiesSubmit}
        >
          <div>
            <Label htmlFor="weed" className="font-semibold my-2">
              Date of weed control
            </Label>
            <Datepicker
              id="weed"
              name="dateOfWeeding"
              placeholder="Select date of weed control"
              value={weedControlActivities.dateOfWeeding}
              maxDate={new Date()}
              onSelectedDateChanged={(date) => handleWeedingDate(date)}
            />
          </div>

          <div>
            <Label
              htmlFor="method"
              value="Method of weed control"
              className="my-2 font-semibold"
            />

            <Select
              id="method"
              required
              name="weedControlMethod"
              onChange={handleWeedingActivities}
              value={weedControlActivities.weedControlMethod}
            >
              <option>Select method of weed control</option>
              <option value="Hand">Hand</option>
              <option value="Chemical">Chemical</option>
            </Select>
          </div>
          {weedControlActivities.weedControlMethod === "Chemical" && (
            <div>
              <Label
                htmlFor="chemical"
                value="Name of chemical"
                className="my-2 font-semibold"
              />
              <TextInput
                type="text"
                required
                placeholder="Enter name of chemical"
                id="chemical"
                name="chemical"
                value={weedControlActivities.chemical}
                onChange={handleWeedingActivities}
              />
            </div>
          )}

          <div>
            <Label
              htmlFor="rate"
              value="Rate of chemical application"
              className="my-2 font-semibold"
            />
            <TextInput
              type="text"
              required
              placeholder="Enter rate of application"
              id="rate"
              name="rateOfApplication"
              value={weedControlActivities.rateOfApplication}
              onChange={handleWeedingActivities}
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
              value={weedControlActivities.supervisor}
              onChange={handleWeedingActivities}
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
              value={weedControlActivities.contact}
              onChange={handleWeedingActivities}
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
              name="certificateOfSupervisor"
              onChange={handleWeedingActivities}
              value={weedControlActivities.certificateOfSupervisor}
            >
              <option>Select certificate of supervisor</option>
              <option value="MOFA">MOFA</option>
              <option value="EPA">EPA</option>
              <option value="PPRSD/NPPO">PPRSD/NPPO</option>
              <option value="Others">Others</option>
            </Select>
          </div>
          {weedControlActivities.certificateOfSupervisor === "Others" && (
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
                value={weedControlActivities.otherCert}
                onChange={handleWeedingActivities}
              />
            </div>
          )}

          <Button type="submit">Submit</Button>
        </Form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default WeedControl;
