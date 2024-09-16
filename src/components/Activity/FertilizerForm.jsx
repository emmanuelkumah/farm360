import React, { useState, useEffect } from "react";
import { Button, Select, Label, TextInput, Datepicker } from "flowbite-react";
import { useParams, Form } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { createFertilizerActivities } from "../../data/dummyData";
import { farmsData } from "../../data/dummyData";
import ActivityHeading from "../ActivityHeading";
import BackButton from "../BackButton";

const FertilizerForm = () => {
  const { farmId } = useParams();
  const [hasFertMethod, setHasFertMethod] = useState(false);
  const [hasCert, setHasCert] = useState(false);
  const [farmDetails, setFarmDetails] = useState({});
  const defaultValue = new Date();

  useEffect(() => {
    //coonect to farm api and get farm details
    const farm = getFarmOwner(farmId);
    // console.log(farm);
    setFarmDetails(farm);
  }, []);

  const getFarmOwner = (farmId) => {
    return farmsData.find((farm) => farm.id === farmId);
  };
  const handleFertMethod = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Others") {
      setHasFertMethod(!hasFertMethod);
    } else {
      setHasFertMethod(false);
    }
  };

  const handleSelectCert = (e) => {
    if (e.target.value === "Others") {
      setHasCert(!hasCert);
    } else {
      setHasCert(false);
    }
  };

  // const showFarmOwner = () => {
  //   if (farmDetails.owner !== "") {
  //     return `${farmDetails.owner}'s farm`;
  //   } else {
  //     return "the farm";
  //   }
  // };
  // const farmer = showFarmOwner();

  return (
    <div className="container mx-auto">
      <BackButton />
      <ActivityHeading activityHeading="Key Data Entry" />
      <Form className="container mx-auto w-full md:w-[70%]" method="post">
        <div className="my-4">
          <Label htmlFor="date" className="font-semibold my-2">
            Date of application
          </Label>
          <Datepicker
            id="date"
            placeholder="Select date of fertilizer application"
            name="fertilizerdate"
            maxDate={defaultValue}
            defaultValue={defaultValue}
          />
        </div>

        <div className="my-4">
          <Label
            htmlFor="method"
            value="Type of application"
            className="my-2 font-semibold"
          />

          <Select id="method" required name="fertilizerType" defaultValue="">
            <option>Select the type of application</option>
            <option value="liquid">Liquid</option>
            <option value="organic">Organic</option>
            <option value="inorganic">Inorganic</option>
          </Select>
        </div>
        <div className="my-4">
          <Label
            htmlFor="chemical"
            value="Name of fertilizer"
            className="my-2 font-semibold"
          />
          <Select
            id="method"
            required
            name="fertMethod"
            defaultValue=""
            onChange={handleFertMethod}
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
        {hasFertMethod && (
          <div className="my-4">
            <Label
              htmlFor="others"
              value="Others(Specify)"
              className="my-2 font-semibold"
            />
            <TextInput
              type="text"
              placeholder="Enter name of fertilizer"
              id="others"
              name="otherFert"
              defaultValue=""
            />
          </div>
        )}

        <div className="my-4">
          <Label
            htmlFor="rate-apply"
            value="Rate of application(ml per acre)"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            placeholder="Enter the rate of application"
            id="rate-apply"
            name="ratePerMl"
            defaultValue=""
          />
        </div>
        <div className="my-4">
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
            placeholder="Enter contact of supervisor"
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
            name="certificate"
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

        <Button className="w-full md:w-1/2 mt-4" type="submit">
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default FertilizerForm;

export const action = async ({ request }) => {
  const data = await request.formData();

  const fertilizerAppActivitiesData = {
    fertilizerdate: data.get("fertilizerdate"),
    fertilizerType: data.get("fertilizerType"),
    fertMethod: data.get("fertMethod"),
    otherFert: data.get("otherFert"),
    ratePerMl: data.get("ratePerMl"),
    ratePerBag: data.get("ratePerBag"),
    supervisor: data.get("supervisor"),
    contact: data.get("contact"),
    certificate: data.get("certificate"),
    otherCertificate: data.get("otherCert"),
  };
  //connect to the database to save data
  createFertilizerActivities(fertilizerAppActivitiesData);
  return null;
};
