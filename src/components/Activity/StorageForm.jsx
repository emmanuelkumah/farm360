import React, { useEffect, useState } from "react";
import {
  Button,
  Select,
  Label,
  TextInput,
  FileInput,
  Datepicker,
  Checkbox,
} from "flowbite-react";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import ActivityHeading from "../ActivityHeading";
import BackButton from "../BackButton";
import { axiosbaseURL } from "../../api/axios";

const StorageForm = () => {
  const [selectedQualityOption, setSelectedQualityOption] = useState([]);
  const [hasStorage, setHasStorage] = useState(false);
  const [hasCert, setHasCert] = useState(false);
  const [community, setCommunity] = useState([]);
  const [activityDate, setActivityDate] = useState("");

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
        console.log("com", response);
        setCommunity(response.data.data);
      })
      .catch((error) => {
        toast.error("Failed to fetch community details");
        console.error(error);
      });
  }, []);

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
  const handleActivityDateChange = (date) => {
    const formattedDate = date.toISOString(); // Formats to "YYYY-MM-DD"
    setActivityDate(formattedDate);
  };
  const handleStorageQualityChange = (e) => {
    const value = e.target.value;
    setSelectedQualityOption((prev) =>
      prev.includes(value)
        ? prev.filter((option) => option !== value)
        : [...prev, value]
    );
  };
  return (
    <div className="container mx-auto">
      <BackButton />
      <ActivityHeading activityHeading="Key Data Entry For Harvesting" />
      <Form className="container mx-auto w-full md:w-[70%]" method="post">
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
          <Select name="community">
            <option>Select community</option>
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
            value="Quality"
            className="my-2 font-semibold"
          />
          {storageQuality.map((quality) => (
            <div key={quality.id}>
              <Checkbox
                id={`quality-${quality.id}`}
                value={quality.name}
                name="quality"
                onChange={handleStorageQualityChange}
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
            name="supervisorName"
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
              name="otherQualification"
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
    activityDate: data.get("activityDate"),
    quantity: data.get("quantity"),
    storageType: storageData,
    community: data.get("community"),
    quality: data.get("selectedQuality").split(","),

    chemical: data.get("chemical"),
    rate: data.get("rate"),
    receipt: data.get("receipt"),
    supervisorName: data.get("supervisorName"),
    supervisorContact: data.get("supervisorContact"),
    supervisorQualification: supervisorQualification,
  };
  console.log(formData);

  const response = await axiosbaseURL.post("/farm/activity/storage", formData);
  console.log("storage response", response);
  if (
    response.status === 401 ||
    response.status === 404 ||
    response.status === 500 ||
    response.status === 400
  ) {
    throw json({ message: "Could not save data." });
  }
  toast.success("Storage  data submitted successfully!");
  return redirect("/app/farms");
};
