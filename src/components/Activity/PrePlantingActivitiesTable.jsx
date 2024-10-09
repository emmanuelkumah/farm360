import React, { useState } from "react";
import { useNavigation } from "react-router-dom";
import { Table, Pagination, Spinner } from "flowbite-react";
import BackButton from "../BackButton";
import { MdDelete, MdEdit } from "react-icons/md";
import { axiosbaseURL } from "../../api/axios";
import { toast } from "react-toastify";

const PrePlantingActivitiesTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemesPerPage] = useState(20);
  const [search, setSearch] = useState("");
  const [activities, setActivities] = useState(data);

  const totalActivities = activities.length;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentActivities = activities.slice(firstItemIndex, lastItemIndex);

  const navigation = useNavigation();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const onPageChange = (page) => setCurrentPage(page);

  const handleDeleteActivity = async (id) => {
    try {
      await axiosbaseURL.delete(`farm/activity/pre-planting/${id}`);
      setActivities(activities.filter((activity) => activity.id !== id));
      toast.success("Activity deleted successfully");
    } catch (error) {
      console.error("Error deleting planting activity:", error);
    }
  };
  const handleEditActivity = (id) => {
    console.log(id);
    // navigation.navigate(`/edit-pre-planting-activity/${id}`);
  };
  return (
    <div className="container mx-auto">
      <div>
        <div className="my-4">
          <BackButton />
          <div>
            {activities.length === 0 && (
              <p className="text-xl text-main flex justify-center">
                No pre-planting activities found
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
          <div className="overflow-x-auto">
            <Table striped>
              <Table.Head>
                <Table.HeadCell>Farm name</Table.HeadCell>
                <Table.HeadCell>Date</Table.HeadCell>
                <Table.HeadCell>Chemical sprayed</Table.HeadCell>
                <Table.HeadCell>Rate of application</Table.HeadCell>
                <Table.HeadCell>Material</Table.HeadCell>
                <Table.HeadCell>Yield</Table.HeadCell>
                <Table.HeadCell>Quantity</Table.HeadCell>
                <Table.HeadCell>Source</Table.HeadCell>
                <Table.HeadCell>Treatment method</Table.HeadCell>
                <Table.HeadCell>Supervisor</Table.HeadCell>
                <Table.HeadCell>Supervisor contact</Table.HeadCell>
                <Table.HeadCell>Supervisor qualification</Table.HeadCell>
                <Table.HeadCell>Actions</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {currentActivities
                  .filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.farmName.toLowerCase().includes(search);
                  })
                  .map((item) => (
                    <Table.Row
                      className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      key={item.id}
                    >
                      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        {item.farmName}
                      </Table.Cell>
                      <Table.Cell>{item.activityDate}</Table.Cell>
                      <Table.Cell>{item.chemicalSprayed}</Table.Cell>
                      <Table.Cell>{item.chemicalApplicationRate}</Table.Cell>
                      <Table.Cell>{item.plantingMaterial}</Table.Cell>
                      <Table.Cell>{item.plantingMaterialYield}</Table.Cell>

                      <Table.Cell>{item.plantingMaterialQuantity}</Table.Cell>
                      <Table.Cell>{item.plantingMaterialSource}</Table.Cell>
                      <Table.Cell>
                        {item.plantingMaterialTreatmentMethod}
                      </Table.Cell>
                      <Table.Cell>{item.supervisorName}</Table.Cell>
                      <Table.Cell>{item.supervisorContact}</Table.Cell>
                      <Table.Cell>{item.supervisorQualification}</Table.Cell>
                      <Table.Cell>
                        <div
                          className="text-md flex  p-2 cursor-pointer  hover:bg-main hover:text-white hover:rounded-lg focus: bg-secondary"
                          onClick={() => handleEditActivity(item.id)}
                        >
                          <span className="text-white">
                            <MdEdit />
                          </span>
                          <p className="text-white">Edit</p>
                        </div>
                      </Table.Cell>
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
    </div>
  );
};

export default PrePlantingActivitiesTable;
