import React, { useState } from "react";
import { Button, Table, Pagination, Spinner } from "flowbite-react";
import { Link, useNavigation } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { LuEye } from "react-icons/lu";

const FarmsList = ({ listFarms }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemesPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const navigation = useNavigation();

  const totalFarms = listFarms.length;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentFarmsData = listFarms.slice(firstItemIndex, lastItemIndex);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <>
      <div className="my-10">
        <Button className="bg-secondary text-primary hover:text-slate-100 hover:bg-primary">
          <Link to="new">Add new farm</Link>
        </Button>

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
              {currentFarmsData
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.name.toLowerCase().includes(search);
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
          <div className="flex overflow-x-auto mt-10 sm:justify-center">
            <Pagination
              layout="pagination"
              currentPage={currentPage}
              totalPages={totalFarms}
              onPageChange={onPageChange}
              previousLabel="Go back"
              nextLabel="Go forward"
              showIcons
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FarmsList;
