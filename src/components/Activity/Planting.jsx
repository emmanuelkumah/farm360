import React, { useState } from "react";
import { Button, Select, Label, TextInput, Datepicker } from "flowbite-react";
import { useParams } from "react-router-dom";
import { useActivitiesContext } from "../../context/FarmersProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Planting = () => {
  const { farmId } = useParams();
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
    <div>
      <h2 className="mb-2 text-xl">Planting Activities</h2>
      <form
        className="flex max-w-md flex-col gap-4"
        onSubmit={onPlantingActivitiesSubmit}
      >
        <div>
          <Label htmlFor="planting" className="font-semibold my-2">
            Date of planting
          </Label>
          <Datepicker
            id="planting"
            name="plantingDate"
            value={plantingActivities.plantingDate}
            placeholder="Select planting date"
            maxDate={new Date()}
            onSelectedDateChanged={(date) =>
              handlePlantingDate("plantingDate", date)
            }
          />
        </div>

        <div>
          <Label
            htmlFor="crop"
            value="Name of crop"
            className="my-2 font-semibold"
          />

          <Select
            id="crop"
            required
            value={plantingActivities.cropPlanted}
            name="cropPlanted"
            onChange={handlePlantingActivities}
          >
            <option>Select name of crop</option>
            <option value="soya">Soya</option>
            <option value="cowpea">Cowpea</option>
            <option value="groundnut">Groundnut</option>
          </Select>
        </div>
        <div>
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
            value={plantingActivities.kiloPlanted}
            onChange={handlePlantingActivities}
          />
        </div>
        <div>
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
            value={plantingActivities.landsizeCovered}
            onChange={handlePlantingActivities}
          />
        </div>
        <div>
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
            value={plantingActivities.supervisor}
            onChange={handlePlantingActivities}
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
            value={plantingActivities.contact}
            onChange={handlePlantingActivities}
          />
        </div>
        <div>
          <Label
            htmlFor="cert"
            value="Certificate"
            className="my-2 font-semibold"
          />

          <Select
            id="cert"
            required
            name="certificate"
            value={plantingActivities.certificate}
            onChange={handlePlantingActivities}
          >
            <option>Select certificate of supervisor</option>
            <option value="MOFA">MOFA</option>
            <option value="EPS">EPA</option>
            <option value="PPRSD/NPPO">PPRSD/NPPO</option>
            <option value="others">Others</option>
          </Select>
        </div>
        {plantingActivities.certificate === "others" && (
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
              name="otherCertificate"
              value={plantingActivities.otherCertificate}
              onChange={handlePlantingActivities}
            />
          </div>
        )}

        <Button type="submit">Submit</Button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Planting;
