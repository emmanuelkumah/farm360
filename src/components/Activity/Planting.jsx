import React, { useEffect, useState } from "react";
import { Button, Select, Label, TextInput, Datepicker } from "flowbite-react";
import { Form, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createPlantingActivities, farmsData } from "../../data/dummyData";

const Planting = () => {
  const defaultValue = new Date();
  const [hasOtherCert, setHasOtherCert] = useState(false);
  const [farmDetails, setFarmDetails] = useState({});
  // let farmOwner;
  let { farmId } = useParams();
  useEffect(() => {
    //coonect to farm api and get farm details
    const farm = getFarmOwner(farmId);
    // console.log(farm);
    setFarmDetails(farm);
  }, []);

  const handleCertificateChange = (e) => {
    if (e.target.value === "others") {
      setHasOtherCert(!hasOtherCert);
    } else {
      setHasOtherCert(false);
    }
  };

  const getFarmOwner = (farmId) => {
    return farmsData.find((farm) => farm.id === farmId);
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
    <div className="flex flex-col justify-center items-center">
      <h2 className="mb-2 text-xl">
        {" "}
        Key Data Entry For Planting Activities on {farmer}
      </h2>
      <Form
        className="w-full md:w-[70%]"
        method="post"
        action="../../app/cte/planting"
      >
        <div className="my-4">
          <Label htmlFor="planting" className="font-semibold my-4">
            Date of planting
          </Label>
          <Datepicker
            id="planting"
            name="plantingDate"
            placeholder="Select planting date"
            maxDate={defaultValue}
            defaultValue={defaultValue}
          />
        </div>

        <div className="my-4">
          <Label
            htmlFor="crop"
            value="Name of crop"
            className="my-2 font-semibold"
          />

          <Select id="crop" required name="cropPlanted" defaultValue="">
            <option>Select name of crop</option>
            <option value="soya">Soya</option>
            <option value="cowpea">Cowpea</option>
            <option value="groundnut">Groundnut</option>
          </Select>
        </div>
        <div className="my-4">
          <Label
            htmlFor="kilo"
            value="Kilo planted"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            required
            placeholder="Kilo of seeds planted"
            name="kiloPlanted"
            id="kilo"
            defaultValue=""
          />
        </div>
        <div className="my-4">
          <Label
            htmlFor="size"
            value="Land size covered on that date"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            required
            placeholder="Enter land size covered"
            id="size"
            name="landsizeCovered"
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
            maxLength={10}
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
            onChange={handleCertificateChange}
          >
            <option>Select certificate of supervisor</option>
            <option value="MOFA">MOFA</option>
            <option value="EPA">EPA</option>
            <option value="PPRSD/NPPO">PPRSD/NPPO</option>
            <option value="others">Others</option>
          </Select>
        </div>
        {hasOtherCert && (
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
              name="otherCertificate"
              defaultValue=""
            />
          </div>
        )}

        <Button type="submit" className="my-4 w-full md:w-[50%] bg-main">
          Submit planting activities
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Planting;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const plantingActivitiesData = {
    plantingDate: data.get("plantingDate"),
    cropPlanted: data.get("cropPlanted"),
    kiloPlanted: data.get("kiloPlanted"),
    landsizeCovered: data.get("landsizeCovered"),
    supervisor: data.get("supervisor"),
    contact: data.get("contact"),
    certificate: data.get("certificate"),
    otherCertificate: data.get("otherCertificate"),
  };
  //connect to the database to save data
  createPlantingActivities(plantingActivitiesData);
  return null;
};
