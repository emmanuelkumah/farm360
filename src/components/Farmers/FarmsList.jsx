import React from "react";
import { Button, Table } from "flowbite-react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useFarmersContext } from "../../context/FarmersProvider";
const FarmsList = () => {
  const { farmState } = useFarmersContext();
  return (
    <>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Farm name</Table.HeadCell>
          <Table.HeadCell>Farm size(acres)</Table.HeadCell>
          <Table.HeadCell>Region</Table.HeadCell>
          <Table.HeadCell>District</Table.HeadCell>
          <Table.HeadCell>Community</Table.HeadCell>
          <Table.HeadCell>Digital Address</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {farmState.farms.map((farm) => (
            <Table.Row
              key={farm.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {farm.farmName}
              </Table.Cell>
              <Table.Cell>{farm.size}</Table.Cell>
              <Table.Cell>Upper East</Table.Cell>
              <Table.Cell>{farm.district}</Table.Cell>
              <Table.Cell>{farm.community}</Table.Cell>
              <Table.Cell>{farm.address}</Table.Cell>

              <Table.Cell>
                <div className="flex gap-5">
                  <Button>View Activities</Button>
                  <MdEdit className="text-xl hover:text-teal-500 cursor-pointer" />
                  <MdDelete className="text-xl hover:text-red-700 cursor-pointer" />
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};

export default FarmsList;
