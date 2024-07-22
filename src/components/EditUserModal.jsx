import React, { useState } from "react";
import { Button, Modal, Label, TextInput, Select } from "flowbite-react";
import { FaRegUserCircle } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { UseUserContext } from "../context/UserProvider";
import { toast } from "react-toastify";

const EditUserModal = ({ setIsEditing, updateUser }) => {
  const [editUser, setEditUser] = useState(updateUser);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const { dispatch } = UseUserContext();

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setEditUser({
      ...editUser,
      [name]: value,
    });
    // Check if passwords match on each character change
    if (name === "password" || name === "confirmPassword") {
      if (name === "password" && editUser.confirmPassword !== value) {
        setPasswordMatch(false);
      } else if (name === "confirmPassword" && editUser.password !== value) {
        setPasswordMatch(false);
      } else {
        setPasswordMatch(true);
      }
    }
  };

  const onUserUpdate = (e) => {
    e.preventDefault();
    dispatch({
      type: "Edit_User",
      payload: editUser,
    });
    setIsEditing(false);

    toast.success("User edited successful!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <div>
      <Modal show={true} onClose={() => setIsEditing(false)}>
        <Modal.Header>Edit user</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <form
              className="flex max-w-md flex-col gap-4"
              onSubmit={onUserUpdate}
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="userName" value="username" />
                </div>
                <TextInput
                  id="userName"
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  value={editUser.username}
                  onChange={handleUserChange}
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
                  value={editUser.firstName}
                  onChange={handleUserChange}
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
                  onChange={handleUserChange}
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
                  value={editUser.password}
                  onChange={handleUserChange}
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
                  onChange={handleUserChange}
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
                  onChange={handleUserChange}
                  required
                >
                  <option>Select Role</option>
                  <option value="Administrator">Administrator</option>
                  <option value="Agent">Agent</option>
                </Select>
              </div>

              <Button type="submit">Update</Button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditUserModal;
