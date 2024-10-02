import React, { useState } from "react";
import { Table, Pagination, Spinner } from "flowbite-react";
import BackButton from "../BackButton";
import { useNavigation } from "react-router-dom";
import { axiosbaseURL } from "../../api/axios";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const LandPreparationTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemesPerPage] = useState(10);
  const [search, setSearch] = useState("");
  const [activities, setActivities] = useState(data);

  const totalActivities = activities.length;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentActivities = activities.slice(firstItemIndex, lastItemIndex);

  const navigation = useNavigation();

  const handleDeleteActivity = async (id) => {
    try {
      await axiosbaseURL.delete(`farm/activity/land-preparation/${id}`);
      setActivities(activities.filter((activity) => activity.id !== id));
      toast.success("Activity deleted successfully");
    } catch (error) {
      console.error("Error deleting planting activity:", error);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const onPageChange = (page) => setCurrentPage(page);
  return (
    <div className="overflow-x-auto">
      <div className="my-4">
        <BackButton />
        <div>
          {" "}
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
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Farm name</Table.HeadCell>
            <Table.HeadCell>Land size</Table.HeadCell>
            <Table.HeadCell>Clearing date</Table.HeadCell>
            <Table.HeadCell>Mound moulding date</Table.HeadCell>
            <Table.HeadCell>Ridging date</Table.HeadCell>
            <Table.HeadCell>Ploughing date</Table.HeadCell>
            <Table.HeadCell>Harrowing date</Table.HeadCell>

            <Table.HeadCell>Manual preparation date</Table.HeadCell>
            <Table.HeadCell>Spraying date</Table.HeadCell>
            <Table.HeadCell>Chemical sprayed</Table.HeadCell>

            <Table.HeadCell>Rate of application</Table.HeadCell>
            <Table.HeadCell>Supervisor</Table.HeadCell>
            <Table.HeadCell>Supervisor contact</Table.HeadCell>
            <Table.HeadCell>Supervisor qualification</Table.HeadCell>
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
                  <Table.Cell>{item.landSize}</Table.Cell>
                  <Table.Cell>{item.clearingDate}</Table.Cell>
                  <Table.Cell>{item.moundMouldingDate}</Table.Cell>
                  <Table.Cell>{item.ridgingDate}</Table.Cell>
                  <Table.Cell>{item.ploughingDate}</Table.Cell>
                  <Table.Cell>{item.harrowingDate}</Table.Cell>
                  <Table.Cell>{item.manualPreparationDate}</Table.Cell>

                  <Table.Cell>{item.sprayingDate}</Table.Cell>
                  <Table.Cell>{item.chemicalSprayed}</Table.Cell>
                  <Table.Cell>{item.chemicalApplicationRate}</Table.Cell>
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

export default LandPreparationTable;
