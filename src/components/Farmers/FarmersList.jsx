import React, { useState } from "react";
import { Table, Pagination } from "flowbite-react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useFarmersContext } from "../../context/FarmersProvider";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FarmersList = () => {
  const { dispatch, state } = useFarmersContext();
  const { farmers } = state;
  const [currentPage, setCurrentPage] = useState(1);

  const [editFarmer, setEditFarmer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

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
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Picture</Table.HeadCell>
          <Table.HeadCell>First Name</Table.HeadCell>
          <Table.HeadCell>Last Name</Table.HeadCell>
          <Table.HeadCell>Gender</Table.HeadCell>
          <Table.HeadCell>Contact</Table.HeadCell>
          <Table.HeadCell>District</Table.HeadCell>
          <Table.HeadCell>Community</Table.HeadCell>
          <Table.HeadCell>Group</Table.HeadCell>
          <Table.HeadCell>Number of farms</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {farmers.map((farmer) => (
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
                    alt="image"
                    className="rounded-full w-10 h-10"
                  />
                )}
              </Table.Cell>
              <Table.Cell>{farmer.firstName}</Table.Cell>
              <Table.Cell>{farmer.lastName}</Table.Cell>
              <Table.Cell>{farmer.gender}</Table.Cell>
              <Table.Cell>{farmer.contact}</Table.Cell>
              <Table.Cell>{farmer.district}</Table.Cell>
              <Table.Cell>{farmer.community}</Table.Cell>
              <Table.Cell>{farmer.group}</Table.Cell>
              {farmer.farms[1].name === "" ? (
                <Table.Cell>1</Table.Cell>
              ) : (
                <Table.Cell>{farmer.farms.length}</Table.Cell>
              )}

              <Table.Cell>
                <div className="flex gap-5">
                  <Link to={`/app/farmers/${farmer.id}/edit`}>
                    <MdEdit className="text-xl hover:text-teal-500 cursor-pointer" />
                  </Link>

                  <MdDelete
                    className="text-xl hover:text-red-700 cursor-pointer"
                    onClick={() => handleDeleteFarmer(farmer.id)}
                  />
                </div>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
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
