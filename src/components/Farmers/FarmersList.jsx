import React from "react";
import { Table } from "flowbite-react";
import { MdDelete, MdEdit } from "react-icons/md";

const FarmersList = ({ state }) => {
  const { farmers } = state;
  return (
    <div>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Picture</Table.HeadCell>
          <Table.HeadCell>First Name</Table.HeadCell>
          <Table.HeadCell>Last Name</Table.HeadCell>
          <Table.HeadCell>Contact</Table.HeadCell>
          <Table.HeadCell>Home address</Table.HeadCell>
          <Table.HeadCell>GPS</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {farmers.map((farmer) => (
            <Table.Row
              key={farmer.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <img src="" alt="image" className="rounded-full w-10 h-10" />
              </Table.Cell>
              <Table.Cell>{farmer.firstName}</Table.Cell>
              <Table.Cell>{farmer.lastName}</Table.Cell>
              <Table.Cell>{farmer.contact}</Table.Cell>
              <Table.Cell>{farmer.homeAddress}</Table.Cell>
              <Table.Cell>{farmer.GPS}</Table.Cell>

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
  );
};

export default FarmersList;