import React from "react";
import { Button, Table } from "flowbite-react";
import { Link, useLoaderData } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { LuEye } from "react-icons/lu";

const FarmsList = ({ listFarms }) => {
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
            <Table.HeadCell>Farm name</Table.HeadCell>
            <Table.HeadCell>Farm size(acres)</Table.HeadCell>
            <Table.HeadCell>Crop type </Table.HeadCell>
            <Table.HeadCell>GPS address</Table.HeadCell>
            <Table.HeadCell>Community</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {listFarms.data.map((farm) => (
              <Table.Row
                key={farm.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {farm.name}
                </Table.Cell>
                <Table.Cell>{farm.landSize}</Table.Cell>
                <Table.Cell>{farm.cropType}</Table.Cell>
                <Table.Cell>{farm.gpsAddress}</Table.Cell>
                <Table.Cell>{farm.community.name}</Table.Cell>

                <Table.Cell>
                  <div className="flex items-center gap-5">
                    <Link to={`${farm.id}`}>
                      <LuEye className="text-xl hover:text-primary cursor-pointer" />
                    </Link>
                    <Link to={`${farm.id}/edit`}>
                      <MdEdit className="text-xl hover:text-teal-500 cursor-pointer" />
                    </Link>
                  </div>
                  {/* <div className="flex md:items-center md:justify-evenly"></div> */}
                </Table.Cell>
                <Table.Cell className="flex justify-end">
                  <Link to={`${farm.id}/activities`}>
                    <Button className="bg-main hover:bg-secondary">
                      Start Activity
                    </Button>
                  </Link>
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
