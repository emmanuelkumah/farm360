import React, { useState } from "react";
import { Button, Select, Label, TextInput, Datepicker } from "flowbite-react";
import { useParams, Form } from "react-router-dom";
import { useActivitiesContext } from "../../context/FarmersProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Planting = () => {
  const { farmId } = useParams();

  const defaultValue = new Date();

  const { activitiesState, dispatchActivity } = useActivitiesContext();
  const [plantingActivities, setPlantingActivities] = useState({
    plantingDate: "",
    cropPlanted: "",
    kiloPlanted: "",
    landsizeCovered: "",
    supervisor: "",
    contact: "",
    certificate: "",
    otherCertificate: "",
  });
  const handlePlantingDate = (activity, date) => {
    setPlantingActivities({
      ...plantingActivities,
      [activity]: date.toISOString().split("T")[0],
    });
  };

  const handlePlantingActivities = (e) => {
    const { name, value } = e.target;
    setPlantingActivities({
      ...plantingActivities,
      [name]: value,
    });
  };

  const onPlantingActivitiesSubmit = (e) => {
    e.preventDefault();
    dispatchActivity({
      type: "Add_PlantingActivity",
      payload: { farmId, ...plantingActivities },
    });
    setPlantingActivities({
      plantingDate: "",
      cropPlanted: "",
      kiloPlanted: "",
      landsizeCovered: "",
      supervisor: "",
      contact: "",
      certificate: "",
      otherCertificate: "",
    });
    toast.success("Planting activities submitted successfully!");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="mb-2 text-xl">Planting Activities</h2>
      <Form className="w-full md:w-[70%]" method="post">
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

          <Select id="cert" required name="certificate" defaultValue="">
            <option>Select certificate of supervisor</option>
            <option value="MOFA">MOFA</option>
            <option value="EPS">EPA</option>
            <option value="PPRSD/NPPO">PPRSD/NPPO</option>
            <option value="others">Others</option>
          </Select>
        </div>
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

        <Button type="submit" className="my-4 w-full md:w-[50%] bg-main">
          Submit planting activities
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default Planting;
