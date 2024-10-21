import React, { useEffect, useState } from "react";
import {
  Button,
  Select,
  Label,
  TextInput,
  FileInput,
  Datepicker,
  Checkbox,
  Alert,
} from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { Form, redirect, useActionData } from "react-router-dom";
import { toast } from "react-toastify";
import ActivityHeading from "../ActivityHeading";
import BackButton from "../BackButton";
import { axiosbaseURL } from "../../api/axios";

const StorageForm = ({ method, data }) => {
  const [selectedQualityOption, setSelectedQualityOption] = useState([]);
  const [storageType, setStorageType] = useState("");
  const [hasOtherStorage, setHasOtherStorage] = useState(false);
  const [otherStorageType, setOtherStorageType] = useState("");
  const [supervisorQualification, setSupervisorQualification] = useState("");
  const [hasOtherQualification, setHasOtherQualification] = useState(false);
  const [otherQualification, setOtherQualification] = useState("");
  const [community, setCommunity] = useState([]);
  const [activityDate, setActivityDate] = useState("");
  const [selectedCommunity, setSelectedCommunity] = useState("");

  const errors = useActionData();
  const errorMessage = errors?.data;
  console.log(data);
  const storageQuality = [
    {
      id: 1,
      name: "Dry",
    },
    {
      id: 2,
      name: "Wet",
    },
    {
      id: 3,
      name: "Good",
    },
    {
      id: 4,
      name: "Fairly good",
    },
    {
      id: 5,
      name: "Bad",
    },
  ];

  useEffect(() => {
    axiosbaseURL
      .get(`/geo/communities`)
      .then((response) => {
        setCommunity(response.data.data);
      })
      .catch((error) => {
        toast.error("Failed to fetch community details");
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (data) {
      setActivityDate(data.storageDate);
      displayStorageType(data.storageType);
      displayQualification(data.supervisorQualification);
      setSelectedCommunity(data.community.name);
      setSelectedQualityOption(data.quality);
    }
  }, []);

  const displayStorageType = (value) => {
    if (value !== "OWN" && value !== "COMMERCIAL" && value !== "BJL") {
      setStorageType("OTHER");
      setHasOtherStorage(true);
      setOtherStorageType(value);
    } else {
      setStorageType(value);
    }
  };
  const displayQualification = (value) => {
    if (value !== "MOFA" && value !== "EPA" && value !== "PPRSD/NPPO") {
      setSupervisorQualification("Others");
      setHasOtherQualification(true);
      setOtherQualification(value);
    } else {
      setSupervisorQualification(value);
    }
  };

  const handleSelectStorage = (e) => {
    console.log(e.target.value);
    if (e.target.value === "OTHER") {
      setHasOtherStorage(!hasOtherStorage);
      setStorageType(e.target.value);
    } else {
      setStorageType(e.target.value);
      setHasOtherStorage(false);
    }
  };

  const handleSupervisorQualification = (e) => {
    const value = e.target.value;
    setSupervisorQualification(value);
    setHasOtherQualification(false);
    if (value === "Others") {
      setSupervisorQualification(value);
      setHasOtherQualification(true);
    }
  };

  const handleActivityDateChange = (date) => {
    const formattedDate = date.toISOString();
    setActivityDate(formattedDate);
  };
  const handleStorageQualityChange = (quality) => {
    setSelectedQualityOption((prevQuality) =>
      prevQuality.includes(quality)
        ? prevQuality.filter((option) => option !== quality)
        : [...prevQuality, quality]
    );
  };
  return (
    <div className="container mx-auto">
      <BackButton />
      <ActivityHeading activityHeading="Key Data Entry For Storage" />
      {errors ? (
        <Alert color="failure" icon={HiInformationCircle} className="max-w-2xl">
          <span className="font-medium">Info alert!</span>
          <p>{`${errorMessage.code} - ${errorMessage.message}`}</p>
        </Alert>
      ) : null}
      <Form className="container mx-auto w-full md:w-[70%]" method={method}>
        <div>
          <Label htmlFor="storage" className="font-semibold my-2">
            Date of storage
          </Label>
          <Datepicker
            id="storage"
            placeholder="Select the storage date"
            name="activityDate"
            maxDate={new Date()}
            value={activityDate}
            onSelectedDateChanged={(date) => handleActivityDateChange(date)}
          />
        </div>
        <div className="my-4">
          <Label htmlFor="quantity" className="font-semibold my-2">
            Quantity stored
          </Label>
          <TextInput
            id="quantity"
            type="text"
            placeholder="Quantity"
            name="quantity"
            defaultValue={data ? data.quantity : ""}
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
            value={storageType}
            onChange={handleSelectStorage}
          >
            <option value="OWN">Own storage</option>
            <option value="COMMERCIAL">Commercial Storage</option>
            <option value="BJL">BJL storage</option>
            <option value="OTHER">Other</option>
          </Select>
        </div>
        {hasOtherStorage && (
          <div className="my-4">
            <Label htmlFor="other-storage" className="font-semibold my-2">
              Other storage name
            </Label>
            <TextInput
              id="other-storage"
              type="text"
              name="otherStorageName"
              placeholder="Specify the other storage"
              value={otherStorageType}
              onChange={(e) => setOtherStorageType(e.target.value)}
            />
          </div>
        )}

        <div className="my-4">
          <Label
            htmlFor="community"
            value="Community stored"
            className="my-2 font-semibold"
          />
          <Select
            name="community"
            value={selectedCommunity}
            onChange={(e) => setSelectedCommunity(e.target.value)}
          >
            {community.map((com) => (
              <option key={com.id} value={com.id}>
                {com.name}
              </option>
            ))}
          </Select>
        </div>

        <div className="my-4">
          <Label
            htmlFor="quality"
            value="Storage quality"
            className="my-2 font-semibold"
          />
          {storageQuality.map((quality) => (
            <div key={quality.id}>
              <Checkbox
                id={`quality-${quality.id}`}
                value={quality.name}
                checked={selectedQualityOption?.includes(quality.name)}
                name="quality"
                onChange={() => handleStorageQualityChange(quality.name)}
              />
              <Label htmlFor={`quality-${quality.id}`} className="ml-2">
                {quality.name}
              </Label>
            </div>
          ))}
          <TextInput name="selectedQuality" value={selectedQualityOption} />
        </div>
        <div className="my-4">
          <Label
            htmlFor="chemical"
            value="Storage chemical name"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            placeholder="Enter chemical name"
            id="chemical"
            name="chemical"
            defaultValue={data ? data.storageChemicalName : ""}
          />
        </div>
        <div className="my-4">
          <Label
            htmlFor="rate-apply"
            value="Chemical application rate(ml per acre)"
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            placeholder="Enter the rate of application"
            id="rate-apply"
            name="rate"
            defaultValue={data ? data.storageChemicalApplicationRate : ""}
          />
        </div>
        <div className="my-4">
          <Label
            htmlFor="contact"
            value="Storage manager "
            className="my-2 font-semibold"
          />
          <TextInput
            type="text"
            required
            placeholder="Enter name of storage manager"
            id="contact"
            name="storageManagerName"
            defaultValue={data ? data.storageManagerName : ""}
          />
        </div>
        <div className="my-4">
          <Label
            htmlFor="storageManagerNumber"
            value="Storage manager contact "
            className="my-2 font-semibold"
          />
          <TextInput
            type="number"
            required
            placeholder="Enter contact of storage manager  begin with (233)"
            id="storageManagerNumber"
            name="storageManagerContact"
            defaultValue={data ? data.storageManagerContact : ""}
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
            name="supervisorName"
            defaultValue={data ? data.supervisorName : ""}
          />
        </div>
        <div className="my-4">
          <Label
            htmlFor="contact"
            value="Contact of the supervisor"
            className="my-2 font-semibold"
            placeholder="Supervisor contact begin with (233)"
          />
          <TextInput
            type="number"
            required
            placeholder="Enter name of supervisor"
            id="contact"
            name="supervisorContact"
            defaultValue={data ? data.supervisorContact : ""}
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
            value={supervisorQualification}
            onChange={handleSupervisorQualification}
          >
            <option value="MOFA">MOFA</option>
            <option value="EPA">EPA</option>
            <option value="PPRSD/NPPO">PPRSD/NPPO</option>
            <option value="Others">Others</option>
          </Select>
        </div>
        {hasOtherQualification && (
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
              name="otherQualification"
              value={otherQualification}
              onChange={(e) => setOtherQualification(e.target.value)}
            />
          </div>
        )}

        <div className="my-4">
          <Label
            htmlFor="scanned"
            value="Upload scanned receipt"
            className="my-2 font-semibold"
          />
          <TextInput
            id="file"
            type="url"
            name="receipt"
            defaultValue={data ? data.receiptUrl : ""}
          />
        </div>
        <Button className="w-full md:w-full mt-10" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default StorageForm;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const getStorageType = (storage) => {
    if (storage === "Others") {
      return data.get("otherType");
    }
    return data.get("storageType");
  };

  const getOtherQualification = (qualification) => {
    if (qualification === "Others") {
      return data.get("otherQualification");
    }
    return data.get("supervisorQualification");
  };

  const supervisorQualification = getOtherQualification(
    data.get("supervisorQualification")
  );
  //  const listSelectedQuality = data.get('quality')
  const storageData = getStorageType(data.get("storageType"));
  const formData = {
    farmId: Number(params.farmId),
    storageDate: data.get("activityDate"),
    quantity: Number(data.get("quantity")),
    storageType: data.get("storageType"),
    communityId: data.get("community"),
    quality: data.get("selectedQuality").split(","),
    receiptUrl: data.get("receipt"),
    storageChemicalName: data.get("chemical"),
    storageChemicalApplicationRate: Number(data.get("rate")),
    storageManagerContact: data.get("storageManagerContact"),
    storageManagerName: data.get("storageManagerName"),
    otherStorageName: data.get("otherStorageName"),
    supervisorName: data.get("supervisorName"),
    supervisorContact: data.get("supervisorContact"),
    supervisorQualification: supervisorQualification,
  };

  const method = request.method;
  const activityId = params.activityId;

  if (method === "PUT") {
    try {
      const response = await axiosbaseURL.put(
        `/farm/activity/storage/${activityId}`,
        formData
      );
      toast.success("Storage activity updated successfully!");
      return redirect("/app/farms");
    } catch (error) {
      console.log(error.response);
    }
  }

  try {
    const response = await axiosbaseURL.post(
      "/farm/activity/storage",
      formData
    );
    toast.success("Storage activity  submitted successfully!");
    return redirect("/app/farms");
  } catch (error) {
    return error.response;
  }
};
