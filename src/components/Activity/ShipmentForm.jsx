import {
  Button,
  Label,
  TextInput,
  FileInput,
  Datepicker,
} from "flowbite-react";
import { toast } from "react-toastify";
import { axiosbaseURL } from "../../api/axios";
import { Form, redirect } from "react-router-dom";
import ActivityHeading from "../ActivityHeading";
import BackButton from "../BackButton";
import { useState } from "react";

const ShipmentForm = () => {
  const [activityDate, setActivityDate] = useState("");

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString();
    setActivityDate(formattedDate);
  };
  return (
    <div className="container mx-auto">
      <BackButton />
      <ActivityHeading activityHeading="Key Data Entry For Shipment" />
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
              Upload copy of certificate
            </Label>

            <FileInput
              id="certificate"
              name="certificateUrl"
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
    certificateUrl: "https://example.com/certificates/12345",
    modeOfPackaging: data.get("modeOfPackaging"),
    kilosPerPackage: Number(data.get("kilosPerPackage")),
  };
  console.log("form", formData);
  const response = await axiosbaseURL.post("/farm/activity/shipment", formData);
  console.log("shipment response", response);

  if (
    response.status === 401 ||
    response.status === 404 ||
    response.status === 500 ||
    response.status === 400
  ) {
    console.log(response.data);
    throw json({ message: "Could not save data." });
  }
  toast.success("Shipment  data submitted successfully!");
  return redirect("/app/farms");
};
