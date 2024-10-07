import {
  Button,
  Label,
  TextInput,
  FileInput,
  Datepicker,
  Alert,
} from "flowbite-react";
import { toast } from "react-toastify";
import { axiosbaseURL } from "../../api/axios";
import { Form, redirect, useActionData } from "react-router-dom";
import ActivityHeading from "../ActivityHeading";
import BackButton from "../BackButton";
import { useState } from "react";
import { HiInformationCircle } from "react-icons/hi";

const ShipmentForm = () => {
  const [activityDate, setActivityDate] = useState("");

  const errors = useActionData();
  const errorMessage = errors?.data;

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString();
    setActivityDate(formattedDate);
  };
  return (
    <div className="container mx-auto">
      <BackButton />
      <ActivityHeading activityHeading="Key Data Entry For Shipment" />
      {errors ? (
        <Alert color="failure" icon={HiInformationCircle} className="max-w-2xl">
          <span className="font-medium">Info alert!</span>
          <p>{`${errorMessage.code} - ${errorMessage.message}`}</p>
        </Alert>
      ) : null}
      <Form className="container mx-auto w-full md:w-[70%]" method="post">
        <section>
          <div className="my-2">
            <Label htmlFor="exit" className="font-semibold my-2">
              Date of exit
            </Label>
            <Datepicker
              id="exit"
              placeholder="select shipment date"
              name="dateOfExit"
              maxDate={new Date()}
              value={activityDate}
              onSelectedDateChanged={(date) => handleDateChange(date)}
              required
            />
          </div>
          <div className="my-2">
            <Label htmlFor="country" className="font-semibold my-2">
              Destination Country
            </Label>
            <TextInput
              id="country"
              type="text"
              placeholder="Enter destination country"
              name="destinationCountry"
              defaultValue=""
              required
            />
          </div>
          <div className="my-2">
            <Label htmlFor="entry" className="font-semibold my-2">
              Port of entry
            </Label>
            <TextInput
              id="entry"
              type="text"
              placeholder="Port of entry"
              name="portOfEntry"
              defaultValue=""
              required
            />
          </div>
          <div className="my-2">
            <Label htmlFor="exit" className="font-semibold my-2">
              Port of exit
            </Label>
            <TextInput
              id="exit"
              type="text"
              placeholder="Port of exit"
              name="portOfExit"
              defaultValue=""
              required
            />
          </div>
        </section>
        <section>
          <h4>Customer information</h4>

          <div className="my-2">
            <Label htmlFor="name" className="font-semibold my-2">
              Name
            </Label>
            <TextInput
              id="name"
              type="text"
              placeholder="Enter customer name"
              name="customerName"
              defaultValue=""
              required
            />
          </div>
          <div className="my-2">
            <Label htmlFor="entry" className="font-semibold my-2">
              Contact
            </Label>
            <TextInput
              id="entry"
              type="number"
              placeholder="Enter contact"
              name="customerContact"
              defaultValue=""
              required
            />
          </div>
          <div className="my-2">
            <Label htmlFor="exit" className="font-semibold my-2">
              Address
            </Label>
            <TextInput
              id="exit"
              type="text"
              placeholder="Enter address"
              name="customerAddress"
              defaultValue=""
              required
            />
          </div>
        </section>
        <section>
          <h4>Certification</h4>
          <div className="my-2">
            <Label htmlFor="certificate" className="font-semibold my-2">
              Shipment Certificate
            </Label>

            <TextInput
              id="certificate"
              type="url"
              name="certificateUrl"
              placeholder="Enter the url to the certificate"
              defaultValue=""
              required
            />
          </div>
        </section>
        <section>
          <h4>Packaging</h4>
          <div className="my-2">
            <Label htmlFor="mode" className="font-semibold my-2">
              Mode of packaging
            </Label>
            <TextInput
              id="mode"
              placeholder="Enter mode of packaging"
              type="text"
              name="modeOfPackaging"
              defaultValue=""
              required
            />
          </div>
          <div className="my-2">
            <Label htmlFor="mode" className="font-semibold my-2">
              Number of kilos per package
            </Label>
            <TextInput
              id="mode"
              placeholder="Enter number of kilos per package"
              type="number"
              name="kilosPerPackage"
              defaultValue=""
              required
            />
          </div>
        </section>

        <Button className="w-full" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default ShipmentForm;

export const action = async ({ request, params }) => {
  const data = await request.formData();

  const formData = {
    farmId: Number(params.farmId),
    dateOfExit: data.get("dateOfExit"),
    destinationCountry: data.get("destinationCountry"),
    portOfEntry: data.get("portOfEntry"),
    portOfExit: data.get("portOfExit"),
    customerName: data.get("customerName"),
    customerContact: data.get("customerContact"),
    customerAddress: data.get("customerAddress"),
    certificateUrl: data.get("certificateUrl"),
    modeOfPackaging: data.get("modeOfPackaging"),
    kilosPerPackage: Number(data.get("kilosPerPackage")),
  };
  try {
    const response = await axiosbaseURL.post(
      "/farm/activity/shipment",
      formData
    );
    toast.success("Sales  data submitted successfully!");
    return redirect("/app/farms");
  } catch (error) {
    return error.response;
  }
};
