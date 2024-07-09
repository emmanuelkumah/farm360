import React from "react";
import {
  Button,
  Modal,
  Label,
  TextInput,
  Select,
  FileInput,
} from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

import { useStateContext } from "../context/ContextProvider";

const AddUserModal = () => {
  const { openModal, setOpenModal } = useStateContext();
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add new user</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="firstName" value="First name" />
                </div>
                <TextInput
                  id="firstName"
                  type="text"
                  placeholder="Enter first name"
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
                  icon={FaRegUserCircle}
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email2" value="Your email" />
                </div>
                <TextInput
                  id="email2"
                  type="email"
                  placeholder="name@farm360.com"
                  icon={HiMail}
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
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="role" value="Select role" />
                </div>
                <Select id="role" required>
                  <option>Administrator</option>
                  <option>Agent</option>
                </Select>
              </div>
              <div id="fileUpload">
                <div className="mb-2 block">
                  <Label htmlFor="file" value="Upload file" />
                </div>
                <FileInput
                  id="file"
                  helperText="A profile picture is useful to confirm your are logged into your account"
                />
              </div>
              <Button type="submit">Register new account</Button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Add User</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddUserModal;
