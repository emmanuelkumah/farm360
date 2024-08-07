import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Button,
  Label,
  TextInput,
  Radio,
  FileInput,
  Select,
  Datepicker,
} from "flowbite-react";
import { FaRegUserCircle } from "react-icons/fa";
import { BiHome, BiMap, BiPhone } from "react-icons/bi";
import { regions, districts, groups, crops } from "../../data/dummyData";
import { useFarmersContext } from "../../context/FarmersProvider";

const EditFarmerForm = () => {
  const [editFarmerDetails, setEditFarmerDetails] = useState({});
  const [editFirstFarmDetails, setEditFirstFarmDetails] = useState({});
  const [editSecondFarmDetails, setEditSecondFarmDetails] = useState({});
  const [showDistrict, setShowDistricts] = useState("");

  const { state, dispatch } = useFarmersContext();
  const { id } = useParams();

  useEffect(() => {
    findFarmerById(id);
  }, [id]);

  //should be async await if fetching from server
  const findFarmerById = (id) => {
    const foundFarmer = state.farmers.find(
      (farmer) => farmer.id === Number(id)
    );
    setEditFarmerDetails(foundFarmer);
    setEditFirstFarmDetails(foundFarmer?.farms[0]);
    setEditSecondFarmDetails(foundFarmer?.farms[1]);
  };

  const handleFarmerEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFarmerDetails({ ...editFarmerDetails, [name]: value });
  };
  const handleFirstFarmEdit = (e) => {
    const { name, value } = e.target;
    setEditFirstFarmDetails({ ...editFirstFarmDetails, [name]: value });
  };
  const handleSecondFarmEdit = (e) => {
    const { name, value } = e.target;
    setEditSecondFarmDetails({ ...editSecondFarmDetails, [name]: value });
  };
  const handleImageChange = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      setEditFarmerDetails({ ...editFarmerDetails, picture: value });

      if (file) {
        reader.readAsDataURL(file);
      }
    };
  };
  const handleDateChange = (date) => {
    setEditFarmerDetails({
      ...editFarmerDetails,
      dateOfBirth: date.toLocaleDateString(),
    });
  };
  const onEditSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE_FARMER",
      payload: {
        farmerId: editFarmerDetails.id,
        updateFarmer: {
          ...editFarmerDetails,
          farms: [editFirstFarmDetails, editSecondFarmDetails],
        },
      },
    });
    // console.log(editFarmerDetails);
    // console.log(editFirstFarmDetails);
    //console.log(editSecondFarmDetails);
  };
  return (
    <>
      <h2 className="md:text-2xl text-green-500 font-bold my-4 border-l-4 pl-4 border-green-500">
        Edit Farmer
      </h2>
      <div className="bg-white h-full rounded-lg shadow-md">
        <section className="flex flex-col justify-center items-center md:my-10">
          <form className="w-[80vw] md:w-[60vw] my-10" onSubmit={onEditSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
              <section>
                <h2 className="text-green-500 font-bold md:text-2xl mb-4">
                  Farmer Details{" "}
                </h2>
                <div className="flex flex-col md:flex-row md:justify-evenly">
                  <fieldset className="flex flex-col md:flex-row gap-4">
                    <legend className="font-semibold mb-4"> Gender</legend>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="male"
                        name="gender"
                        value="Male"
                        checked={editFarmerDetails?.gender === "Male"}
                        onChange={handleFarmerEditInputChange}
                        required
                      />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Radio
                        id="female"
                        name="gender"
                        value="Female"
                        checked={editFarmerDetails?.gender === "Female"}
                        onChange={handleFarmerEditInputChange}
                        required
                      />
                      <Label htmlFor="female">Female</Label>
                    </div>
                  </fieldset>
                  <div>
                    {/* <img src={editFarmerDetails.picture} alt="" /> */}
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
                      value={editFarmerDetails?.firstName}
                      placeholder="Enter firstname"
                      name="firstName"
                      onChange={handleFarmerEditInputChange}
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
                      value={editFarmerDetails?.lastName}
                      name="lastName"
                      onChange={handleFarmerEditInputChange}
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
                      value={editFarmerDetails?.address}
                      onChange={handleFarmerEditInputChange}
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
                      onChange={handleFarmerEditInputChange}
                      value={editFarmerDetails?.gps}
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
                      value={editFarmerDetails?.contact}
                      onChange={handleFarmerEditInputChange}
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
                      value={editFarmerDetails?.dateOfBirth}
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
                      name="region"
                      value={editFarmerDetails?.region}
                      onChange={() => console.log("region")}
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
                    onChange={() => console.log("district")}
                    className="w-full"
                    name="district"
                    value={editFarmerDetails?.district}
                  >
                    <option>Select District</option>
                    {/* {showDistricts.map((district) => (
                      <option value={district} key={district}>
                        {district}
                      </option>
                    ))} */}
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
                      value={editFarmerDetails?.community}
                      placeholder="Enter community"
                      name="community"
                      onChange={handleFarmerEditInputChange}
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
                      checked={editFarmerDetails?.type === "farmer"}
                      onChange={handleFarmerEditInputChange}
                      required
                    />
                    <Label htmlFor="farmer">farmer</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="processor"
                      name="type"
                      value="Processor"
                      checked={editFarmerDetails?.type === "Processor"}
                      onChange={handleFarmerEditInputChange}
                      required
                    />
                    <Label htmlFor="processor">Processor</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="farmerProcessor"
                      name="type"
                      value="Farmer and Processor"
                      checked={
                        editFarmerDetails?.type === "Farmer and Processor"
                      }
                      onChange={handleFarmerEditInputChange}
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
                    onChange={handleFarmerEditInputChange}
                    className="w-full"
                    value={editFarmerDetails?.group}
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
                    value={editFirstFarmDetails?.name}
                    placeholder="Enter primary farm name"
                    name="name"
                    onChange={handleFirstFarmEdit}
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
                    value={editFirstFarmDetails?.crop}
                    onChange={handleFirstFarmEdit}
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
                    value={editFirstFarmDetails?.size}
                    placeholder="Enter size"
                    name="size"
                    onChange={handleFirstFarmEdit}
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
                    value={editFirstFarmDetails?.region}
                    onChange={handleFirstFarmEdit}
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
                  {/* <Select
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
                  </Select> */}
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
                    value={editFirstFarmDetails?.community}
                    placeholder="Enter community"
                    name="community"
                    onChange={handleFirstFarmEdit}
                    required
                  />
                </div>
                <h3 className="mt-10 font-semibold">
                  Edit Second Farm Details
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
                    value={editSecondFarmDetails?.name}
                    placeholder="Enter primary farm name"
                    name="name"
                    onChange={handleSecondFarmEdit}
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
                    value={editSecondFarmDetails?.crop}
                    onChange={handleSecondFarmEdit}
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
                    value={editSecondFarmDetails?.size}
                    placeholder="Enter size"
                    name="size"
                    onChange={handleSecondFarmEdit}
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
                    value={editSecondFarmDetails?.region}
                    onChange={handleSecondFarmEdit}
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
                  {/* <Select
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
                  </Select> */}
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
                    value={editSecondFarmDetails?.community}
                    placeholder="Enter community"
                    name="community"
                    onChange={handleSecondFarmEdit}
                    required
                  />
                </div>
              </section>
            </div>
            <Button type="submit" className="mt-10">
              Save Edits
            </Button>
          </form>
        </section>
      </div>
    </>
  );
};

export default EditFarmerForm;
