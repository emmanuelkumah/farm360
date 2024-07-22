import { Table, Button, Toast } from "flowbite-react";
import { MdDelete, MdEdit } from "react-icons/md";
import AddUserModal from "../components/AddUserModal";
import { ToastContainer } from "react-toastify";
import { EditUserModal } from "../components";
import { UseUserContext } from "../context/UserProvider";
import { PiUserCircleBold } from "react-icons/pi";
import { useState } from "react";

const Users = () => {
  const [openModal, setOpenModal] = useState(false);
  const [updateUser, setUpdateUser] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const { state, dispatch } = UseUserContext();
  const { users } = state;

  // let editUser = {};

  const handleUserDelete = (id) => {
    dispatch({
      type: "Delete_User",
      payload: id,
    });
  };

  const handleUpdateUser = (user) => {
    setIsEditing(true);
    setUpdateUser(user);
  };
  return (
    <>
      <div className="m-10">
        <div className="mt-10">
          <Button onClick={() => setOpenModal(true)}>Add new user</Button>
        </div>
        <AddUserModal openModal={openModal} setOpenModal={setOpenModal} />
        {isEditing && (
          <EditUserModal
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            updateUser={updateUser}
          />
        )}
        {users.length >= 1 ? (
          <div className="overflow-x-auto">
            <ToastContainer />

            <div className="my-7"></div>
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell>Picture</Table.HeadCell>
                <Table.HeadCell>Username</Table.HeadCell>
                <Table.HeadCell>Name</Table.HeadCell>
                <Table.HeadCell>Role</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {users.map((user) => (
                  <Table.Row
                    key={user.id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      <div className="text-2xl">
                        {user.picture ? (
                          <img
                            src={URL.createObjectURL(user.picture)}
                            alt="image"
                            className="rounded-full w-10 h-10"
                          />
                        ) : (
                          <PiUserCircleBold />
                        )}
                      </div>
                    </Table.Cell>
                    <Table.Cell>{user.username}</Table.Cell>
                    <Table.Cell>{`${user.firstName} ${user.lastName}`}</Table.Cell>
                    <Table.Cell>{user.role}</Table.Cell>
                    <Table.Cell>
                      <div className="flex gap-5">
                        <MdEdit
                          className="text-xl hover:text-teal-500 cursor-pointer"
                          onClick={() => handleUpdateUser(user)}
                        />
                        <MdDelete
                          className="text-xl hover:text-red-700 cursor-pointer"
                          onClick={() => handleUserDelete(user.id)}
                        />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        ) : (
          <h2 className="text-xl mt-4">
            No user added. Click on the "add user" button to create users
          </h2>
        )}
      </div>
    </>
  );
};

export default Users;
