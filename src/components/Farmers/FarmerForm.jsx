import React, { useState, useEffect } from "react";
import {
  Button,
  Label,
  TextInput,
  Radio,
  FileInput,
  Select,
  Datepicker,
  Alert,
} from "flowbite-react";
import { Form, useNavigation } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { BiHome, BiPhone } from "react-icons/bi";
import { HiInformationCircle } from "react-icons/hi";
import { getAuthToken } from "../../utils/auth";
import { axiosbaseURL } from "../../api/axios";
import BackButton from "../BackButton";

const FarmerForm = ({ farmer, errors }) => {
  const [token, setToken] = useState(getAuthToken());
  const [regionId, setRegionId] = useState(null);
  const [regions, setRegions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [districtId, setDistrictId] = useState(null);
  const [communities, setCommunities] = useState([]);
  const [communityId, setCommunityId] = useState(null);
  const [group, setGroup] = useState([]);

  const [dateOfBirth, setDateOfBirth] = useState("");
  const [birthDate, setBirthDate] = useState(farmer);

  const navigation = useNavigation();

  const errorMessage = errors?.data;

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

  useEffect(() => {
    if (communityId) {
      fetchGroup();
    }
  }, [communityId]);

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split("T")[0]; // Formats to "YYYY-MM-DD"
    setDateOfBirth(formattedDate);
  };

  const getRegions = async () => {
    try {
      const response = await axiosbaseURL.get("geo/regions");
      setRegions(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchDistricts = async (regionId) => {
    try {
      const response = await axiosbaseURL.get(`geo/${regionId}/districts`);
      setDistricts(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchCommunities = async (districtId) => {
    try {
      const response = await axiosbaseURL.get(`geo/${districtId}/communities`);
      setCommunities(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchGroup = async () => {
    try {
      const response = await axiosbaseURL.get("farmer/groups");
      setGroup(response.data);
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
    setDistrictId(id);
  };
  const handleCommunityChange = (e) => {
    const id = e.target.value;
    setCommunityId(id);
  };

  return (
    <>
      <div className="bg-secondary w-full md:w-1/2 h-[100%] rounded-lg shadow-md container mx-auto">
        <div className="mx-14 py-4">
          <BackButton />
        </div>

        <section className="flex flex-col justify-center items-center">
          {errors ? (
            <Alert
              color="failure"
              icon={HiInformationCircle}
              className="max-w-2xl"
            >
              <span className="font-medium">Info alert!</span>
              <p>{`${errorMessage.code} - ${errorMessage.message}`}</p>
            </Alert>
          ) : null}
          <Form className="w-[80vw] md:w-[80%] my-4 " method="post">
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
                        defaultValue="MALE"
                        required
                        defaultChecked={farmer && farmer.gender === "Male"}
                      />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="female"
                        name="gender"
                        defaultValue="FEMALE"
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
                      name="homeAddress"
                      defaultValue={farmer ? farmer.address : ""}
                      placeholder="Enter home address"
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
                      maxLength="12"
                      name="phone"
                      defaultValue={farmer ? farmer.contact : ""}
                      placeholder="Prefix contact with 233"
                      required
                      helperText={<>Contact format: 233244123456</>}
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
                        value={dateOfBirth}
                        dateFormat="yyyy-MM-dd"
                        onSelectedDateChanged={(date) => handleDateChange(date)}
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
                      name="regionId"
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
                    name="districtId"
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
                        htmlFor="community"
                        value="community"
                        className="font-semibold"
                      />
                    </div>
                    <Select
                      id="community"
                      required
                      name="communityId"
                      defaultValue={farmer ? farmer.community : ""}
                      onChange={handleCommunityChange}
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
                      id="collector"
                      name="farmerType"
                      defaultValue="COLLECTOR"
                      required
                    />
                    <Label htmlFor="collector">Collector</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="processor"
                      name="farmerType"
                      defaultValue="PROCESSOR"
                      required
                    />
                    <Label htmlFor="processor">Processor</Label>
                  </div>
                </fieldset>
                <fieldset className="flex max-w-md flex-col gap-4">
                  <legend className="mb-4 font-semibold">
                    Choose crop type
                  </legend>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="farmer"
                      name="cropType"
                      defaultValue="SOYA"
                      required
                    />
                    <Label htmlFor="farmer">Soya</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="cropType"
                      name="cropType"
                      defaultValue="SHEA"
                      disabled
                      required
                    />
                    <Label htmlFor="shea">Shea </Label>
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
                    name="groupId"
                    defaultValue={farmer ? farmer.group : ""}
                  >
                    <option>group</option>
                    {group.map((group) => (
                      <option value={Number(group.id)} key={group.id}>
                        {group.name}
                      </option>
                    ))}
                  </Select>
                </div>
                <Button type="submit" className="mt-4 w-[100%] bg-main">
                  {navigation.state === "submitting"
                    ? "Submitting data..."
                    : "Save details"}
                </Button>
              </section>
            </div>
          </Form>
        </section>
      </div>
    </>
  );
};

export default FarmerForm;
