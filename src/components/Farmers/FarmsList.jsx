import React from "react";
import { Button, Table } from "flowbite-react";
import { MdDelete, MdEdit, MdViewAgenda } from "react-icons/md";
import { useFarmersContext } from "../../context/FarmersProvider";
import { FaEye } from "react-icons/fa";

import { Link } from "react-router-dom";
const FarmsList = () => {
  useFarmersContext;
  const { state } = useFarmersContext();
  const { farmers } = state;

  return (
    <>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Farm name</Table.HeadCell>
          <Table.HeadCell>Farm size(acres)</Table.HeadCell>
          <Table.HeadCell>Crop grown </Table.HeadCell>
          <Table.HeadCell>District</Table.HeadCell>
          <Table.HeadCell>Community</Table.HeadCell>
        </Table.Head>
        {farmers.map((farmer) => (
          <Table.Body className="divide-y" key={farmer.id}>
            {farmer.farms.map((farm, index) =>
              farm.name !== "" ? (
                <Table.Row
                  key={index}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {farm.name}
                  </Table.Cell>
                  <Table.Cell>{farm.size}</Table.Cell>
                  <Table.Cell>{farm.crop}</Table.Cell>
                  <Table.Cell>{farm.district}</Table.Cell>
                  <Table.Cell>{farm.community}</Table.Cell>

                  <Table.Cell>
                    <div className="flex md:items-center md:justify-evenly">
                      <Link to={`/app/farms/${farm.farmId}/activities`}>
                        <Button>Start Activity</Button>
                      </Link>
                      <div className="md:flex md:gap-10">
                        <MdEdit className="text-xl hover:text-teal-500 cursor-pointer" />
                        <MdDelete className="text-xl hover:text-red-700 cursor-pointer" />
                        <FaEye />
                      </div>
                    </div>
                  </Table.Cell>
                </Table.Row>
              ) : (
                ""
              )
            )}
          </Table.Body>
        ))}
      </Table>
    </>
  );
};

export default FarmsList;
