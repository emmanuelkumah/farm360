import React, { useState, useEffect } from "react";
import {
  Button,
  Label,
  TextInput,
  Radio,
  FileInput,
  Select,
  Datepicker,
} from "flowbite-react";
import { Form, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { BiHome, BiMap, BiPhone } from "react-icons/bi";
import {
  groups,
  crops,
  updateFarmerDetails,
  createFarmer,
} from "../../data/dummyData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { redirect } from "react-router-dom";
import axios from "axios";
import { getAuthToken } from "../../utils/auth";

const FarmerForm = ({ farmer, method }) => {
  let navigate = useNavigate();
  const [token, setToken] = useState(getAuthToken());
  const [regionId, setRegionId] = useState(null);
  const [regions, setRegions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [districtId, setDistrictId] = useState(null);
  const [communities, setCommunities] = useState([]);
  const [addFarms, setAddFarms] = useState(false);
  const [birthDate, setBirthDate] = useState(farmer);

  const date = new Date("2010-01-30");
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);
  console.log(token);

  useEffect(() => {
    if (token) {
      getRegions();
    }
  }, []);

  useEffect(() => {
    if (regionId) {
      fetchDistricts(regionId);
    }
  }, [regionId]);

  useEffect(() => {
    if (districtId) {
      fetchCommunities(districtId);
    }
  }, [districtId]);

  const handleDateChange = (date) => {
    setBirthDate({ ...birthDate, dateOfBirth: date });
  };

  const getRegions = async () => {
    try {
      const response = await axios.get(
        "https://dev.bjlfarmersmarket.net/geo/regions",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "X-Origin": "WEB",
          },
        }
      );
      setRegions(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchDistricts = async (regionId) => {
    try {
      const response = await axios.get(
        `https://dev.bjlfarmersmarket.net/geo/${regionId}/districts`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "X-Origin": "WEB",
          },
        }
      );
      setDistricts(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchCommunities = async (districtId) => {
    try {
      const response = await axios.get(
        `https://dev.bjlfarmersmarket.net/geo/${districtId}/communities`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "X-Origin": "WEB",
          },
        }
      );
      setCommunities(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleRegionChange = (e) => {
    const id = e.target.value;
    setRegionId(id);
  };
  const handleDistrictChange = (e) => {
    const id = e.target.value;
    console.log(id);
    setDistrictId(id);
  };

  const handleGoBack = () => {
    navigate("/app/farmers");
  };

  return (
    <>
      <div className="bg-secondary w-full md:w-1/2 h-[100%] rounded-lg shadow-md container mx-auto">
        <div className="mx-14 py-4">
          <Button
            className="bg-main mt-10  text-secondary hover:text-slate-100 hover:bg-main"
            onClick={handleGoBack}
          >
            Go Back
          </Button>
        </div>

        <section className="flex flex-col justify-center items-center">
          <Form className="w-[80vw] md:w-[80%] my-4 " method={method}>
            <div className="grid grid-cols-1 gap-4 md:gap-10">
              <section>
                <h2 className="text-xl text-main border-l-4 border-main pl-2 mb-4">
                  {farmer ? "Edit Farmer Details" : "Capture Farmer Details"}
                </h2>
                <div className="flex flex-col md:flex-row md:justify-evenly">
                  <fieldset className="flex flex-col md:flex-row gap-4">
                    <legend className="font-semibold mb-4"> Gender</legend>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="male"
                        name="gender"
                        defaultValue="Male"
                        required
                        defaultChecked={farmer && farmer.gender === "Male"}
                      />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="female"
                        name="gender"
                        defaultValue="Female"
                        defaultChecked={farmer && farmer.gender === "Female"}
                        required
                      />
                      <Label htmlFor="female">Female</Label>
                    </div>
                  </fieldset>
                  <div>
                    <div className="mb-2">
                      <Label
                        className="font-semibold"
                        htmlFor="file-upload"
                        value="Select picture"
                      />
                    </div>
                    <FileInput
                      id="file-upload"
                      accept="image/*"
                      name="picture"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <div>
                    <div className="my-2 block">
                      <Label
                        htmlFor="firstName"
                        value="First name"
                        className="font-semibold"
                      />
                    </div>
                    <TextInput
                      id="firstName"
                      type="text"
                      icon={FaRegUserCircle}
                      defaultValue={farmer ? farmer.firstName : ""}
                      placeholder="Enter firstname"
                      name="firstName"
                      required
                    />
                  </div>
                  <div>
                    <div className="my-2 block">
                      <Label
                        htmlFor="lastName"
                        value="Last name"
                        className="font-semibold"
                      />
                    </div>
                    <TextInput
                      id="lastName"
                      type="text"
                      icon={FaRegUserCircle}
                      placeholder="Enter last name"
                      defaultValue={farmer ? farmer.lastName : ""}
                      name="lastName"
                      required
                    />
                  </div>
                  <div>
                    <div className="my-2 block">
                      <Label
                        htmlFor="address"
                        value="Home address"
                        className="font-semibold"
                      />
                    </div>
                    <TextInput
                      id="address"
                      type="text"
                      icon={BiHome}
                      name="address"
                      defaultValue={farmer ? farmer.address : ""}
                      placeholder="Enter home address"
                      required
                    />
                  </div>
                  <div>
                    <div className="my-2 block">
                      <Label
                        htmlFor="GPS"
                        value="GPS Address"
                        className="font-semibold"
                      />
                    </div>
                    <TextInput
                      id="GPS"
                      type="text"
                      icon={BiMap}
                      placeholder="Enter GPS"
                      name="gps"
                      defaultValue={farmer ? farmer.gps : ""}
                      required
                    />
                  </div>
                  <div>
                    <div className="my-2 block">
                      <Label
                        htmlFor="contact"
                        value="Contact"
                        className="font-semibold"
                      />
                    </div>
                    <TextInput
                      id="contact"
                      type="number"
                      icon={BiPhone}
                      maxLength="10"
                      name="contact"
                      defaultValue={farmer ? farmer.contact : ""}
                      placeholder="Enter contact"
                      required
                    />
                  </div>
                  <div>
                    <div className="my-2 block">
                      <Label
                        htmlFor="dob"
                        value="Date of birth"
                        className="font-semibold"
                      />
                    </div>
                    {farmer ? (
                      <Datepicker
                        name="dateOfBirth"
                        value={farmer && farmer.dateOfBirth}
                        onSelectedDateChanged={(date) => handleDateChange(date)}
                      />
                    ) : (
                      <Datepicker
                        name="dateOfBirth"
                        maxDate={new Date(2010, 1, 30)}
                      />
                    )}
                  </div>
                  <div>
                    <div className="my-2 block">
                      <Label
                        htmlFor="region"
                        value="Region"
                        className="font-semibold"
                      />
                    </div>
                    <Select
                      id="region"
                      required
                      name="region"
                      defaultValue={farmer ? farmer.region : ""}
                      onChange={handleRegionChange}
                    >
                      <option>Select region</option>
                      {regions.map((region) => (
                        <option value={region.id} key={region.id}>
                          {region.name}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>
                <div>
                  <div className="my-2 block">
                    <Label
                      htmlFor="district"
                      value="District"
                      className="font-semibold"
                    />
                  </div>
                  <Select
                    id="district"
                    required
                    className="w-full"
                    name="district"
                    defaultValue={farmer ? farmer.district : ""}
                    onChange={handleDistrictChange}
                  >
                    <option>Select District</option>
                    {districts.map((district) => (
                      <option value={district.id} key={district.id}>
                        {district.name}
                      </option>
                    ))}
                  </Select>
                </div>
                <div>
                  <div>
                    <div className="my-2 block">
                      <Label
                        htmlFor="district"
                        value="Commnuity"
                        className="font-semibold"
                      />
                    </div>
                    <Select
                      id="district"
                      required
                      className="w-full"
                      name="district"
                      defaultValue={farmer ? farmer.community : ""}
                    >
                      <option>Select Community</option>
                      {communities.map((community) => (
                        <option value={community.id} key={community.id}>
                          {community.name}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>
                <fieldset className="flex max-w-md flex-col gap-4">
                  <legend className="mb-4 font-semibold">
                    Choose farmer type
                  </legend>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="farmer"
                      name="type"
                      defaultChecked={farmer && farmer.type === "farmer"}
                      defaultValue="farmer"
                      required
                    />
                    <Label htmlFor="farmer">farmer</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="processor"
                      name="type"
                      defaultChecked={farmer && farmer.type === "Processor"}
                      defaultValue="Processor"
                      required
                    />
                    <Label htmlFor="processor">Processor</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="farmerProcessor"
                      name="type"
                      defaultChecked={
                        farmer && farmer.type === "Farmer and Processor"
                      }
                      defaultValue="Farmer and Processor"
                      required
                    />
                    <Label htmlFor="farmerProcessor">
                      Both(farmer & Processor)
                    </Label>
                  </div>
                </fieldset>
                <div>
                  <div className="my-2 block">
                    <Label
                      className="font-semibold"
                      htmlFor="group"
                      value="Select farmer group"
                    />
                  </div>
                  <Select
                    id="group"
                    required
                    className="w-full"
                    name="group"
                    defaultValue={farmer ? farmer.group : ""}
                  >
                    <option>group</option>
                    {groups.map((group) => (
                      <option value={group.name} key={group.id}>
                        {group.name}
                      </option>
                    ))}
                  </Select>
                </div>
                <Button type="submit" className="mt-4 w-[100%] bg-main">
                  Save Details
                </Button>
              </section>
            </div>
          </Form>
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default FarmerForm;

export const action = async ({ request, params }) => {
  const method = request.method;
  const data = await request.formData();
  // const token = getAuthToken();

  //check the method
  if (method === "PATCH") {
    //const id = params.farmerId;
    let updateData = {
      id: params.farmerId,
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      gender: data.get("gender"),
      picture: data.get("picture"),
      address: data.get("address"),
      gps: data.get("gps"),
      contact: data.get("contact"),
      dateOfBirth: data.get("dateOfBirth"),
      region: data.get("region"),
      district: data.get("district"),
      community: data.get("community"),
      type: data.get("type"),
      group: data.get("group"),
    };
    updateFarmerDetails(updateData);
  }
  //use axios.post and send the data in the body
  if (method === "POST") {
    let enteredFarmerData = {
      id: Math.floor(Math.random() * 1000),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      gender: data.get("gender"),
      picture: data.get("picture"),
      address: data.get("address"),
      gps: data.get("gps"),
      contact: data.get("contact"),
      dateOfBirth: data.get("dateOfBirth"),
      region: data.get("region"),
      district: data.get("district"),
      community: data.get("community"),
      type: data.get("type"),
      group: data.get("group"),
    };
    // const response = await axios.post(
    //   "http://18.134.98.183:8080/farmer",
    //   enteredFarmerData,
    //   {
    //     headers: {
    //       "X-Origin": "WEB",
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }
    // );
    // console.log(response);
    console.log(enteredFarmerData);
    createFarmer(enteredFarmerData);
  }
  return redirect("..");
};
