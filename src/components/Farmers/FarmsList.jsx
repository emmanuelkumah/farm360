import React from "react";
import { Button, Table } from "flowbite-react";
import { MdDelete, MdEdit, MdViewAgenda } from "react-icons/md";
import { useFarmContext } from "../../context/FarmersProvider";
import { FaEye } from "react-icons/fa";
const FarmsList = () => {
  const { farmState } = useFarmContext();
  console.log(farmState);
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
          {farmState.map((farm) => (
            <Table.Row
              key={farm.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {farm.name}
              </Table.Cell>
              <Table.Cell>{farm.size}</Table.Cell>
              <Table.Cell>{farm.region}</Table.Cell>
              <Table.Cell>{farm.district}</Table.Cell>
              <Table.Cell>{farm.community}</Table.Cell>
              <Table.Cell>{farm.address}</Table.Cell>

              <Table.Cell>
                <div className="flex gap-5">
                  <Button>Start Activity</Button>
                  <MdEdit className="text-xl hover:text-teal-500 cursor-pointer" />
                  <MdDelete className="text-xl hover:text-red-700 cursor-pointer" />
                  <FaEye />
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
