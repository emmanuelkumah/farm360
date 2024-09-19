import React, { useState, useEffect } from "react";
import { Button, Select, Label, TextInput, Datepicker } from "flowbite-react";
import { useParams, Form, redirect, json } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { farmsData } from "../../data/dummyData";
import { axiosbaseURL } from "../../api/axios";
import ActivityHeading from "../ActivityHeading";
import BackButton from "../BackButton";

const WeedControlForm = ({ id }) => {
  const [activityDate, setActivityDate] = useState("");
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

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString(); // Formats to "YYYY-MM-DD"
    setActivityDate(formattedDate);
  };
  return (
    <div>
      <div className="container mx-auto">
        <BackButton />
        <ActivityHeading activityHeading="Key Data Entries For Weed Control" />
        <Form className="container mx-auto w-full md:w-[70%]" method="post">
          <div className="my-4">
            <Label htmlFor="weed" className="font-semibold my-2">
              Date of weed control
            </Label>
            <Datepicker
              id="weed"
              name="activityDate"
              placeholder="Select date of weed control"
              maxDate={new Date()}
              dateFormat="yyyy-MM-dd"
              value={activityDate}
              onSelectedDateChanged={(date) => handleDateChange(date)}
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
              <option value="MANUAL">Manual</option>
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
                name="chemicalName"
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
              name="chemicalApplicationRate"
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
              type="text"
              required
              placeholder="Enter name of supervisor"
              id="contact"
              name="supervisorContact"
              defaultValue=""
              helperText={
                <>
                  <p>Prefix phone number with 233 Eg.233244555333</p>
                </>
              }
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

export default WeedControlForm;

export const action = async ({ request, params }) => {
  const data = await request.formData();
  const formData = {
    farmId: Number(params.farmId),
    weedControlMethod: data.get("weedControlMethod"),
    chemicalApplicationRate: Number(data.get("chemicalApplicationRate")),
    chemicalName: "Pesticides",
    supervisorName: data.get("supervisorName"),
    supervisorContact: data.get("supervisorContact"),
    supervisorQualification: data.get("supervisorQualification"),
    activityDate: data.get("activityDate"),
  };

  const response = await axiosbaseURL.post(
    "/farm/activity/weed-control",
    formData
  );
  console.log("weed response", response);

  if (
    response.status === 401 ||
    response.status === 404 ||
    response.status === 500 ||
    response.status === 400
  ) {
    console.log(response.data);
    throw json({ message: "Could not save data." });
  }
  toast.success("Weedcontrol  data submitted successfully!");
  return redirect("/app/farms");
};
