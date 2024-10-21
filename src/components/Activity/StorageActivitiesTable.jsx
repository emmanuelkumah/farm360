import React, { useState } from "react";
import { useNavigation, Link } from "react-router-dom";
import { Table, Pagination, Spinner } from "flowbite-react";
import BackButton from "../BackButton";
import { MdDelete, MdEdit } from "react-icons/md";
import { axiosbaseURL } from "../../api/axios";
import { toast } from "react-toastify";

const StorageActivitiesTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemesPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [activities, setActivities] = useState(data);

  const totalActivities = activities.length;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentData = activities.slice(firstItemIndex, lastItemIndex);

  const navigation = useNavigation();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleDeleteActivity = async (id) => {
    try {
      await axiosbaseURL.delete(`farm/activity/storage/${id}`);
      setActivities(activities.filter((activity) => activity.id !== id));
      toast.success("Activity deleted successfully");
    } catch (error) {
      console.error("error deleting planting activity:", error);
    }
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
        <div className="overflow-x-auto">
          <Table striped>
            <Table.Head>
              <Table.HeadCell>Farm name</Table.HeadCell>
              <Table.HeadCell>Storage date</Table.HeadCell>

              <Table.HeadCell>Community</Table.HeadCell>
              <Table.HeadCell>Stored Quality</Table.HeadCell>

              <Table.HeadCell>Stored Quantity</Table.HeadCell>
              <Table.HeadCell>Storage type</Table.HeadCell>
              <Table.HeadCell>Storage chemical</Table.HeadCell>
              <Table.HeadCell>Storage manager contact</Table.HeadCell>
              <Table.HeadCell>Storage manager</Table.HeadCell>
              <Table.HeadCell>Receipt</Table.HeadCell>

              <Table.HeadCell>Supervisor</Table.HeadCell>
              <Table.HeadCell>Supervisor contact</Table.HeadCell>
              <Table.HeadCell>Certificate</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {currentData
                .filter((activity) => {
                  return search.toLowerCase() === ""
                    ? activity
                    : activity.farm.toLowerCase().includes(search);
                })
                .map((activity) => (
                  <Table.Row
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                    key={activity.id}
                  >
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {activity.farm}
                    </Table.Cell>
                    <Table.Cell>{activity.storageDate}</Table.Cell>
                    <Table.Cell>{activity.community.name}</Table.Cell>
                    <Table.Cell>{activity.quality.toString()}</Table.Cell>

                    <Table.Cell>{activity.quantity}</Table.Cell>
                    <Table.Cell>{activity.storageType}</Table.Cell>

                    <Table.Cell>{activity.storageChemicalName}</Table.Cell>
                    <Table.Cell>{activity.storageManagerContact}</Table.Cell>
                    <Table.Cell>{activity.storageManagerName}</Table.Cell>
                    <Table.Cell>{activity.receiptUrl}</Table.Cell>

                    <Table.Cell>{activity.supervisorName}</Table.Cell>
                    <Table.Cell>{activity.supervisorContact}</Table.Cell>
                    <Table.Cell>{activity.supervisorQualification}</Table.Cell>
                    <Table.Cell>
                      <Link to={`edit/${activity.id}`}>
                        <div className="text-md flex  p-2 cursor-pointer  hover:bg-secondary hover:text-white hover:rounded-lg focus: bg-main">
                          <span className="text-white">
                            <MdEdit />
                          </span>
                          <p className="text-white">Edit</p>
                        </div>
                      </Link>
                    </Table.Cell>
                    <Table.Cell>
                      <div
                        className="text-md flex  p-2 cursor-pointer  hover:bg-main hover:text-white hover:rounded-lg focus: bg-secondary"
                        onClick={() => handleDeleteActivity(activity.id)}
                      >
                        <span className="text-white">
                          <MdDelete />
                        </span>
                        <p className="text-white">Delete</p>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
            </Table.Body>
          </Table>
        </div>
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

export default StorageActivitiesTable;
