import React, { useState } from "react";
import { Table, Pagination, Spinner } from "flowbite-react";
import BackButton from "../BackButton";
import { useNavigation, Link } from "react-router-dom";
import { axiosbaseURL } from "../../api/axios";
import { MdDelete, MdEdit } from "react-icons/md";
import { toast } from "react-toastify";

const TransportationActivitiesTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemesPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [activities, setActivities] = useState(data);

  const totalActivities = activities.length;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentActivitiesData = activities.slice(firstItemIndex, lastItemIndex);

  const navigation = useNavigation();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleDeleteActivity = async (id) => {
    try {
      await axiosbaseURL.delete(`farm/activity/transportation/${id}`);
      setActivities(activities.filter((activity) => activity.id !== id));
      toast.success("Activity deleted successfully");
    } catch (error) {
      console.error("Error deleting planting activity:", error);
    }
  };

  const onPageChange = (page) => setCurrentPage(page);
  return (
    <div className="overflow-x-auto">
      <div className="my-4">
        <BackButton />
        <div>
          {activities.length === 0 && (
            <p className="text-xl text-main flex justify-center">
              No transportation activities found
            </p>
          )}
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
            <Table.HeadCell>Activity date</Table.HeadCell>
            <Table.HeadCell>Transport mode</Table.HeadCell>
            <Table.HeadCell>Quantity transported</Table.HeadCell>

            <Table.HeadCell>Driver's name</Table.HeadCell>
            <Table.HeadCell>Driver's license</Table.HeadCell>
            <Table.HeadCell>Driver's registration number</Table.HeadCell>
            <Table.HeadCell>Bags per trip</Table.HeadCell>
            <Table.HeadCell></Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {currentActivitiesData
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
                  <Table.Cell>{activity.activityDate}</Table.Cell>
                  <Table.Cell>{activity.transportationMethod}</Table.Cell>
                  <Table.Cell>{activity.quantityTransported}</Table.Cell>
                  <Table.Cell>{activity.driversName}</Table.Cell>
                  <Table.Cell>{activity.driversLicenseNumber}</Table.Cell>
                  <Table.Cell>{activity.vehicleRegistrationNumber}</Table.Cell>
                  <Table.Cell>{activity.numberOfBagsPerTrip}</Table.Cell>
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

export default TransportationActivitiesTable;
