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
import { useUserContext } from "../context/ContextProvider";

const EditUserModal = () => {
  const { editing, setEditing, editUser } = useUserContext();
  console.log(editUser);

  return (
    <div>
      <Modal show={editing} onClose={() => setEditing(false)}>
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
                  name="firstName"
                  placeholder="Enter first name"
                  value={editUser.firstName}
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
                  value={editUser.lastName}
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
                  name="email"
                  value={editUser.email}
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
                  name="password"
                  value={editUser.password}
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
                  value={editUser.confirmPassword}
                  required
                  shadow
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="role" value="Select role" />
                </div>
                <Select
                  id="role"
                  name="role"
                  defaultValue={editUser.role}
                  required
                >
                  <option value="administrator">Administrator</option>
                  <option value="agent">Agent</option>
                </Select>
              </div>
              <div id="fileUpload">
                <div className="mb-2 block">
                  <Label htmlFor="file" value="Upload Picture" />
                </div>
                <FileInput id="file" name="picture" accept="image/*" required />
              </div>
              <Button type="submit">Add new user</Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditUserModal;
