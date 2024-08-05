import React, { useState } from "react";
import { Button, Select, Label, TextInput, Datepicker } from "flowbite-react";
import { useActivitiesContext } from "../../context/FarmersProvider";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Harvesting = () => {
  const { dispatchActivity, activitiesState } = useActivitiesContext();
  console.log(activitiesState);
  const { farmId } = useParams();
  const [harvesting, setHarvesting] = useState({
    date: "",
    acres: "",
    bags: "",
    weight: "",
    mode: "",
    machine: "",
    supervisor: "",
    contact: "",
    cert: "",
    otherCert: "",
  });
  const handleharvestingDate = (date) => {
    setHarvesting({
      ...harvesting,
      date: date.toISOString().split("T")[0],
    });
  };
  const handleHarvestingActivities = (e) => {
    const { name, value } = e.target;
    setHarvesting({
      ...harvesting,
      [name]: value,
    });
  };
  const onHarvestingActivitiesSubmit = (e) => {
    e.preventDefault();
    dispatchActivity({
      type: "Add_HarvestingActivity",
      payload: { farmId, ...harvesting },
    });
    setHarvesting({
      date: "",
      acres: "",
      bags: "",
      weight: "",
      mode: "",
      machine: "",
      supervisor: "",
      contact: "",
      cert: "",
      otherCert: "",
    });
    toast.success("Harvesting activities submitted successfully!");
  };
  return (
    <div>
      <h2 className="mb-2 text-xl">Harvesting</h2>
      <form
        className="flex max-w-md flex-col gap-4"
        onSubmit={onHarvestingActivitiesSubmit}
      >
        <div>
          <Label htmlFor="date" className="font-semibold my-2">
            Date of harvest
          </Label>
          <Datepicker
            id="date"
            value={harvesting.date}
            placeholder="Select the harvesting date"
            maxDate={new Date()}
            onSelectedDateChanged={handleharvestingDate}
          />
        </div>
        <div>
          <Label htmlFor="acres" className="font-semibold my-2">
            Acres Harvested
          </Label>
          <TextInput
            id="acres"
            type="text"
            required
            placeholder="Enter acres harvested"
            name="acres"
            value={harvesting.acres}
            onChange={handleHarvestingActivities}
          />
        </div>
        <div>
          <Label htmlFor="bags" className="font-semibold my-2">
            Bags Harvested
          </Label>
          <TextInput
            id="bags"
            type="number"
            required
            placeholder="Enter number of bags harvested"
            value={harvesting.bags}
            name="bags"
            onChange={handleHarvestingActivities}
          />
        </div>
        <div>
          <Label htmlFor="weight" className="font-semibold my-2">
            Weight per bag harvested
          </Label>
          <TextInput
            id="weight"
            type="number"
            required
            placeholder="Enter weight per bag harvested"
            value={harvesting.weight}
            name="weight"
            onChange={handleHarvestingActivities}
          />
        </div>

        <div>
          <Label
            htmlFor="modeofHarvesting"
            value="Mode of harvesting"
            className="my-2 font-semibold"
          />

          <Select
            id="modeofHarvesting"
            required
            value={harvesting.mode}
            name="mode"
            onChange={handleHarvestingActivities}
          >
            <option>Select the mode of harvesting</option>
            <option value="Manual">Manual</option>
            <option value="Machinery">Machinery</option>
          </Select>
        </div>
        <div>
          <Label
            htmlFor="machine"
            value="Name of machine"
            className="my-2 font-semibold"
          />
          <Select
            id="machine"
            required
            value={harvesting.machine}
            name="machine"
            onChange={handleHarvestingActivities}
          >
            <option>Select machine used</option>
            <option value="Sheller">Sheller</option>
            <option value="Threshing">Threshing</option>
          </Select>
        </div>
        <div>
          <Label
            htmlFor="supervisor"
            value="Name of the supervisor"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            required
            placeholder="Enter name of supervisor"
            id="contact"
            name="supervisor"
            value={harvesting.supervisor}
            onChange={handleHarvestingActivities}
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
            value={harvesting.contact}
            name="contact"
            onChange={handleHarvestingActivities}
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
            value={harvesting.cert}
            name="cert"
            onChange={handleHarvestingActivities}
          >
            <option>Select certificate of supervisor</option>
            <option value="MOFA">MOFA</option>
            <option value="EPA">EPA</option>
            <option value="PPRSD/NPPO">PPRSD/NPPO</option>
            <option value="Others">Others</option>
          </Select>
        </div>
        {harvesting.cert === "Others" && (
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
              value={harvesting.otherCert}
              onChange={handleHarvestingActivities}
            />
          </div>
        )}

        <Button type="submit">Submit</Button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Harvesting;
