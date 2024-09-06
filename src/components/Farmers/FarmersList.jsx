import React, { useState } from "react";
import { Table, Button, Pagination } from "flowbite-react";
import { MdDelete, MdEdit } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { FaUser } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const FarmersList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemesPerPage] = useState(10);
  const [editFarmer, setEditFarmer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [search, setSearch] = useState("");

  const farmersData = useLoaderData();
  const totalFarmers = farmersData.length;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentFarmersData = farmersData.slice(firstItemIndex, lastItemIndex);
  console.log("currentFarmersData", currentFarmersData);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
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
        <Button className="bg-secondary text-primary hover:text-slate-100 hover:bg-main mt-10">
          <Link to="new">Add new farmer</Link>
        </Button>
        <div />
        <input
          className="w-full rounded-lg my-10"
          type="text"
          name="search"
          id=""
          placeholder="Search farmer by first name"
          value={search}
          autoFocus
          onChange={handleSearch}
        />
      </div>
      <div className="overflow-x-auto">
        <Table className="w-full" hoverable>
          <Table.Head>
            <Table.HeadCell>Picture</Table.HeadCell>
            <Table.HeadCell>First Name</Table.HeadCell>
            <Table.HeadCell>Last Name</Table.HeadCell>
            <Table.HeadCell>Age</Table.HeadCell>
            <Table.HeadCell>Contact</Table.HeadCell>
            <Table.HeadCell>Region</Table.HeadCell>
            <Table.HeadCell>District</Table.HeadCell>
            <Table.HeadCell>Community</Table.HeadCell>
            <Table.HeadCell>Group</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {currentFarmersData
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.firstName.toLowerCase().includes(search);
              })
              .map((farmer) => (
                <Table.Row
                  key={farmer.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {farmer.imageUrl === null ? (
                      <FaUser />
                    ) : (
                      <img
                        src={farmer.imageUrl}
                        alt="farmer picture"
                        className="rounded-full w-10 h-10"
                      />
                    )}
                  </Table.Cell>
                  <Table.Cell>{farmer.firstName}</Table.Cell>
                  <Table.Cell>{farmer.lastName}</Table.Cell>
                  <Table.Cell>{farmer.age}</Table.Cell>
                  <Table.Cell>{farmer.phone}</Table.Cell>
                  <Table.Cell>{farmer.community.region}</Table.Cell>

                  <Table.Cell>{farmer.community.district}</Table.Cell>
                  <Table.Cell>{farmer.community.name}</Table.Cell>
                  <Table.Cell>{`${
                    farmer.group ? farmer.group : "displayGroup"
                  }`}</Table.Cell>

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
          layout="pagination"
          currentPage={currentPage}
          totalPages={totalFarmers}
          onPageChange={onPageChange}
          previousLabel="Go back"
          nextLabel="Go forward"
          showIcons
        />
      </div>
    </div>
  );
};

export default FarmersList;
