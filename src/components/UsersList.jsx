import React, { useState } from "react";
import { Table, Pagination, Button } from "flowbite-react";
import { MdEdit } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { Link, useLoaderData } from "react-router-dom";

const UsersList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemesPerPage] = useState(10);
  const [search, setSearch] = useState("");

  const users = useLoaderData();

  const totalUsers = users.length;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentUsersData = users.slice(firstItemIndex, lastItemIndex);

  const onPageChange = (page) => setCurrentPage(page);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="container mx-auto">
      <div className="my-10">
        <Button
          type="buton"
          className="bg-secondary mt-[20%] cursor-pointer md:mt-10 text-primary hover:text-slate-100 hover:bg-main "
        >
          <Link to="new"> Add new user</Link>
        </Button>

        <div />
        <input
          className="w-full rounded-lg my-10"
          type="text"
          name="search"
          id=""
          placeholder="Search user by first name"
          value={search}
          autoFocus
          onChange={handleSearch}
        />
      </div>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>First name</Table.HeadCell>
            <Table.HeadCell>Last name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Password</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          {currentUsersData
            .filter((user) => {
              return search.toLowerCase() === ""
                ? user
                : user.firstName.toLowerCase().includes(search);
            })
            .map((user) => (
              <Table.Body className="divide-y" key={user.id}>
                <Table.Row className="bg-white border-gray-700 dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {user.firstName}
                  </Table.Cell>
                  <Table.Cell>{user.lastName}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.password}</Table.Cell>
                  <Table.Cell>
                    <div className="flex justify-end gap-5">
                      <Link to={`${user.id}`}>
                        <LuEye className="text-xl hover:text-primary cursor-pointer" />
                      </Link>
                      <Link to={`${user.id}/edit`}>
                        <MdEdit className="text-xl hover:text-teal-500 cursor-pointer" />
                      </Link>
                    </div>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
        </Table>
      </div>
      <div className="flex overflow-x-auto mt-10 sm:justify-center">
        <Pagination
          layout="pagination"
          currentPage={currentPage}
          totalPages={totalUsers}
          onPageChange={onPageChange}
          previousLabel="Go back"
          nextLabel="Go forward"
          showIcons
        />
      </div>
    </div>
  );
};

export default UsersList;
