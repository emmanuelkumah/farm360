import React, { useState } from "react";
import { useFarmersContext } from "../../context/FarmersProvider";
import { useStateContext } from "../../context/ContextProvider";
import {
  Button,
  Modal,
  Label,
  TextInput,
  Select,
  Checkbox,
} from "flowbite-react";
import { FaRegUserCircle } from "react-icons/fa";

const AddFarmer = () => {
  const [farmer, setFarmer] = useState("");
  const { dispatch } = useFarmersContext();
  const { openModal, setOpenModal } = useStateContext();

  const handleAddFarmer = () => {
    dispatch({
      type: "ADD_FARMER",
      payload: farmer,
    });
    setFarmer("");
  };
  return (
    <div>
      <input
        type="text"
        name="farmer"
        id=""
        value={farmer}
        placeholder="Add farmer"
        onChange={(e) => setFarmer(e.target.value)}
      />
      <button onClick={handleAddFarmer}>Add farmer</button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add Farmer</Modal.Header>
        <Modal.Body>
          <form className="flex max-w-md flex-col gap-4">
            <section className="flex flex-col md:flex-row md:gap-5">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="firstName" value="First name" />
                </div>
                <TextInput
                  id="firstName"
                  type="text"
                  icon={FaRegUserCircle}
                  placeholder="Enter firstname"
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
                  icon={FaRegUserCircle}
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
                  icon={FaRegUserCircle}
                  placeholder="Enter GPS"
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
                  type="text"
                  icon={FaRegUserCircle}
                  placeholder="Enter contact"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="dob" value="Date of birth" />
                </div>
                <TextInput
                  id="dob"
                  type="date"
                  icon={FaRegUserCircle}
                  required
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
                  type="text"
                  icon={FaRegUserCircle}
                  placeholder="Enter primary farm"
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
                  icon={FaRegUserCircle}
                  required
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
                  icon={FaRegUserCircle}
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
                  icon={FaRegUserCircle}
                  required
                  placeholder="Enter Land size in acres"
                />
              </div>
            </section>
            <section className="flex flex-col md:flex-row md:justify-between">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="community" value="Region" />
                </div>
                <Select id="role" name="role" required>
                  <option value="administrator">Administrator</option>
                  <option value="agent">Agent</option>
                </Select>
              </div>
              <div>
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
              </div>
            </section>
            <section className="flex flex-col md:flex-row md:justify-between">
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
            </section>

            <Button type="submit">Submit</Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddFarmer;
