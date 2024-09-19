import React, { useState } from "react";
import { useNavigation } from "react-router-dom";
import { Table, Pagination, Spinner } from "flowbite-react";
import BackButton from "../BackButton";

const SalesActivitiesTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemesPerPage] = useState(10);
  const [search, setSearch] = useState("");

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
            <Table.HeadCell>Farm name</Table.HeadCell>
            <Table.HeadCell>Release date</Table.HeadCell>
            <Table.HeadCell>Authorizer name</Table.HeadCell>
            <Table.HeadCell>Authorizer contact</Table.HeadCell>
            <Table.HeadCell>Authorizer quantity</Table.HeadCell>
            <Table.HeadCell>Sales evidence</Table.HeadCell>
            <Table.HeadCell>Buyer name</Table.HeadCell>

            <Table.HeadCell>Buyer quantity</Table.HeadCell>
            <Table.HeadCell>Buyer contact</Table.HeadCell>
            <Table.HeadCell>Buyer type</Table.HeadCell>

            <Table.HeadCell>Transport means</Table.HeadCell>
            <Table.HeadCell>Vehicle name</Table.HeadCell>
            <Table.HeadCell>Vehicle registration no.</Table.HeadCell>
            <Table.HeadCell>Drivers' license no.</Table.HeadCell>
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
                    {item.farm}
                  </Table.Cell>
                  <Table.Cell>{item.releaseDate}</Table.Cell>
                  <Table.Cell>{item.authorizerName}</Table.Cell>
                  <Table.Cell>{item.authorizerContact}</Table.Cell>
                  <Table.Cell>{item.authorizerQuantity}</Table.Cell>
                  <Table.Cell>{item.saleEvidenceUrl}</Table.Cell>
                  <Table.Cell>{item.buyerName}</Table.Cell>
                  <Table.Cell>{item.buyerQuantity}</Table.Cell>
                  <Table.Cell>{item.buyerContact}</Table.Cell>
                  <Table.Cell>{item.buyerType}</Table.Cell>
                  <Table.Cell>{item.transportMeans}</Table.Cell>
                  <Table.Cell>{item.vehicleName}</Table.Cell>
                  <Table.Cell>{item.vehicleRegistrationNo}</Table.Cell>
                  <Table.Cell>{item.driversLicenseNo}</Table.Cell>
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

export default SalesActivitiesTable;
