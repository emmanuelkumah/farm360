import React, { useLayoutEffect } from "react";
import { Button, Table } from "flowbite-react";
import { MdDelete, MdEdit, MdViewAgenda } from "react-icons/md";
import { useFarmersContext } from "../../context/FarmersProvider";
import { FaEye } from "react-icons/fa";
const FarmsList = () => {
  useFarmersContext;
  const { state } = useFarmersContext();

  const newFarms = state.farmers.map((farmer) => farmer.farms);
  console.log(newFarms);
  return (
    <>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Farm name</Table.HeadCell>
          <Table.HeadCell>Farm size(acres)</Table.HeadCell>
          <Table.HeadCell>Community</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {state.farmers.map((farmer) =>
            farmer.farms.map((farm) => (
              <Table.Row
                key={farm.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {farm.farmName}
                </Table.Cell>
                <Table.Cell>{farm.area}</Table.Cell>
                <Table.Cell>{farm.community}</Table.Cell>

                <Table.Cell>
                  <div className="flex items-center gap-5">
                    <Button>Start Activity</Button>
                    <MdEdit className="text-xl hover:text-teal-500 cursor-pointer" />
                    <MdDelete className="text-xl hover:text-red-700 cursor-pointer" />
                    <FaEye />
                  </div>
                </Table.Cell>
              </Table.Row>
            ))
          )}
        </Table.Body>
      </Table>
    </>
  );
};

export default FarmsList;
