import React, { useState, useEffect } from "react";
import { Table, Button, Spinner, Alert } from "flowbite-react";
import { MdEdit } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { axiosbaseURL } from "../../api/axios";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const FarmersList = () => {
  const [farmers, setFarmers] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [editFarmer, setEditFarmer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchFarmers(currentPage);
  }, [currentPage]);

  const fetchFarmers = async (page) => {
    setIsLoading(true);
    try {
      const response = await axiosbaseURL.get(
        `/farmers-paged?&page=${page}&size=${20}&sort=dateCreated,desc`
      );
      setFarmers(response.data.data);
      setTotalPages(response.data.totalPages);
      setTotalElements(response.data.totalElements);
    } catch (error) {
      setError(error.response);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

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
        {isLoading ? (
          <Spinner aria-label="Extra large spinner example" size="xl" />
        ) : (
          <div>
            {error && (
              <Alert color="info" className="mt-2">
                {error.data.message}
              </Alert>
            )}
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
                  {farmers
                    .filter((farmer) => {
                      return search.toLowerCase() === ""
                        ? farmer
                        : farmer.firstName.toLowerCase().includes(search);
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
                        <Table.Cell>{farmer.group?.name}</Table.Cell>

                        <Table.Cell>
                          <div className="flex">
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
          </div>
        )}
      </div>
      <div>
        <div className="flex justify-center gap-4">
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 0}
          >
            <BiChevronLeft />
            Previous
          </Button>
          <Button onClick={() => handlePageChange(currentPage + 1)}>
            Next
            <BiChevronRight />
          </Button>
        </div>
        <p className="text-sm text-center mt-4">
          Showing page {currentPage} of {totalPages} (Total: {totalElements}{" "}
          farmers)
        </p>
      </div>
    </div>
  );
};

export default FarmersList;
