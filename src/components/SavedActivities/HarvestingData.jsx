import React from "react";
import { Table } from "flowbite-react";
import { useActivitiesContext } from "../../context/FarmersProvider";
const HarvestingData = () => {
  const {
    activitiesState: { harvesting },
  } = useActivitiesContext();
  console.log(harvesting);
  return (
    <>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Farm name</Table.HeadCell>
            <Table.HeadCell>Harvest date</Table.HeadCell>
            <Table.HeadCell>Acres harvested</Table.HeadCell>
            <Table.HeadCell>Bags harvested</Table.HeadCell>
            <Table.HeadCell>Weight per bag harvested</Table.HeadCell>
            <Table.HeadCell>Harvesting mode</Table.HeadCell>
            <Table.HeadCell>Machine used</Table.HeadCell>
            <Table.HeadCell>Supervisor</Table.HeadCell>
            <Table.HeadCell>Contact</Table.HeadCell>
            <Table.HeadCell>Certificate</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {harvesting.map((activity) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={activity.farmId}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {activity.farmId}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {activity.date}
                </Table.Cell>
                <Table.Cell>{activity.acres}</Table.Cell>
                <Table.Cell>{activity.bags}</Table.Cell>
                <Table.Cell>{activity.weight}</Table.Cell>
                <Table.Cell>{activity.mode}</Table.Cell>
                <Table.Cell>{activity.machine}</Table.Cell>
                <Table.Cell>{activity.supervisor}</Table.Cell>
                <Table.Cell>{activity.contact}</Table.Cell>
                <Table.Cell>{activity.cert}</Table.Cell>

                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default HarvestingData;
