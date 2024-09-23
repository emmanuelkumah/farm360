import React from "react";
import { Table, Pagination, Spinner } from "flowbite-react";
import BackButton from "../BackButton";
import { useNavigation } from "react-router-dom";
import { useState } from "react";

const FertilizingActivitiesTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemesPerPage] = useState(10);
  const [search, setSearch] = useState("");

  console.log("fertilizing", data);
  const totalActivities = data.length;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentData = data.slice(firstItemIndex, lastItemIndex);

  const navigation = useNavigation();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="overflow-x-auto">
      <div className="my-4">
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
      {navigation.state === "loading" ? (
        <div className="text-center">
          <Spinner aria-label="Center-aligned spinner example" size="xl" />
        </div>
      ) : (
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Date of harvest</Table.HeadCell>
            <Table.HeadCell>Acres harvested</Table.HeadCell>
            <Table.HeadCell>Bags harvested</Table.HeadCell>
            <Table.HeadCell>Weight per bag harvested</Table.HeadCell>
            <Table.HeadCell>Mode of harvesting</Table.HeadCell>
            <Table.HeadCell>Supervisor name</Table.HeadCell>
            <Table.HeadCell>Supervisor contact</Table.HeadCell>
            <Table.HeadCell>Supervisor qualification</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {currentData
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.farm.toLowerCase().includes(search);
              })
              .map((item) => (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={item.id}
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {item.dateOfHarvest}
                  </Table.Cell>
                  <Table.Cell>{item.acresHarvested}</Table.Cell>
                  <Table.Cell>{item.bagsHarvested}</Table.Cell>
                  <Table.Cell>{item.weightPerBagHarvested}</Table.Cell>
                  <Table.Cell>{item.modeOfHarvesting}</Table.Cell>
                  <Table.Cell>{item.supervisorName}</Table.Cell>
                  <Table.Cell>{item.supervisorContact}</Table.Cell>
                  <Table.Cell>{item.supervisorQualification}</Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      )}

      <div className="flex overflow-x-auto mt-10 sm:justify-center">
        <Pagination
          layout="pagination"
          currentPage={currentPage}
          totalPages={totalActivities}
          onPageChange={onPageChange}
          previousLabel="Go back"
          nextLabel="Go forward"
          showIcons
        />
      </div>
    </div>
  );
};

export default FertilizingActivitiesTable;
