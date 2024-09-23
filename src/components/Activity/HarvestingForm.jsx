import React, { useState } from "react";
import { Button, Select, Label, TextInput, Datepicker } from "flowbite-react";
import { redirect, Form } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import BackButton from "../BackButton";
import { axiosbaseURL } from "../../api/axios";
import ActivityHeading from "../ActivityHeading";

const HarvestingForm = () => {
  const [hasHarvesting, setHasHarvesting] = useState(false);
  const [hasCert, setHasCert] = useState(false);
  const [activityDate, setActivityDate] = useState("");

  const handleSelectHarvesting = (e) => {
    if (e.target.value === "Machinery") {
      setHasHarvesting(!hasHarvesting);
    } else {
      setHasHarvesting(false);
    }
  };
  const handleSelectCert = (e) => {
    if (e.target.value === "Others") {
      setHasCert(!hasCert);
    } else {
      setHasCert(false);
    }
  };
  const handleDateChange = (date) => {
    const formattedDate = date.toISOString();
    setActivityDate(formattedDate);
  };
  return (
    <div className="container mx-auto">
      <BackButton />
      <ActivityHeading activityHeading="Key Data Entry For Harvesting" />
      <Form className="container mx-auto w-full md:w-[70%]" method="post">
        <div className="my-4">
          <Label htmlFor="date" className="font-semibold my-2">
            Date of harvest
          </Label>
          <Datepicker
            id="date"
            placeholder="Select the harvesting date"
            maxDate={new Date()}
            value={activityDate}
            name="dateOfHarvest"
            onSelectedDateChanged={(date) => handleDateChange(date)}
          />
        </div>
        <div className="my-4">
          <Label htmlFor="acres" className="font-semibold my-2">
            Acres Harvested
          </Label>
          <TextInput
            id="acres"
            type="number"
            required
            placeholder="Enter acres harvested"
            name="acresHarvested"
            defaultValue=""
          />
        </div>
        <div className="my-4">
          <Label htmlFor="bags" className="font-semibold my-2">
            Bags Harvested
          </Label>
          <TextInput
            id="bags"
            type="number"
            required
            placeholder="Enter number of bags harvested"
            name="bagsHarvested"
            defaultValue=""
          />
        </div>
        <div className="my-4">
          <Label htmlFor="weight" className="font-semibold my-2">
            Weight per bag harvested
          </Label>
          <TextInput
            id="weight"
            type="number"
            required
            placeholder="Enter weight per bag harvested"
            name="weightPerBagHarvested"
            defaultValue=""
          />
        </div>

        <div className="my-4">
          <Label
            htmlFor="modeofHarvesting"
            value="Mode of harvesting"
            className="my-2 font-semibold"
          />

          <Select
            id="modeofHarvesting"
            required
            defaultValue=""
            name="ModePerBagHarvested"
            onChange={handleSelectHarvesting}
          >
            <option>Select the mode of harvesting</option>
            <option value="MANUAL">Manual</option>
            <option value="Machinery">Machinery</option>
          </Select>
        </div>
        {hasHarvesting && (
          <div>
            <Label
              htmlFor="machine"
              value="Name of machine"
              className="my-2 font-semibold"
            />
            <Select id="machine" required name="machine" defaultValue="">
              <option>Select machine used</option>
              <option value="Sheller">Sheller</option>
              <option value="Threshing">Threshing</option>
            </Select>
          </div>
        )}

        <div className="my-4">
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
            name="supervisorName"
            defaultValue=""
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
            name="supervisorContact"
            defaultValue=""
          />
        </div>
        <div className="my-4">
          <Label
            htmlFor="cert"
            value="Certificate"
            className="my-2 font-semibold"
          />

          <Select
            id="cert"
            required
            name="supervisorQualification"
            defaultValue=""
            onChange={handleSelectCert}
          >
            <option>Select certificate of supervisor</option>
            <option value="MOFA">MOFA</option>
            <option value="EPA">EPA</option>
            <option value="PPRSD/NPPO">PPRSD/NPPO</option>
            <option value="Others">Others</option>
          </Select>
        </div>
        {hasCert && (
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
              defaultValue=""
            />
          </div>
        )}

        <Button type="submit" className="bg-main mt-4 w-full">
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default HarvestingForm;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const formData = {
    farmId: Number(params.farmId),
    dateOfHarvest: data.get("dateOfHarvest"),
    acresHarvested: Number(data.get("acresHarvested")),
    bagsHarvested: Number(data.get("bagsHarvested")),
    weightPerBagHarvested: Number(data.get("weightPerBagHarvested")),
    ModePerBagHarvested: data.get("ModePerBagHarvested"),
    supervisorName: data.get("supervisorName"),
    supervisorContact: data.get("supervisorContact"),
    supervisorQualification: data.get("supervisorQualification"),
  };

  const response = await axiosbaseURL.post(
    "/farm/activity/harvesting",
    formData
  );
  if (
    response.status === 401 ||
    response.status === 404 ||
    response.status === 500 ||
    response.status === 400
  ) {
    throw json({ message: "Could not save data." });
  }
  toast.success("Harvesting data submitted successfully!");
  return redirect("/app/farms");
};
