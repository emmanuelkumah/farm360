import React, { useState } from "react";
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
import { regions, districts, groups, crops } from "../../data/dummyData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddFarmerForm = () => {
  let navigate = useNavigate();

  const [addFarms, setAddFarms] = useState(false);
  const [showDistricts, setShowDistricts] = useState([]);

  const getDistricts = (id) => {
    const result = districts.find((district) => district.regionId === id);
    const { listDistrict } = result;
    setShowDistricts(listDistrict);
  };

  const handleRegionChange = (e) => {
    const index = e.target.selectedIndex;
    getDistricts(index);
  };

  const handleFarmRegionChange = (e) => {
    const index = e.target.selectedIndex;
    getDistricts(index);
  };
  const handleSecondFarmRegionChange = (e) => {
    const index = e.target.selectedIndex;
    getDistricts(index);
  };

  const handleGoBack = () => {
    navigate("/app/farmers");
  };

  return (
    <>
      <div className="mt-[20%] mx-5 md:mt-0 md:mx-0">
        <Button
          className="bg-secondary text-primary hover:text-slate-100 hover:bg-main"
          onClick={handleGoBack}
        >
          Go Back
        </Button>
      </div>
      <h2 className="md:text-2xl text-main font-bold my-4 border-l-4 pl-4 border-main">
        Add new farmer
      </h2>
      <div className="bg-secondary h-full rounded-lg shadow-md">
        <section className="flex flex-col justify-center items-center md:my-10">
          <Form className="w-[80vw] md:w-[60vw] my-10 " method="post">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
              <section>
                <h2 className="text-main font-bold md:text-2xl mb-4">
                  Farmer Details
                </h2>
                <div className="flex flex-col md:flex-row md:justify-evenly">
                  <fieldset className="flex flex-col md:flex-row gap-4">
                    <legend className="font-semibold mb-4"> Gender</legend>
                    <div className="flex items-center gap-2">
                      <Radio id="male" name="gender" value="Male" required />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="female"
                        name="gender"
                        value="Female"
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
                      defaultValue=""
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
                      defaultValue=""
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
                      defaultValue=""
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
                      defaultValue=""
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
                      defaultValue=""
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
                      name="region"
                      defaultValue=""
                      onChange={handleRegionChange}
                    >
                      <option>Select region</option>
                      {regions.map((region, index) => (
                        <option value={region.name} key={index}>
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
                    defaultValue=""
                  >
                    <option>Select District</option>
                    {showDistricts.map((district) => (
                      <option defaultValue={district} key={district}>
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
                      defaultValue=""
                      placeholder="Enter community"
                      name="community"
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
                      name="type"
                      defaultValue="farmer"
                      required
                    />
                    <Label htmlFor="farmer">farmer</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="processor"
                      name="type"
                      defaultValue="Processor"
                      required
                    />
                    <Label htmlFor="processor">Processor</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="farmerProcessor"
                      name="type"
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
                    defaultValue=""
                  >
                    <option>group</option>
                    {groups.map((group) => (
                      <option value={group.name} key={group.id}>
                        {group.name}
                      </option>
                    ))}
                  </Select>
                </div>
              </section>
              <section>
                <h2 className="text-main font-bold md:text-2xl mb-4">
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
                    defaultValue=""
                    placeholder="Enter primary farm name"
                    name="farmName"
                    required
                  />
                </div>
                <div>
                  <div className="my-2 block">
                    <Label
                      htmlFor="crop"
                      value="Crop grown"
                      className="font-semibold"
                    />
                  </div>
                  <Select id="crop" required className="w-full" name="crop">
                    <option value="">Select crop</option>
                    {crops.map((crop) => (
                      <option value={crop} key={crop}>
                        {crop}
                      </option>
                    ))}
                  </Select>
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
                    id="size"
                    type="number"
                    defaultValue=""
                    placeholder="Enter size"
                    name="farmSize"
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
                    className="w-full"
                    name="farmRegion"
                    onChange={handleFarmRegionChange}
                  >
                    <option>Select region</option>
                    {regions.map((region, index) => (
                      <option value={region.name} key={index}>
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
                    className="w-full"
                    name="farmDistrict"
                  >
                    <option>Select District</option>
                    {showDistricts.map((district) => (
                      <option value={district} key={district}>
                        {district}
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
                    defaultValue=""
                    placeholder="Enter community"
                    name="farmCommunity"
                    required
                  />
                </div>
                <Button
                  className="mt-10 bg-main hover:bg-secondary"
                  onClick={() => setAddFarms(!addFarms)}
                >
                  {addFarms ? "Hide farm" : "Add another farm"}
                </Button>
                {addFarms && (
                  <section>
                    <h3 className="text-md font-semibold mt-6">
                      Second Farm (optional)
                    </h3>
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
                        defaultValue=""
                        placeholder="Enter second farm name"
                        name="secondFarmName"
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
                        id="size"
                        type="number"
                        defaultValue=""
                        placeholder="Enter size"
                        name="secondFarmSize"
                      />
                    </div>
                    <div>
                      <div className="my-2 block">
                        <Label
                          htmlFor="crop"
                          value="Crop grown"
                          className="font-semibold"
                        />
                      </div>
                      <Select
                        id="crop"
                        className="w-full"
                        name="secondFarmCrop"
                      >
                        <option>Select crop</option>
                        {crops.map((crop) => (
                          <option value={crop} key={crop}>
                            {crop}
                          </option>
                        ))}
                      </Select>
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
                        id="region"
                        onChange={handleSecondFarmRegionChange}
                        className="w-full"
                        name="secondFarmRegion"
                      >
                        <option>Select region</option>
                        {regions.map((region, index) => (
                          <option value={region.name} key={index}>
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
                        className="w-full"
                        name="secondFarmDistrict"
                      >
                        <option>Select District</option>
                        {showDistricts.map((district) => (
                          <option value={district} key={district}>
                            {district}
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
                        defaultValue=""
                        placeholder="Enter community"
                        name="secondFarmCommunity"
                      />
                    </div>
                  </section>
                )}
                <Button type="submit" className="mt-10 w-[100%] bg-main">
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

export default AddFarmerForm;
