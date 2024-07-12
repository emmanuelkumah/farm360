import React, { useState } from "react";
import { useFarmersContext } from "../../context/FarmersProvider";
import { useStateContext } from "../../context/ContextProvider";
import { Button, Modal, Label, TextInput, Checkbox } from "flowbite-react";
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
  });
  // const [selectedRegion, setSelectedRegion] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFarmer({ ...farmer, [name]: value });
  };
  // const handleDateChange = (date) => {
  //   setFarmer({ ...farmer, dateOfBirth: date });
  // };
  // console.log(selectedRegion.value);
  const handleSelectedRegion = (select) => {
    console.log(select);
    // setSelectedRegion()
    setFarmer({ ...farmer, region: select.value });
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
            <section className="flex flex-col md:flex-row md:gap-5">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="primaryFarm" value="Primary Farm" />
                </div>
                <TextInput
                  id="primaryFarm"
                  name="primaryFarm"
                  type="text"
                  icon={GiPlantWatering}
                  value={farmer.primaryFarm}
                  placeholder="Enter primary farm"
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="otherFarm" value="Other farm" />
                </div>
                <TextInput
                  id="otherFarm"
                  type="text"
                  icon={GiPlantWatering}
                  name="otherFarm"
                  value={farmer.otherFarm}
                  onChange={handleChange}
                  placeholder="Enter other farm"
                />
              </div>
            </section>
            <section className="flex flex-col md:flex-row md:gap-5">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="community" value="community" />
                </div>
                <TextInput
                  id="community"
                  type="text"
                  icon={GiPlantWatering}
                  name="community"
                  value={farmer.community}
                  onChange={handleChange}
                  placeholder="Enter community"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="land" value="Land size(acres)" />
                </div>
                <TextInput
                  id="land"
                  type="text"
                  icon={GiPlantWatering}
                  name="farmsize"
                  value={farmer.farmsize}
                  onChange={handleChange}
                  required
                  placeholder="Enter Land size in acres"
                />
              </div>
            </section>
            <section className="flex flex-col md:flex-row md:justify-between">
              <div className="mb-2 block">
                <Select
                  defaultValue={farmer.region}
                  onChange={handleSelectedRegion}
                  options={regions}
                />
              </div>
              {/* <div>
                <div className="mb-2 block">
                  <Label htmlFor="district" value="District" />
                </div>
                <Select id="district" name="role" required>
                  <option value="administrator">Administrator</option>
                  <option value="agent">Agent</option>
                </Select>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="crop" value="Crop type" />
                </div>
                <Select id="crop" name="role" required>
                  <option value="administrator">Administrator</option>
                  <option value="agent">Agent</option>
                </Select>
              </div> */}
            </section>
            {/* <section className="flex flex-col md:flex-row md:justify-between">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="group" value="Group" />
                </div>
                <Select id="group" name="role" required>
                  <option value="administrator">Administrator</option>
                  <option value="agent">Agent</option>
                </Select>
              </div>
              <div>
                <h3 className="text-md my-2">Farmer Type</h3>
                <div className="flex items-center gap-2">
                  <Checkbox id="accept" defaultChecked />
                  <Label htmlFor="farmer" className="flex">
                    Farmer
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="process" />
                  <Label htmlFor="processor">Processor</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="processor" />
                  <Label htmlFor="processor">Both Farmer and Processor</Label>
                </div>
              </div>
            </section> */}

            <Button type="submit">Submit</Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddFarmer;
