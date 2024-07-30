import React, { useState } from "react";
import { useFarmersContext } from "../../context/FarmersProvider";
import { useStateContext } from "../../context/ContextProvider";
import {
  Button,
  Modal,
  Label,
  TextInput,
  Radio,
  FileInput,
  Select,
  Datepicker,
} from "flowbite-react";
import { FaRegUserCircle } from "react-icons/fa";
import { BiHome, BiMap, BiPhone } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { regions, districts } from "../../data/dummyData";

const AddFarmerForm = () => {
  const { dispatch } = useFarmersContext();
  const [addFarms, setAddFarms] = useState(false);
  const [farmer, setFarmer] = useState({
    gender: "",
    picture: null,
    firstName: "",
    lastName: "",
    contact: "",
    homeAddress: "",
    gps: "",
    dateOfBirth: null,
    region: "",
    district: "",
    community: "",
    farmerType: null,
    cropType: null,
    farmerGroup: null,
    farmName: "",
    farmSize: "",
    farmRegion: "",
    farmDistrict: "",
    farmCommunity: "",
  });
  const [showDistricts, setShowDistricts] = useState([]);

  const getDistricts = (id) => {
    const result = districts.find((district) => district.regionId === id);
    setShowDistricts(result.listDistrict);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFarmer({ ...farmer, [name]: value });
  };
  const handleDateChange = (date) => {
    setFarmer({ ...farmer, dateOfBirth: date.toLocaleDateString() });
  };
  const handleRegionSelect = (e) => {
    setFarmer({ ...farmer, region: e.target.value });
    getDistricts(e.target.selectedIndex);
  };

  const handleCropType = (event) => {
    const { value } = event.target;
    setFarmer({
      ...farmer,
      cropType: value,
    });
  };
  const handleSelectGroup = (event) => {
    const { value } = event.target;
    setFarmer({
      ...farmer,
      farmerGroup: value,
    });
  };

  const handleImageChange = (e) => {
    const { name } = e.target;
    setFarmer({
      ...farmer,
      [name]: e.target.files[0],
    });
  };
  const handleAddFarmer = () => {
    dispatch({
      type: "ADD_FARMER",
      payload: { id: Math.floor(Math.random() * 1000000), ...farmer },
    });
    setOpenModal(false);
    setFarmer({
      firstName: "",
      lastName: "",
      contact: "",
      homeAddress: "",
      GPS: "",
      primaryFarm: "",
      secondFarm: "",
      thirdFarm: "",
    });
  };

  return (
    <>
      <h2 className="md:text-2xl text-green-500 font-bold my-4 border-l-4 pl-4 border-green-500">
        Add new farmer
      </h2>
      <div className="bg-white h-full rounded-lg shadow-md">
        <section className="flex flex-col justify-center items-center md:my-10">
          <form className="w-[80vw] md:w-[60vw] my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
              <section>
                <h2 className="text-green-500 font-bold md:text-2xl mb-4">
                  Farmer Details
                </h2>
                <div className="flex flex-col md:flex-row md:justify-evenly">
                  <fieldset className="flex flex-col md:flex-row gap-4">
                    <legend className="font-semibold mb-4"> Gender</legend>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="male"
                        name="gender"
                        value="Male"
                        onChange={handleInputChange}
                        required
                      />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="female"
                        name="gender"
                        value="Female"
                        onChange={handleInputChange}
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
                      onChange={handleImageChange}
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
                      value={farmer.firstName}
                      placeholder="Enter firstname"
                      name="firstName"
                      onChange={handleInputChange}
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
                      value={farmer.lastName}
                      name="lastName"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <div className="my-2 block">
                      <Label
                        htmlFor="homeAddress"
                        value="Home address"
                        className="font-semibold"
                      />
                    </div>
                    <TextInput
                      id="homeAddress"
                      type="text"
                      icon={BiHome}
                      name="homeAddress"
                      value={farmer.homeAddress}
                      onChange={handleInputChange}
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
                      onChange={handleInputChange}
                      value={farmer.gps}
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
                      maxLength={10}
                      name="contact"
                      value={farmer.contact}
                      onChange={handleInputChange}
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
                    <Datepicker
                      name="dateOfBirth"
                      maxDate={new Date(2010, 1, 30)}
                      selected={farmer.dateOfBirth}
                      onSelectedDateChanged={handleDateChange}
                    />
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
                      onChange={(e) => handleRegionSelect(e)}
                    >
                      <option>Select region</option>
                      {regions.map((region) => (
                        <option value={region.name} key={region.id}>
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
                    onClick={handleCropType}
                    className="w-full"
                  >
                    <option value="">Select District</option>
                    {showDistricts.map((district) => (
                      <option value={district} key={district}>
                        {district}
                      </option>
                    ))}
                  </Select>
                </div>
                <div>
                  <div className="my-2 block">
                    <Label
                      htmlFor="community"
                      value="Community"
                      className="font-semibold"
                    />

                    <TextInput
                      id="community"
                      type="text"
                      icon={FaRegUserCircle}
                      value={farmer.community}
                      placeholder="Enter community"
                      name="community"
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <fieldset className="flex max-w-md flex-col gap-4">
                  <legend className="mb-4 font-semibold">
                    Choose farmer type
                  </legend>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="farmer"
                      name="farmerType"
                      value="farmer"
                      onChange={handleInputChange}
                      required
                    />
                    <Label htmlFor="farmer">farmer</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="processor"
                      name="farmerType"
                      value="Processor"
                      onChange={handleInputChange}
                      required
                    />
                    <Label htmlFor="processor">Processor</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="farmerProcessor"
                      name="farmerType"
                      value="Farmer and Processor"
                      onChange={handleInputChange}
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
                      htmlFor="crop"
                      value="Select farmer group"
                    />
                  </div>
                  <Select
                    id="crop"
                    required
                    onClick={handleSelectGroup}
                    className="w-full"
                  >
                    <option>group</option>
                    <option value="Group 1" name="group">
                      Group 1
                    </option>
                    <option value="Group 2" name="group">
                      Group 2
                    </option>
                    <option value="Group 3" name="group">
                      Group 3
                    </option>
                    <option value="Group 4" name="group">
                      Group 4
                    </option>
                  </Select>
                </div>
              </section>
              <section>
                <h2 className="text-green-500 font-bold md:text-2xl mb-4">
                  Farm Details
                </h2>
                <div>
                  <div className="my-2 block">
                    <Label
                      className="font-semibold"
                      htmlFor="farmName"
                      value="Farm name"
                    />
                  </div>
                  <TextInput
                    id="farmName"
                    type="text"
                    value={farmer.primaryFarm}
                    placeholder="Enter primary farm name"
                    name="primaryFarm"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <div className="my-2 block">
                    <Label
                      className="font-semibold"
                      htmlFor="crop"
                      value="Crop grown"
                    />
                  </div>
                  <TextInput
                    id="crop"
                    type="text"
                    value={farmer.primaryFarm}
                    placeholder="Enter crop grown"
                    name="crop"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <div className="my-2 block">
                    <Label
                      className="font-semibold"
                      htmlFor="size"
                      value="Farm size(acres)"
                    />
                  </div>
                  <TextInput
                    id="sie"
                    type="number"
                    value={farmer.primaryFarm}
                    placeholder="Enter sze"
                    name="size"
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <div className="my-2 block">
                    <Label
                      className="font-semibold"
                      htmlFor="region"
                      value="Region"
                    />
                  </div>
                  <Select
                    id="crop"
                    required
                    onClick={handleCropType}
                    className="w-full"
                  >
                    <option value="">Select region</option>
                    {regions.map((region) => (
                      <option value={region.name} key={region.id}>
                        {region.name}
                      </option>
                    ))}
                  </Select>
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
                    onClick={handleCropType}
                    className="w-full"
                  >
                    <option value="">Select District</option>
                    {regions.map((region) => (
                      <option value={region.name} key={region.id}>
                        {region.name}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="my-2 block">
                  <Label
                    htmlFor="community"
                    value="Community"
                    className="font-semibold"
                  />

                  <TextInput
                    id="community"
                    type="text"
                    icon={FaRegUserCircle}
                    value={farmer.community}
                    placeholder="Enter community"
                    name="community"
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <Button onClick={() => setAddFarms(!addFarms)}>
                  {addFarms ? "Hide farm" : "Add another farm"}
                </Button>
                {addFarms && (
                  <section>
                    <div>
                      <div className="my-2 block">
                        <Label
                          className="font-semibold"
                          htmlFor="farmName"
                          value="Farm name"
                        />
                      </div>
                      <TextInput
                        id="farmName"
                        type="text"
                        value={farmer.primaryFarm}
                        placeholder="Enter primary farm name"
                        name="primaryFarm"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <div className="my-2 block">
                        <Label
                          className="font-semibold"
                          htmlFor="crop"
                          value="Crop grown"
                        />
                      </div>
                      <TextInput
                        id="crop"
                        type="text"
                        value={farmer.primaryFarm}
                        placeholder="Enter crop grown"
                        name="crop"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <div className="my-2 block">
                        <Label
                          className="font-semibold"
                          htmlFor="size"
                          value="Farm size(acres)"
                        />
                      </div>
                      <TextInput
                        id="sie"
                        type="number"
                        value={farmer.primaryFarm}
                        placeholder="Enter sze"
                        name="size"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <div className="my-2 block">
                        <Label
                          className="font-semibold"
                          htmlFor="region"
                          value="Region"
                        />
                      </div>
                      <Select
                        id="crop"
                        required
                        onClick={handleCropType}
                        className="w-full"
                      >
                        <option value="">Select region</option>
                        {regions.map((region) => (
                          <option value={region.name} key={region.id}>
                            {region.name}
                          </option>
                        ))}
                      </Select>
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
                        onClick={handleCropType}
                        className="w-full"
                      >
                        <option value="">Select District</option>
                        {regions.map((region) => (
                          <option value={region.name} key={region.id}>
                            {region.name}
                          </option>
                        ))}
                      </Select>
                    </div>
                    <div className="my-2 block">
                      <Label
                        htmlFor="community"
                        value="Community"
                        className="font-semibold"
                      />

                      <TextInput
                        id="community"
                        type="text"
                        icon={FaRegUserCircle}
                        value={farmer.community}
                        placeholder="Enter community"
                        name="community"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </section>
                )}
                <Button type="submit" className="mt-10">
                  Save Details
                </Button>
              </section>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddFarmerForm;
