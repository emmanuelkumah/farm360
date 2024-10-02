import React, { useState, useEffect } from "react";
import { Button, Table, Spinner } from "flowbite-react";
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import BackButton from "../BackButton";
import { axiosbaseURL } from "../../api/axios";

const FarmsList = () => {
  const [farms, setFarms] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchFarms(currentPage);
  }, [currentPage]);

  const fetchFarms = async (page) => {
    setIsLoading(true);
    try {
      const response = await axiosbaseURL.get(
        `/farms?&page=${page}&size=${20}&sort=dateCreated,desc`
      );
      setFarms(response.data.data);
      setTotalPages(response.data.totalPages);
      setTotalElements(response.data.totalElements);
    } catch (error) {
      console.error("error fetching farmer", error.response);
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

  return (
    <>
      <div className="my-10">
        <BackButton />

        <div>
          <input
            className="w-full rounded-lg my-10"
            type="text"
            name="search"
            id=""
            placeholder="Search farm by name"
            value={search}
            autoFocus
            onChange={handleSearch}
          />
        </div>
      </div>
      {isLoading ? (
        <div className="text-center">
          <Spinner aria-label="Center-aligned spinner example" size="xl" />
        </div>
      ) : (
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
              {farms
                .filter((farm) => {
                  return search.toLowerCase() === ""
                    ? farm
                    : farm.name.toLowerCase().includes(search);
                })
                .map((farm) => (
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
                    </Table.Cell>
                    <div className="flex justify-end">
                      <Table.Cell className="">
                        <Link to={`${farm.id}/activities`}>
                          <Button className="bg-main hover:bg-secondary">
                            Start Activity
                          </Button>
                        </Link>
                      </Table.Cell>
                      <Table.Cell className="">
                        <Link to={`${farm.id}/viewactivities`}>
                          <Button className="bg-main hover:bg-secondary">
                            View Activity
                          </Button>
                        </Link>
                      </Table.Cell>
                    </div>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>
      )}
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
    </>
  );
};

export default FarmsList;
