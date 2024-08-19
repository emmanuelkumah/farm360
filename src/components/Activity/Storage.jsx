import React, { useState, useEffect } from "react";
import {
  Button,
  Select,
  Label,
  TextInput,
  FileInput,
  Datepicker,
} from "flowbite-react";
import { useParams, Form } from "react-router-dom";
import { createStorageActivities, farmsData } from "../../data/dummyData";
import { toast, ToastContainer } from "react-toastify";

const Storage = () => {
  const [farmDetails, setFarmDetails] = useState({});

  const [hasStorage, setHasStorage] = useState(false);
  const [hasCert, setHasCert] = useState(false);
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

  const showFarmOwner = () => {
    if (farmDetails.owner !== "") {
      return `${farmDetails.owner}'s farm`;
    } else {
      return "the farm";
    }
  };

  const handleSelectMethod = (e) => {
    if (e.target.value === "Others") {
      setHasStorage(!hasStorage);
    } else {
      setHasStorage(false);
    }
  };

  const handleSelectCert = (e) => {
    if (e.target.value === "Others") {
      setHasCert(!hasCert);
    } else {
      setHasCert(false);
    }
  };

  return (
    <div>
      <h2 className="mb-2 text-xl text-center">
        Record Storage Activities on {showFarmOwner()}
      </h2>
      <Form
        className="container mx-auto w-full md:w-[70%]"
        method="post"
        action="../../app/storage"
      >
        <div>
          <Label htmlFor="storage" className="font-semibold my-2">
            Date of storage
          </Label>
          <Datepicker
            id="storage"
            placeholder="Select the storage date"
            name="storage"
            maxDate={new Date()}
            defaultValue={new Date()}
          />
        </div>
        <div className="my-4">
          <Label htmlFor="quantity" className="font-semibold my-2">
            Quantity
          </Label>
          <TextInput
            id="quantity"
            type="text"
            placeholder="Quantity"
            name="quantity"
            defaultValue=""
          />
        </div>

        <div className="my-4">
          <Label
            htmlFor="type-storage"
            value="Type of storage"
            className="my-2 font-semibold"
          />

          <Select
            id="method"
            required
            name="storageType"
            defaultValue=""
            onChange={handleSelectMethod}
          >
            <option>Select the type of storage</option>
            <option value="Own storage">Own storage</option>
            <option value="commercial storage">Commercial Storage</option>
            <option value="BJL storage">BJL storage</option>
            <option value="Others">Others</option>
          </Select>
        </div>
        {hasStorage && (
          <div className="my-4">
            <Label htmlFor="other-storage" className="font-semibold my-2">
              Others(specify)
            </Label>
            <TextInput
              id="other-storage"
              type="text"
              name="otherType"
              placeholder="Specify the other storage"
              defaultValue=""
            />
          </div>
        )}

        <div className="my-4">
          <Label
            htmlFor="community"
            value="Community"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            placeholder="Enter the name of community"
            id="community"
            name="community"
            defaultValue=""
          />
        </div>
        <div className="my-4">
          <Label
            htmlFor="district"
            value="District"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            placeholder="Enter the district"
            id="district"
            name="district"
            defaultValue=""
          />
        </div>
        <div className="my-4">
          <Label
            htmlFor="quality"
            value="Quality"
            className="my-2 font-semibold"
          />
          <Select id="quality" required name="quality" defaultValue="">
            <option>Select quality</option>
            <option value="Good">Good</option>
            <option value="Fairly good">Fairly good</option>
            <option value="Bad">Bad</option>
            <option value="Wet">Wet</option>
            <option value="Dry">Dry</option>
          </Select>
        </div>
        <div className="my-4">
          <Label
            htmlFor="chemical"
            value="Chemical name"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            placeholder="Enter chemical name"
            id="chemical"
            name="chemical"
            defaultValue=""
          />
        </div>
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
            name="rate"
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

        <div className="my-4">
          <Label
            htmlFor="scanned"
            value="Upload scanned receipt"
            className="my-2 font-semibold"
          />
          <FileInput id="file" accept="image/*" name="receipt" />
        </div>
        <Button className="w-full md:w-full mt-10" type="submit">
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Storage;

export const action = async ({ request }) => {
  const data = await request.formData();
  const storageActivitiesData = {
    storage: data.get("storage"),
    quantity: data.get("quantity"),
    storageType: data.get("storageType"),
    otherType: data.get("otherType"),
    community: data.get("community"),
    district: data.get("district"),
    quality: data.get("quality"),
    rate: data.get("rate"),
    supervisor: data.get("supervisor"),
    contact: data.get("contact"),
    certificate: data.get("certificate"),
    otherCert: data.get("otherCert"),
    receipt: data.get("receipt"),
  };
  createStorageActivities(storageActivitiesData);
  return null;
};
