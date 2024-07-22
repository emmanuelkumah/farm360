import React, { useState } from "react";
import {
  Button,
  Modal,
  Label,
  TextInput,
  Select,
  FileInput,
} from "flowbite-react";
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { UseUserContext } from "../context/UserProvider";

const AddUserModal = ({ openModal, setOpenModal }) => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    role: "",
    password: "",
    confirmPassword: "",
    picture: null,
  });
  const [passwordMatch, setPasswordMatch] = useState(true);
  const { dispatch } = UseUserContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Check if passwords match on each character change
    if (name === "password" || name === "confirmPassword") {
      if (name === "password" && user.confirmPassword !== value) {
        setPasswordMatch(false);
      } else if (name === "confirmPassword" && user.password !== value) {
        setPasswordMatch(false);
      } else {
        setPasswordMatch(true);
      }
    }
  };

  const handleImageChange = (e) => {
    setUser((prevData) => ({
      ...prevData,
      picture: e.target.files[0],
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "Add_User",
      payload: { id: Math.floor(Math.random() * 1000000), ...user },
    });
    setUser({
      username: "",
      firstName: "",
      lastName: "",
      role: "",
      password: "",
      confirmPassword: "",
      picture: null,
    });
    setOpenModal(false);
  };
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add new user</Modal.Header>
        <Modal.Body>
          <div className="flex items-center justify-center">
            <form
              className="flex max-w-md flex-col gap-4 md:w-[80%]"
              onSubmit={handleFormSubmit}
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="username" value="Username" />
                </div>
                <TextInput
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Enter userName"
                  value={user.username}
                  onChange={(e) => handleInputChange(e)}
                  icon={FaRegUserCircle}
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="firstName" value="First name" />
                </div>
                <TextInput
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="Enter first name"
                  value={user.firstName}
                  onChange={(e) => handleInputChange(e)}
                  icon={FaRegUserCircle}
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="lastName" value="Last name" />
                </div>
                <TextInput
                  id="lastName"
                  type="text"
                  placeholder="Enter last name"
                  name="lastName"
                  value={user.lastName}
                  onChange={(e) => handleInputChange(e)}
                  icon={FaRegUserCircle}
                  required
                  shadow
                />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password2" value="Your password" />
                </div>
                <TextInput
                  id="password2"
                  type="password"
                  icon={RiLockPasswordLine}
                  name="password"
                  value={user.password}
                  onChange={(e) => handleInputChange(e)}
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="repeat-password" value="Repeat password" />
                </div>
                <TextInput
                  id="repeat-password"
                  type="password"
                  icon={RiLockPasswordLine}
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={(e) => handleInputChange(e)}
                  required
                  shadow
                />
                {!passwordMatch && (
                  <p style={{ color: "red" }}>Passwords do not match</p>
                )}
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="role" value="Select role" />
                </div>
                <Select
                  id="role"
                  name="role"
                  defaultValue={user.role}
                  onChange={(e) => handleInputChange(e)}
                  required
                >
                  <option>Select role</option>
                  <option value="administrator">Administrator</option>
                  <option value="agent">Agent</option>
                </Select>
              </div>
              <div id="fileUpload">
                <div className="mb-2 block">
                  <Label htmlFor="file" value="Upload Picture" />
                </div>
                <FileInput
                  id="file"
                  name="picture"
                  onChange={(e) => handleImageChange(e)}
                  accept="image/*"
                />
              </div>
              <Button type="submit">Add new user</Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddUserModal;
