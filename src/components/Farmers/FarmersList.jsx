import React, { useState } from "react";
import { Table, Button, Pagination } from "flowbite-react";
import { MdDelete, MdEdit } from "react-icons/md";
import { LuEye } from "react-icons/lu";

import { FaUser } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const FarmersList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [editFarmer, setEditFarmer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const farmersData = useLoaderData();

  console.log(farmersData);

  const onPageChange = (page) => setCurrentPage(page);

  const handleDeleteFarmer = (id) => {
    dispatch({
      type: "DELETE_FARMER",
      id: id,
    });
  };
  const onEditClick = (farmer) => {
    setEditFarmer(farmer);
    setIsEditing(true);
  };

  return (
    <div>
      <div className="my-10">
        <Link to="new">
          <Button className="bg-secondary text-primary hover:text-slate-100 hover:bg-primary">
            Add new farmer
          </Button>
        </Link>
      </div>
      <div className="overflow-x-auto">
        <Table className="w-full" hoverable>
          <Table.Head>
            <Table.HeadCell>Picture</Table.HeadCell>
            <Table.HeadCell>First Name</Table.HeadCell>
            <Table.HeadCell>Last Name</Table.HeadCell>
            <Table.HeadCell>Gender</Table.HeadCell>
            <Table.HeadCell>Contact</Table.HeadCell>
            <Table.HeadCell>Region</Table.HeadCell>
            <Table.HeadCell>District</Table.HeadCell>
            <Table.HeadCell>Community</Table.HeadCell>
            <Table.HeadCell>Group</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {farmersData.map((farmer) => (
              <Table.Row
                key={farmer.id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {farmer.picture === "" ? (
                    <FaUser />
                  ) : (
                    <img
                      src={farmer.picture}
                      alt="farmer picture"
                      className="rounded-full w-10 h-10"
                    />
                  )}
                </Table.Cell>
                <Table.Cell>{farmer.firstName}</Table.Cell>
                <Table.Cell>{farmer.lastName}</Table.Cell>
                <Table.Cell>{farmer.gender}</Table.Cell>
                <Table.Cell>{farmer.contact}</Table.Cell>
                <Table.Cell>{farmer.region}</Table.Cell>

                <Table.Cell>{farmer.district}</Table.Cell>
                <Table.Cell>{farmer.community}</Table.Cell>
                <Table.Cell>{farmer.group}</Table.Cell>

                <Table.Cell>
                  <div className="flex gap-5">
                    <Link to={`${farmer.id}`}>
                      <LuEye className="text-xl hover:text-primary cursor-pointer" />
                    </Link>
                    <Link to={`${farmer.id}/edit`}>
                      <MdEdit className="text-xl hover:text-teal-500 cursor-pointer" />
                    </Link>
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
      <div className="flex overflow-x-auto mt-10 sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default FarmersList;
