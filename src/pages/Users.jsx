import { Table, Button, Toast } from "flowbite-react";
import { MdDelete, MdEdit } from "react-icons/md";
//import { useStateContext, useUserContext } from "../context/ContextProvider";
import AddUserModal from "../components/AddUserModal";
import { ToastContainer } from "react-toastify";
import { EditUserModal } from "../components";
import { UseUserContext } from "../context/UserProvider";
import { PiUserCircleBold } from "react-icons/pi";

const Users = () => {
  // const { setOpenModal } = useStateContext();
  const { users } = UseUserContext();
  // const { users, handleUserDelete, onEditClick, editing } = useUserContext();
  console.log(users);
  return (
    <>
      <div className="m-10">
        <input
          className="w-1/2 rounded-lg"
          type="text"
          name="search"
          id=""
          placeholder="Search"
        />
        <div className="mt-10">
          <Button onClick={() => setOpenModal(true)}>Add new user</Button>
        </div>
        <AddUserModal />
        {/* {editing && <EditUserModal />} */}
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
                        <PiUserCircleBold />
                      </div>
                      {/* <img
                        src={URL.createObjectURL(user.picture)}
                        alt="image"
                        className="rounded-full w-10 h-10"
                      /> */}
                    </Table.Cell>
                    <Table.Cell>{user.username}</Table.Cell>
                    <Table.Cell>{`${user.firstName}  ${user.lastName}`}</Table.Cell>
                    <Table.Cell>{user.role}</Table.Cell>
                    <Table.Cell>
                      <div className="flex gap-5">
                        <MdEdit
                          className="text-xl hover:text-teal-500 cursor-pointer"
                          // onClick={() => onEditClick(user)}
                        />
                        <MdDelete
                          className="text-xl hover:text-red-700 cursor-pointer"
                          // onClick={() => handleUserDelete(user.id)}
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
