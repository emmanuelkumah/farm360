import React, { useState } from "react";
// import { useFarmersContext } from "../../context/FarmersProvider";
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
  // const { dispatch } = useFarmersContext();
  let navigate = useNavigate();

  const [addFarms, setAddFarms] = useState(false);
  const [farmer, setFarmer] = useState({
    gender: "",
    picture: "",
    firstName: "",
    lastName: "",
    contact: "",
    address: "",
    gps: "",
    dateOfBirth: "",
    region: "",
    district: "",
    community: "",
    type: "",
    group: "",
  });
  const [firstFarm, setFirstFarm] = useState({
    name: "",
    size: "",
    crop: "",
    region: "",
    district: "",
    community: "",
  });
  const [secondFarm, setSecondFarm] = useState({
    name: "",
    size: "",
    crop: "",
    region: "",
    district: "",
    community: "",
  });

  const [showDistricts, setShowDistricts] = useState([]);

  // console.log(farmer);

  const getDistricts = (id) => {
    const result = districts.find((district) => district.regionId === id);
    const { listDistrict } = result;
    setShowDistricts(listDistrict);
  };
  const hasNoSecondFarm = () => {
    if (secondFarm.name === "" || secondFarm.crop === "") {
      setSecondFarm(null);
    }
  };

  const handleFarmerInputChange = (e) => {
    const { name, value } = e.target;
    setFarmer({ ...farmer, [name]: value });
    {
      if (e.target.selectedIndex !== null) {
        getDistricts(e.target.selectedIndex);
      }
    }
  };
  const handleDateChange = (date) => {
    setFarmer({ ...farmer, dateOfBirth: date.toLocaleDateString() });
  };

  const handleImageChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setFarmer({
        ...farmer,
        picture: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // first farm
  const handleFarmInputChange = (e) => {
    const { name, value } = e.target;

    setFirstFarm({
      ...firstFarm,
      id: Math.floor(Math.random() * 20000),
      [name]: value,
    });
    getDistricts(e.target.selectedIndex);
  };

  const handleFarmDistrictSelect = (e) => {
    setFirstFarm({ ...firstFarm, district: e.target.value });
  };
  //second farm
  const handleSecondFarmChange = (e) => {
    const { value, name } = e.target;

    setSecondFarm({
      ...secondFarm,
      id: Math.floor(Math.random() * 20000),
      [name]: value,
    });
    getDistricts(e.target.selectedIndex);
  };

  const handleGoBack = () => {
    navigate("/app/farmers");
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    hasNoSecondFarm();
    dispatch({
      type: "ADD_FARMER",
      farmer: {
        id: Math.floor(Math.random() * 1000000),
        ...farmer,
        farms: [firstFarm, secondFarm],
      },
    });
    //clear farm
    setFarmer({
      gender: "",
      picture: "",
      firstName: "",
      lastName: "",
      contact: "",
      address: "",
      gps: "",
      dateOfBirth: "",
      region: "",
      district: "",
      community: "",
      type: "",
      group: "",
    });
    setFirstFarm({
      name: "",
      size: "",
      crop: "",
      region: "",
      district: "",
      community: "",
    });
    setSecondFarm({
      name: "",
      size: "",
      crop: "",
      region: "",
      district: "",
      community: "",
    });
    toast.success("Form submitted successfully!");
    //redirect to farmers list
    setTimeout(() => {
      navigate("/app/farmers");
    }, 2500);
  };

  return (
    <>
      {/* <Form method="post">
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
            defaultValue=""
            placeholder="Enter lastName"
            name="lastName"
            required
          />
        </div>
        <Button type="submit">Submit</Button>
      </Form> */}
      <div>
        <Button onClick={handleGoBack}>Go Back</Button>
      </div>
      <h2 className="md:text-2xl text-green-500 font-bold my-4 border-l-4 pl-4 border-green-500">
        Add new farmer
      </h2>
      <div className="bg-white h-full rounded-lg shadow-md">
        <section className="flex flex-col justify-center items-center md:my-10">
          <Form className="w-[80vw] md:w-[60vw] my-10" method="post">
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
                        // onChange={handleFarmerInputChange}
                        required
                      />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="female"
                        name="gender"
                        value="Female"
                        // onChange={handleFarmerInputChange}
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
                      // onChange={handleImageChange}
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
                      maxLength={10}
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
                      selected={farmer.dateOfBirth}
                      // onSelectedDateChanged={handleDateChange}
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
                      // onChange={handleFarmerInputChange}
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
                    onChange={(e) =>
                      setFarmer({ ...farmer, district: e.target.value })
                    }
                    className="w-full"
                    name="district"
                  >
                    <option>Select District</option>
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
                      onChange={handleFarmerInputChange}
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
                      name="type"
                      value="farmer"
                      onChange={handleFarmerInputChange}
                      required
                    />
                    <Label htmlFor="farmer">farmer</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="processor"
                      name="type"
                      value="Processor"
                      onChange={handleFarmerInputChange}
                      required
                    />
                    <Label htmlFor="processor">Processor</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="farmerProcessor"
                      name="type"
                      value="Farmer and Processor"
                      onChange={handleFarmerInputChange}
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
                    onChange={handleFarmerInputChange}
                    className="w-full"
                    name="group"
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
                    value={firstFarm.name}
                    placeholder="Enter primary farm name"
                    name="name"
                    onChange={handleFarmInputChange}
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
                  <Select
                    id="crop"
                    required
                    onChange={handleFarmInputChange}
                    className="w-full"
                    name="crop"
                  >
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
                    id="sie"
                    type="number"
                    value={firstFarm.size}
                    placeholder="Enter size"
                    name="size"
                    onChange={handleFarmInputChange}
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
                    onChange={handleFarmInputChange}
                    className="w-full"
                    name="region"
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
                    onChange={handleFarmDistrictSelect}
                    className="w-full"
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
                    value={firstFarm.community}
                    placeholder="Enter community"
                    name="community"
                    onChange={handleFarmInputChange}
                    required
                  />
                </div>
                <Button
                  className="mt-10"
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
                        value={secondFarm.name}
                        placeholder="Enter second farm name"
                        name="name"
                        onChange={handleSecondFarmChange}
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
                        value={secondFarm.size}
                        placeholder="Enter size"
                        name="size"
                        onChange={handleSecondFarmChange}
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
                        onChange={handleSecondFarmChange}
                        className="w-full"
                        name="crop"
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
                        onChange={handleSecondFarmChange}
                        className="w-full"
                        name="region"
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
                        onChange={handleSecondFarmChange}
                        className="w-full"
                        name="district"
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
                        value={secondFarm.community}
                        placeholder="Enter community"
                        name="community"
                        onChange={handleSecondFarmChange}
                      />
                    </div>
                  </section>
                )}
              </section>
            </div>
            <Button type="submit" className="mt-10">
              Save Details
            </Button>
          </Form>
        </section>
        <ToastContainer />
      </div>
    </>
  );
};

export default AddFarmerForm;
