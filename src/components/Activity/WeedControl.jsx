import React, { useState, useEffect } from "react";
import { Button, Select, Label, TextInput, Datepicker } from "flowbite-react";
import { useParams, Form } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { farmsData } from "../../data/dummyData";
import { createWeedControlActivities } from "../../data/dummyData";

const WeedControl = () => {
  const [hasWeedControl, setHasWeedControl] = useState(false);
  const [hasCert, setHasCert] = useState(false);
  const [farmDetails, setFarmDetails] = useState({});

  const { farmId } = useParams();

  useEffect(() => {
    //coonect to farm api and get farm details
    const farm = getFarmOwner(farmId);
    // console.log(farm);
    setFarmDetails(farm);
  }, []);

  const getFarmOwner = (farmId) => {
    return farmsData.find((farm) => farm.id === farmId);
  };

  const handleSelectWeedControl = (e) => {
    if (e.target.value === "Chemical") {
      setHasWeedControl(true);
    } else {
      setHasWeedControl(false);
    }
  };

  const handleSelectCert = (e) => {
    if (e.target.value === "Others") {
      setHasCert(!hasCert);
    } else {
      setHasCert(false);
    }
  };
  const showFarmOwner = () => {
    if (farmDetails.owner !== "") {
      return `${farmDetails.owner}'s farm`;
    } else {
      return "the farm";
    }
  };
  const farmer = showFarmOwner();
  return (
    <div>
      <div>
        <h2 className="mb-2 text-xl text-center">
          {" "}
          Key Data Entry For Weed Control Activities on {farmer}
        </h2>{" "}
        <Form
          className="container mx-auto w-full md:w-[70%]"
          method="post"
          action="../../app/weedcontrol"
        >
          <div className="my-4">
            <Label htmlFor="weed" className="font-semibold my-2">
              Date of weed control
            </Label>
            <Datepicker
              id="weed"
              name="dateOfWeeding"
              placeholder="Select date of weed control"
              maxDate={new Date()}
              defaultValue={new Date()}
            />
          </div>

          <div className="my-4">
            <Label
              htmlFor="method"
              value="Method of weed control"
              className="my-2 font-semibold"
            />

            <Select
              id="method"
              required
              name="weedControlMethod"
              onChange={handleSelectWeedControl}
              defaultValue=""
            >
              <option>Select method of weed control</option>
              <option value="Hand">Hand</option>
              <option value="Chemical">Chemical</option>
            </Select>
          </div>
          {hasWeedControl && (
            <div className="my-4">
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
                defaultValue=""
              />
            </div>
          )}

          <div className="my-4">
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
              defaultValue=""
            />
          </div>
          <div className="my-4">
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
              defaultValue=""
            />
          </div>
          <div className="my-4">
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
              name="certificateOfSupervisor"
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
            <div className="my-4">
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

          <Button className="w-full md:w-1/2" type="submit">
            Submit
          </Button>
        </Form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default WeedControl;

export const action = async ({ request }) => {
  const data = await request.formData();
  const enteredWeedControlData = {
    dateOfWeeding: data.get("dateOfWeeding"),
    weedControlMethod: data.get("weedControlMethod"),
    chemical: data.get("chemical"),
    rateOfApplication: data.get("rateOfApplication"),
    supervisor: data.get("supervisor"),
    contact: data.get("contact"),
    certificateOfSupervisor: data.get("certificateOfSupervisor"),
    otherCert: data.get("otherCert"),
  };
  createWeedControlActivities(enteredWeedControlData);

  return null;
};
