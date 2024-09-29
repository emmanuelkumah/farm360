import {
  Button,
  Label,
  TextInput,
  FileInput,
  Datepicker,
  Select,
} from "flowbite-react";
import { toast } from "react-toastify";
import { axiosbaseURL } from "../../api/axios";
import { Form, redirect } from "react-router-dom";
import ActivityHeading from "../ActivityHeading";
import BackButton from "../BackButton";
import { useState } from "react";

const TransportationForm = () => {
  const [activityDate, setActivityDate] = useState("");
  const [hasMechanicalType, setHasMechanicalType] = useState(false);

  const handleActivityDateChange = (date) => {
    const formattedDate = date.toISOString(); // Formats to "YYYY-MM-DD"
    setActivityDate(formattedDate);
  };
  const handleSelectTransportation = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Mechanical") {
      setHasMechanicalType(!hasMechanicalType);
    } else {
      setHasMechanicalType(false);
    }
  };
  return (
    <div className="container mx-auto">
      <BackButton />
      <ActivityHeading activityHeading="Key Data Entry For Transportation" />
      <Form className="container mx-auto w-full md:w-[70%]" method="post">
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
              Quantity
            </Label>
            <TextInput
              id="quantity"
              type="text"
              placeholder="Enter quantity "
              name="quantity"
              defaultValue=""
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
            <Select onChange={handleSelectTransportation} name="transportation">
              <option>Select mode of transportation</option>
              <option value="Manual">Manual</option>
              <option value="Mechanical">Mechanical</option>
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
                  name="driver"
                  defaultValue=""
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
                  name="license"
                  defaultValue=""
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
                  name="registration"
                  defaultValue=""
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
                  name="trips"
                  defaultValue=""
                />
              </div>
            </section>
          )}
        </section>

        <Button className="w-full my-4" type="submit">
          Save
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
    transportation: data.get("transportation"),
    driver: data.get("driver"),
    license: data.get("license"),
    registration: data.get("registration"),
    trips: data.get("trips"),
  };
  console.log(formData);

  // const response = await axiosbaseURL.post(
  //   "/farm/activity/transportation",
  //   formData
  // );
  // console.log("storage response", response);
  // if (
  //   response.status === 401 ||
  //   response.status === 404 ||
  //   response.status === 500 ||
  //   response.status === 400
  // ) {
  //   throw json({ message: "Could not save data." });
  // }
  toast.success("Transportation  data submitted successfully!");
  return redirect("/app/farms");
};
