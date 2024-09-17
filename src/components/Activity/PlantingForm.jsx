import React, { useEffect, useState } from "react";
import { Button, Select, Label, TextInput, Datepicker } from "flowbite-react";
import { Form, useParams, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { farmsData } from "../../data/dummyData";
import { axiosbaseURL } from "../../api/axios";
import BackButton from "../BackButton";
import ActivityHeading from "../ActivityHeading";

const PlantingForm = () => {
  const defaultValue = new Date();
  const [hasOtherCert, setHasOtherCert] = useState(false);
  const [farmDetails, setFarmDetails] = useState({});
  const [activityDate, setActivityDate] = useState("");
  // let farmOwner;
  let { farmId } = useParams();
  useEffect(() => {
    //coonect to farm api and get farm details
    const farm = getFarmOwner(farmId);
    // console.log(farm);
    setFarmDetails(farm);
  }, []);

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString();
    console.log(formattedDate);
    setActivityDate(formattedDate);
  };
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

  return (
    <div className="container mx-auto p-4">
      <BackButton />
      <ActivityHeading activityHeading="Key Data Entries for Planting" />
      <Form className="w-full" method="post">
        <div className="my-4">
          <Label htmlFor="planting" className="font-semibold my-4">
            Date of planting
          </Label>
          <Datepicker
            id="planting"
            name="activityDate"
            placeholder="Select planting date"
            maxDate={defaultValue}
            value={activityDate}
            onSelectedDateChanged={(date) => handleDateChange(date)}
          />
        </div>

        <div className="my-4">
          <Label
            htmlFor="crop"
            value="Name of crop"
            className="my-2 font-semibold"
          />

          <Select id="crop" required name="cropName" defaultValue="">
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
            type="number"
            required
            placeholder="Kilo of seeds planted"
            name="kilosPlanted"
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
            type="number"
            required
            placeholder="Enter land size covered"
            id="size"
            name="landSizeCovered"
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
            placeholder="Enter contact of supervisor"
            id="contact"
            name="supervisorContact"
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
            name="supervisorQualification"
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
    </div>
  );
};

export default PlantingForm;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const formData = {
    farmId: Number(params.farmId),
    cropName: data.get("cropName"),
    kilosPlanted: Number(data.get("kilosPlanted")),
    landSizeCovered: Number(data.get("landSizeCovered")),
    supervisorName: data.get("supervisorName"),
    supervisorContact: data.get("supervisorContact"),
    supervisorQualification: data.get("supervisorQualification"),
    activityDate: data.get("activityDate"),
  };

  console.log("Form data:", formData);

  const response = await axiosbaseURL.post("/farm/activity/planting", formData);
  console.log("response for planting", response);

  if (
    response.status === 401 ||
    response.status === 404 ||
    response.status === 500 ||
    response.status === 400
  ) {
    console.log(response.data);
    throw json({ message: "Could not save data." });
  }
  toast.success("Planting  data submitted successfully!");
  return redirect("/app/farms");
};
