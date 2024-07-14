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
} from "flowbite-react";
import { FaRegUserCircle } from "react-icons/fa";
import { BiHome, BiMap, BiPhone } from "react-icons/bi";
import { GiPlantWatering } from "react-icons/gi";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

const regions = [
  { value: "Upper East", label: "Upper East" },
  { value: "Northern", label: "Northern" },
  { value: "Savannah", label: "Savannah" },
];
const crops = [
  { value: "soya", label: "soya" },
  { value: "cowpea", label: "soya" },
  { value: "shea nut", label: "shea nut" },
  { value: "ground nut", label: "ground nut" },
];

const AddFarmer = () => {
  const { dispatch } = useFarmersContext();
  const { openModal, setOpenModal } = useStateContext();
  const [farmer, setFarmer] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    homeAddress: "",
    GPS: "",
    dateOfBirth: new Date(),
    community: "",
    primaryFarm: "",
    otherFarm: "",
    farmsize: "",
    region: "",
    crop: "",
    farmerType: "",
    picture: null,
  });
  // const [selectedRegion, setSelectedRegion] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFarmer({ ...farmer, [name]: value });
  };

  const onRegionSelect = (select) => {
    setFarmer({ ...farmer, region: select.value });
  };
  const onCropSelect = (select) => {
    setFarmer({ ...farmer, crop: select.value });
  };
  const onFarmerTypeCheck = (checked) => {
    console.log(checked);
  };
  const handleImageChange = (e) => {
    setFarmer({
      ...farmer,
      picture: e.target.files[0],
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
    });
  };
  return (
    <div>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add Farmer</Modal.Header>
        <Modal.Body>
          <form
            className="flex max-w-md flex-col gap-4"
            onSubmit={handleAddFarmer}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="file-upload" value="Select picture" />
              </div>
              <FileInput id="file-upload" onChange={handleImageChange} />
            </div>
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

            <section className="flex flex-col md:flex-row md:gap-5"></section>
            <section className="flex flex-col ">
              <fieldset className="flex max-w-md flex-col gap-4">
                <legend className="mb-4">Choose farmer type</legend>
                <div className="flex items-center gap-2">
                  <Radio
                    id="farmer"
                    name="farmerType"
                    value={farmer.farmerType}
                    defaultChecked
                    onChange={onFarmerTypeCheck}
                  />
                  <Label htmlFor="farmer">farmer</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="processor"
                    name="farmerType"
                    value={farmer.farmerType}
                    onChange={onFarmerTypeCheck}
                  />
                  <Label htmlFor="processor">Processor</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Radio
                    id="farmerProcessor"
                    name="farmerType"
                    value={farmer.farmerType}
                    onChange={onFarmerTypeCheck}
                  />
                  <Label htmlFor="farmerProcessor">
                    Both(farmer & Processor)
                  </Label>
                </div>
              </fieldset>
            </section>

            <Button type="submit">Submit</Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddFarmer;
