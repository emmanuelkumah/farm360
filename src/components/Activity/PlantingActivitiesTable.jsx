import React, { useState } from "react";
import { Table, Pagination, Spinner } from "flowbite-react";
import BackButton from "../BackButton";
import { useNavigation } from "react-router-dom";
import { axiosbaseURL } from "../../api/axios";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const PlantingActivitiesTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [activities, setActivities] = useState(data);

  const totalActivities = activities.length;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentPlantingData = activities.slice(firstItemIndex, lastItemIndex);

  const navigation = useNavigation();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleDeleteActivity = async (id) => {
    try {
      await axiosbaseURL.delete(`farm/activity/planting/${id}`);
      setActivities(activities.filter((activity) => activity.id !== id));
      toast.success("Activity deleted successfully");
    } catch (error) {
      console.error("Error deleting planting activity:", error);
    }
  };
  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="container mx-auto">
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
              <Table.HeadCell>Crop</Table.HeadCell>
              <Table.HeadCell>Landsize convered</Table.HeadCell>
              <Table.HeadCell>kilos Planted</Table.HeadCell>
              <Table.HeadCell>Supervisor</Table.HeadCell>
              <Table.HeadCell>Contact</Table.HeadCell>
              <Table.HeadCell>Certificate</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {currentPlantingData
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
                    <Table.Cell>{item.cropName}</Table.Cell>
                    <Table.Cell>{item.landSizeCovered}</Table.Cell>
                    <Table.Cell>{item.kilosPlanted}</Table.Cell>
                    <Table.Cell>{item.supervisorName}</Table.Cell>
                    <Table.Cell>{item.supervisorContact}</Table.Cell>
                    <Table.Cell>{item.supervisorQualification}</Table.Cell>
                    <Table.Cell>
                      <div
                        className="text-md flex  p-2 cursor-pointer  hover:bg-main hover:text-white hover:rounded-lg focus: bg-secondary"
                        onClick={() => handleDeleteActivity(item.id)}
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

export default PlantingActivitiesTable;
