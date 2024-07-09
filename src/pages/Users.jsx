import { Button } from "flowbite-react";
import { Table } from "flowbite-react";
import { MdDelete, MdEdit } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { useStateContext, useUserContext } from "../context/ContextProvider";
import AddUserModal from "../components/AddUserModal";

const Users = () => {
  const { setOpenModal } = useStateContext();
  const { users } = useUserContext();

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
        {users.length >= 1 ? (
          <div className="overflow-x-auto">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell>Picture</Table.HeadCell>
                <Table.HeadCell>First Name</Table.HeadCell>
                <Table.HeadCell>Last Name</Table.HeadCell>
                <Table.HeadCell>Email</Table.HeadCell>
                <Table.HeadCell>Role</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {users.map((user, index) => (
                  <Table.Row
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      <img
                        src={user.picture}
                        alt="image"
                        className="rounded-full w-10 h-10"
                      />
                    </Table.Cell>
                    <Table.Cell>{user.firstName}</Table.Cell>
                    <Table.Cell>{user.lastName}</Table.Cell>
                    <Table.Cell>{user.email}</Table.Cell>
                    <Table.Cell>{user.role}</Table.Cell>
                    <Table.Cell>
                      <div className="flex gap-5">
                        <GrView />
                        <MdEdit />
                        <MdDelete />
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
