import React from "react";
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
import { useFarmersContext } from "../../context/FarmersProvider";

const EditFarmer = ({ editFarmer, setEditFarmer, isEditing, setIsEditing }) => {
  const { dispatch } = useFarmersContext();

  const handleEditFarmerChange = (e) => {
    const { name, value } = e.target;

    setEditFarmer({
      ...editFarmer,
      [name]: value,
    });
  };

  const onEditSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE_FARMER",
      payload: { id: editFarmer.id, update: editFarmer },
    });
    setIsEditing(false);
  };

  return (
    <div>
      <Modal show={isEditing} onClose={() => setIsEditing(false)}>
        <Modal.Header>Edit Farmer Details</Modal.Header>
        <Modal.Body className="flex justify-center">
          <form
            className="flex max-w-md flex-col gap-4"
            onSubmit={onEditSubmit}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="file-upload" value="Select picture" />
              </div>
              <FileInput
                id="file-upload"
                onChange={(e) =>
                  setEditFarmer({ ...editFarmer, picture: e.target.files[0] })
                }
                name="picture"
              />
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
                  value={editFarmer.firstName}
                  placeholder="Enter firstname"
                  name="firstName"
                  onChange={(e) => handleEditFarmerChange(e)}
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
                  value={editFarmer.lastName}
                  name="lastName"
                  onChange={(e) => handleEditFarmerChange(e)}
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
                  value={editFarmer.homeAddress}
                  onChange={(e) => handleEditFarmerChange(e)}
                  placeholder="Enter home address"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="contact" value="Contact" />
                </div>
                <TextInput
                  id="contact"
                  type="number"
                  icon={BiPhone}
                  name="contact"
                  value={editFarmer.contact}
                  onChange={(e) => handleEditFarmerChange(e)}
                  placeholder="Enter contact"
                  required
                />
              </div>
            </section>
            <section className="flex flex-col md:flex-row md:gap-5">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="dob" value="Date of birth" />
                </div>
                <DatePicker
                  selected={editFarmer.dateOfBirth}
                  name="dateOfBirth"
                  onChange={(date) =>
                    setEditFarmer({ ...editFarmer, dateOfBirth: date })
                  }
                />
              </div>
              <div>
                <fieldset className="flex max-w-md flex-col gap-4 md:flex-row">
                  <legend className="mb-4">Choose Gender</legend>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="male"
                      name="gender"
                      value="Male"
                      checked={editFarmer.gender === "Male"}
                      onChange={(e) => handleEditFarmerChange(e)}
                      required
                    />
                    <Label htmlFor="male">Male</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="female"
                      name="gender"
                      value="Female"
                      checked={editFarmer.gender === "Female"}
                      onChange={(e) => handleEditFarmerChange(e)}
                      required
                    />
                    <Label htmlFor="female">Female</Label>
                  </div>
                </fieldset>
              </div>
            </section>

            <section className="flex flex-col md:flex-row md:gap-5"></section>
            <section className="flex flex-col md:flex-row md:justify-between ">
              <div className="flex flex-col md:flex-row md:gap-5">
                <fieldset className="flex max-w-md flex-col gap-4">
                  <legend className="mb-4">Choose farmer type</legend>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="farmer"
                      name="farmerType"
                      selected={editFarmer.farmerType}
                      value="farmer"
                      checked={editFarmer.farmerType === "farmer"}
                      onChange={(e) => handleEditFarmerChange(e)}
                      required
                    />
                    <Label htmlFor="farmer">farmer</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="processor"
                      name="farmerType"
                      value="Processor"
                      checked={editFarmer.farmerType === "Processor"}
                      onChange={(e) => handleEditFarmerChange(e)}
                      required
                    />
                    <Label htmlFor="processor">Processor</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="farmerProcessor"
                      name="farmerType"
                      value="Both farmer and Processor"
                      checked={editFarmer.farmerType === "Farmer and Processor"}
                      onChange={(e) => handleEditFarmerChange(e)}
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
                  <Select
                    id="crop"
                    required
                    onClick={(e) =>
                      setEditFarmer({ ...editFarmer, cropType: e.target.value })
                    }
                  >
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
                    <Label htmlFor="group" value="Group" />
                  </div>
                  <Select
                    id="group"
                    required
                    onClick={(e) =>
                      setEditFarmer({
                        ...editFarmer,
                        farmerGroup: e.target.value,
                      })
                    }
                  >
                    <option>Select group</option>
                    <option value="Group1" name="group">
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
              </div>
            </section>

            <Button type="submit" className="my-5">
              Update
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditFarmer;
