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
} from "flowbite-react";
import { FaRegUserCircle } from "react-icons/fa";
import { BiHome, BiMap, BiPhone } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddFarmer = () => {
  const { dispatch } = useFarmersContext();
  const { openModal, setOpenModal } = useStateContext();
  const [addFarms, setAddFarms] = useState(false);
  const [farmer, setFarmer] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    homeAddress: "",
    GPS: "",
    dateOfBirth: new Date(),
    farmerType: null,
    cropType: null,
    farmerGroup: null,
    gender: "",
    picture: null,
    primaryFarm: "",
    secondFarm: "",
    thirdFarm: "",
    //farmNames: ["Test"],
  });

  // const handleAddFarms = (e) => {
  //   const { value } = e.target;

  // };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFarmer({ ...farmer, [name]: value });
  };

  const handleFarmerTypeChange = (e) => {
    const { name, value } = e.target;
    setFarmer({
      ...farmer,
      [name]: value,
    });
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
    <div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add Farmer</Modal.Header>
        <Modal.Body className="flex justify-center">
          <form
            className="flex max-w-md flex-col gap-4"
            onSubmit={handleAddFarmer}
          >
            <section className="flex flex-col md:flex-row md:gap-5">
              <div>
                <div className="mb-2">
                  <Label htmlFor="file-upload" value="Select picture" />
                </div>
                <FileInput
                  id="file-upload"
                  onChange={handleImageChange}
                  name="picture"
                />
              </div>
              <fieldset className="flex max-w-md flex-col md:flex-row  gap-4">
                <legend className="mb-4"> Gender</legend>
                <div className="flex items-center gap-2">
                  <Radio
                    id="male"
                    name="gender"
                    value="Male"
                    onChange={handleFarmerTypeChange}
                    required
                  />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="female"
                    name="gender"
                    value="Female"
                    onChange={handleFarmerTypeChange}
                    required
                  />
                  <Label htmlFor="female">Female</Label>
                </div>
              </fieldset>
            </section>

            <section className="flex flex-col md:flex-row md:gap-5">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="firstName" value="First name" />
                </div>
                <TextInput
                  id="firstName"
                  type="text"
                  icon={FaRegUserCircle}
                  value={farmer.firstName}
                  placeholder="Enter firstname"
                  name="firstName"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="lastName" value="Last name" />
                </div>
                <TextInput
                  id="lastName"
                  type="text"
                  icon={FaRegUserCircle}
                  placeholder="Enter last name"
                  value={farmer.lastName}
                  name="lastName"
                  onChange={handleChange}
                  required
                />
              </div>
            </section>
            <section className="flex flex-col md:flex-row md:gap-5">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="homeAddress" value="Home address" />
                </div>
                <TextInput
                  id="homeAddress"
                  type="text"
                  icon={BiHome}
                  name="homeAddress"
                  value={farmer.homeAddress}
                  onChange={handleChange}
                  placeholder="Enter home address"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="GPS" value="GPS Address" />
                </div>
                <TextInput
                  id="GPS"
                  type="text"
                  icon={BiMap}
                  placeholder="Enter GPS"
                  name="GPS"
                  onChange={handleChange}
                  value={farmer.GPS}
                  required
                />
              </div>
            </section>
            <section className="flex flex-col md:flex-row md:gap-5">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="contact" value="Contact" />
                </div>
                <TextInput
                  id="contact"
                  type="number"
                  icon={BiPhone}
                  name="contact"
                  value={farmer.contact}
                  onChange={handleChange}
                  placeholder="Enter contact"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="dob" value="Date of birth" />
                </div>
                <DatePicker
                  selected={farmer.dateOfBirth}
                  onChange={(date) =>
                    setFarmer({ ...farmer, dateOfBirth: date })
                  }
                />
              </div>
            </section>

            <section className="flex flex-col md:flex-row md:gap-2">
              <fieldset className="flex max-w-md flex-col gap-4">
                <legend className="mb-4">Choose farmer type</legend>
                <div className="flex items-center gap-2">
                  <Radio
                    id="farmer"
                    name="farmerType"
                    value="farmer"
                    onChange={handleFarmerTypeChange}
                    required
                  />
                  <Label htmlFor="farmer">farmer</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="processor"
                    name="farmerType"
                    value="Processor"
                    onChange={handleFarmerTypeChange}
                    required
                  />
                  <Label htmlFor="processor">Processor</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="farmerProcessor"
                    name="farmerType"
                    value="Farmer and Processor"
                    onChange={handleFarmerTypeChange}
                    required
                  />
                  <Label htmlFor="farmerProcessor">
                    Both(farmer & Processor)
                  </Label>
                </div>
              </fieldset>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="crop" value="Crop grown" />
                </div>
                <Select id="crop" required onClick={handleCropType}>
                  <option>Select crop</option>
                  <option value="Soya" name="cropType">
                    Soya{" "}
                  </option>
                  <option value="Shea Butter" name="cropType">
                    Shea butter
                  </option>
                  <option value="Cowpea" name="cropType">
                    Cowpea
                  </option>
                  <option value="Groundnut" name="cropType">
                    Groundnut
                  </option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="crop" value="Group" />
                </div>
                <Select id="crop" required onClick={handleSelectGroup}>
                  <option>Select group</option>
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
            <section className="flex flex-col md:flex-row md:items-center md:gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="farmName" value="Farm name" />
                </div>
                <TextInput
                  id="farmName"
                  type="text"
                  value={farmer.primaryFarm}
                  placeholder="Enter primary farm name"
                  name="primaryFarm"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="md:mt-8">
                <Button onClick={() => setAddFarms(!addFarms)}>
                  {`${!addFarms ? "Add more farms" : "Hide farms"}`}{" "}
                </Button>
              </div>
            </section>
            <section>
              {addFarms && (
                <div className="flex flex-col mt-5 md:flex-row gap-5">
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="secondFarm" value="Second farm name" />
                    </div>
                    <TextInput
                      id="secondFarm"
                      type="text"
                      value={farmer.secondFarm}
                      placeholder="Enter farm name"
                      name="secondFarm"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="thirdFarm" value="Third farm name" />
                    </div>
                    <TextInput
                      id="thirdFarm"
                      type="text"
                      value={farmer.thirdFarm}
                      placeholder="Enter farm name"
                      name="thirdFarm"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              )}
            </section>

            <Button type="submit" className="my-4">
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddFarmer;
