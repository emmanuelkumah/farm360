import React, { useState } from "react";
import { Button, Label, TextInput, Select, Datepicker } from "flowbite-react";
import { useParams, Form } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { createPestControlActivities } from "../../data/dummyData";
import ActivityHeading from "../ActivityHeading";
import BackButton from "../BackButton";

const PestControlForm = () => {
  const [showStage, setShowStage] = useState(false);

  const [showOtherCert, setShowOtherCert] = useState(false);

  const { farmId } = useParams();

  const handleSelectCropStage = () => {
    setShowStage(true);
  };
  const handleSelectCert = (e) => {
    const value = e.target.value;
    if (value === "Others") {
      setShowOtherCert(!showOtherCert);
    } else {
      setShowOtherCert(false);
    }
  };

  return (
    <div className="container mx-auto">
      <BackButton />
      <ActivityHeading activityHeading="Key Data Entry" />
      <Form className="container mx-auto w-full md:w-[70%]" method="post">
        <div>
          <Label
            htmlFor="stage"
            value="Crop stage"
            className="my-2 font-semibold"
          />

          <Select
            id="stage"
            required
            onChange={handleSelectCropStage}
            name="stage"
            defaultValue=""
          >
            <option>Select stage of crop</option>
            <option value="Early stage">Early stage</option>
            <option value="Growing stage">Growing stage</option>
            <option value="Preharvesting stage">Preharvesting stage</option>
          </Select>
        </div>
        {showStage && (
          <section>
            <div className="my-2">
              <Label htmlFor="date" className="font-semibold my-2">
                Date
              </Label>
              <Datepicker
                id="date"
                name="date"
                maxDate={new Date()}
                defaultValue={new Date()}
              />
            </div>
            <div className="my-2">
              <Label htmlFor="chemical" className="font-semibold my-2">
                Name of chemical
              </Label>
              <TextInput
                id="chemical"
                type="text"
                placeholder="Enter the name of chemical"
                name="chemical"
                defaultValue=""
              />
            </div>
            <div className="my-2">
              <Label htmlFor="entry" className="font-semibold my-2">
                Rate of application
              </Label>
              <TextInput
                id="entry"
                type="text"
                placeholder="Enter the rate of application"
                name="rate"
                defaultValue=""
              />
            </div>
          </section>
        )}

        <section>
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
          <div>
            <Label
              htmlFor="cert"
              value="Certificate"
              className="my-2 font-semibold"
            />

            <Select
              id="cert"
              required
              onChange={handleSelectCert}
              name="certificate"
              defaultValue=""
            >
              <option>Select certificate of supervisor</option>
              <option value="MOFA">MOFA</option>
              <option value="EPA">EPA</option>
              <option value="PPRSD/NPPO">PPRSD/NPPO</option>
              <option value="Others">Others</option>
            </Select>
          </div>
          {showOtherCert && (
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
        </section>

        <Button className="w-full mt-10" type="submit">
          Save
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default PestControlForm;

export const action = async ({ request }) => {
  const data = await request.formData();
  const pestControldata = {
    stage: data.get("stage"),
    date: data.get("date"),
    chemical: data.get("chemical"),
    rate: data.get("rate"),
    supervisor: data.get("supervisor"),
    certificate: data.get("certificate"),
    otherCert: data.get("otherCert"),
    contact: data.get("contact"),
  };
  createPestControlActivities(pestControldata);

  return null;
};
