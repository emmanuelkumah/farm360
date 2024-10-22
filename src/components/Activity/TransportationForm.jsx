import {
  Button,
  Label,
  TextInput,
  FileInput,
  Datepicker,
  Select,
  Alert,
} from "flowbite-react";
import { toast } from "react-toastify";
import { HiInformationCircle } from "react-icons/hi";

import { axiosbaseURL } from "../../api/axios";
import { Form, redirect, useActionData } from "react-router-dom";
import ActivityHeading from "../ActivityHeading";
import BackButton from "../BackButton";
import { useEffect, useState } from "react";

const TransportationForm = ({ method, data }) => {
  const [activityDate, setActivityDate] = useState("");
  const [hasMechanicalType, setHasMechanicalType] = useState(false);
  const [transportMeans, setTransportMeans] = useState("");
  const [hasTransportMeans, setHasTransportMeans] = useState(false);
  const errors = useActionData();
  const errorMessage = errors?.data;

  console.log(data);
  useEffect(() => {
    if (data) {
      setActivityDate(data.activityDate);
      displayTransportMode(data.transportationMethod);
    }
  }, []);

  const displayTransportMode = (means) => {
    if (means === "MECHANICAL") {
      setHasMechanicalType(true);
      setTransportMeans(means);
    } else {
      setTransportMeans("MANUAL");
      setHasMechanicalType(false);
    }
  };
  const handleActivityDateChange = (date) => {
    const formattedDate = date.toISOString(); // Formats to "YYYY-MM-DD"
    setActivityDate(formattedDate);
  };
  const handleSelectTransportation = (e) => {
    if (e.target.value === "MECHANICAL") {
      setTransportMeans(e.target.value);
      setHasMechanicalType(!hasMechanicalType);
    } else {
      setHasMechanicalType(false);
      setTransportMeans(e.target.value);
    }
  };
  return (
    <div className="container mx-auto">
      <BackButton />
      <ActivityHeading activityHeading="Key Data Entry For Transportation" />
      {errors ? (
        <Alert color="failure" icon={HiInformationCircle} className="max-w-2xl">
          <span className="font-medium">Info alert!</span>
          <p>{`${errorMessage.code} - ${errorMessage.message}`}</p>
        </Alert>
      ) : null}
      <Form className="container mx-auto w-full md:w-[70%]" method={method}>
        <section>
          <div className="my-2">
            <Label htmlFor="exit" className="font-semibold my-2">
              Date of transportation
            </Label>
            <Datepicker
              id="exit"
              placeholder="select date of transportation"
              name="activityDate"
              maxDate={new Date()}
              value={activityDate}
              onSelectedDateChanged={(date) => handleActivityDateChange(date)}
              required
            />
          </div>
          <div className="my-2">
            <Label htmlFor="quantity" className="font-semibold my-2">
              Quantity transported
            </Label>
            <TextInput
              id="quantity"
              type="text"
              placeholder="Enter quantity transported "
              name="quantityTransported"
              defaultValue={data ? data.quantityTransported : ""}
              required
            />
          </div>
        </section>
        <section>
          <h4>Mode of transportation</h4>

          <div className="my-2">
            <Label htmlFor="name" className="font-semibold my-2">
              Name
            </Label>
            <Select
              value={transportMeans}
              onChange={handleSelectTransportation}
              name="transportationMethod"
            >
              <option>Select mode of transportation</option>
              <option value="MANUAL">Manual</option>
              <option value="MECHANICAL">Mechanical</option>
            </Select>
          </div>
          {hasMechanicalType && (
            <section>
              <div className="my-2">
                <Label htmlFor="driver" className="font-semibold my-2">
                  Driver
                </Label>
                <TextInput
                  id="driver"
                  type="text"
                  placeholder="Enter driver name"
                  name="driversName"
                  defaultValue={data ? data.driversName : ""}
                />
              </div>
              <div className="my-2">
                <Label htmlFor="license" className="font-semibold my-2">
                  Driver license number
                </Label>
                <TextInput
                  id="license"
                  type="text"
                  placeholder="Enter driver license number"
                  name="driversLicenseNumber"
                  defaultValue={data ? data.driversLicenseNumber : ""}
                />
              </div>
              <div className="my-2">
                <Label htmlFor="registration" className="font-semibold my-2">
                  Vehicle registration number
                </Label>
                <TextInput
                  id="registration"
                  type="text"
                  placeholder="Enter vehicle registration  number"
                  name="vehicleRegistrationNumber"
                  defaultValue={data ? data.vehicleRegistrationNumber : ""}
                />
              </div>
              <div className="my-2">
                <Label htmlFor="trips" className="font-semibold my-2">
                  Enter number of bags per trips
                </Label>
                <TextInput
                  id="trips"
                  type="number"
                  placeholder="Enter number of trips"
                  name="numberOfBagsPerTrip"
                  defaultValue={data ? data.numberOfBagsPerTrip : ""}
                />
              </div>
            </section>
          )}
        </section>

        <Button className="w-full my-4" type="submit">
          Save activity
        </Button>
      </Form>
    </div>
  );
};

export default TransportationForm;
export const action = async ({ request, params }) => {
  const data = await request.formData();

  const formData = {
    farmId: Number(params.farmId),
    activityDate: data.get("activityDate"),

    quantityTransported: Number(data.get("quantityTransported")),
    transportationMethod: data.get("transportationMethod"),
    driversName: data.get("driversName"),
    driversLicenseNumber: data.get("driversLicenseNumber"),
    vehicleRegistrationNumber: data.get("vehicleRegistrationNumber"),
    numberOfBagsPerTrip: Number(data.get("numberOfBagsPerTrip")),
  };
  const method = request.method;
  const activityId = params.activityId;

  if (method === "PUT") {
    try {
      const response = await axiosbaseURL.put(
        `/farm/activity/transportation/${activityId}`,
        formData
      );
      toast.success("Transportation  data updated successfully!");
      return redirect("/app/farms");
    } catch (error) {
      console.log(error.response);
    }
  }

  try {
    const response = await axiosbaseURL.post(
      "/farm/activity/transportation",
      formData
    );

    toast.success("Transportation  data submitted successfully!");
    return redirect("/app/farms");
  } catch (error) {
    return error.response;
  }
};
