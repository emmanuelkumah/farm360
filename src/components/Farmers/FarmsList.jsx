import React from "react";
import { Button, Table } from "flowbite-react";
import { Link, useLoaderData } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import { LuEye } from "react-icons/lu";

const FarmsList = () => {
  const loadFarmData = useLoaderData();
  console.log(loadFarmData);
  return (
    <>
      <div className="my-10">
        <Button className="bg-secondary text-primary hover:text-slate-100 hover:bg-primary">
          <Link to="new">Add new farm</Link>
        </Button>
        <div />
      </div>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Farm owner</Table.HeadCell>
            <Table.HeadCell>Farm name</Table.HeadCell>
            <Table.HeadCell>Farm size(acres)</Table.HeadCell>
            <Table.HeadCell>Crop grown </Table.HeadCell>
            <Table.HeadCell>GPS</Table.HeadCell>
            <Table.HeadCell>District</Table.HeadCell>
            <Table.HeadCell>Community</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {loadFarmData.map((farm) => (
              <Table.Row
                key={farm.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {farm.owner}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {farm.name}
                </Table.Cell>
                <Table.Cell>{farm.size}</Table.Cell>
                <Table.Cell>{farm.crop}</Table.Cell>
                <Table.Cell>{farm.gps}</Table.Cell>
                <Table.Cell>{farm.district}</Table.Cell>
                <Table.Cell>{farm.community}</Table.Cell>

                <Table.Cell>
                  <div className="flex gap-5">
                    <Link to={`${farm.id}`}>
                      <LuEye className="text-xl hover:text-primary cursor-pointer" />
                    </Link>
                    <Link to={`${""}/edit`}>
                      <MdEdit className="text-xl hover:text-teal-500 cursor-pointer" />
                    </Link>
                    <Link to={`${farm.id}/activities`}>
                      <Button>Start Activity</Button>
                    </Link>
                  </div>
                  {/* <div className="flex md:items-center md:justify-evenly"></div> */}
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default FarmsList;
