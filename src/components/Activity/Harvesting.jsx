import React, { useState, useEffect } from "react";
import { Button, Select, Label, TextInput, Datepicker } from "flowbite-react";
import { useParams, Form } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { createHarvestingActivities, farmsData } from "../../data/dummyData";

const Harvesting = () => {
  const [hasHarvesting, setHasHarvesting] = useState(false);
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
      <h2 className="mb-2 text-xl text-center">
        Key Data Entry For Harvesting Activities on {farmer}
      </h2>
      <Form
        className="container mx-auto w-full md:w-[70%]"
        method="post"
        action="../../app/harvesting"
      >
        <div className="my-4">
          <Label htmlFor="date" className="font-semibold my-2">
            Date of harvest
          </Label>
          <Datepicker
            id="date"
            placeholder="Select the harvesting date"
            maxDate={new Date()}
            defaultDate={new Date()}
            name="harvestDate"
          />
        </div>
        <div className="my-4">
          <Label htmlFor="acres" className="font-semibold my-2">
            Acres Harvested
          </Label>
          <TextInput
            id="acres"
            type="text"
            required
            placeholder="Enter acres harvested"
            name="acres"
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
            name="bags"
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
            name="weight"
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
            name="mode"
            onChange={handleSelectHarvesting}
          >
            <option>Select the mode of harvesting</option>
            <option value="Manual">Manual</option>
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
            name="supervisor"
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

        <Button type="submit" className="bg-main mt-4">
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Harvesting;

export const action = async ({ request }) => {
  const data = await request.formData();
  const enteredHarvestingData = {
    harvestDate: data.get("harvestDate"),
    acres: data.get("acres"),
    bags: data.get("bags"),
    weight: data.get("weight"),
    mode: data.get("mode"),
    machine: data.get("machine"),
    supervisor: data.get("supervisor"),
    contact: data.get("contact"),
    certificate: data.get("certificate"),
    otherCert: data.get("otherCert"),
  };
  createHarvestingActivities(enteredHarvestingData);

  return null;
};
