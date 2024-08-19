import React from "react";
import { Table } from "flowbite-react";
import { useLoaderData } from "react-router-dom";

const WeedControlData = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Farm name</Table.HeadCell>
            <Table.HeadCell>Weeding Control Date</Table.HeadCell>
            <Table.HeadCell>Weed Control Method</Table.HeadCell>
            <Table.HeadCell>Chemical used</Table.HeadCell>

            <Table.HeadCell>Rate of chemical application</Table.HeadCell>
            <Table.HeadCell>Supervisor</Table.HeadCell>
            <Table.HeadCell>Contact</Table.HeadCell>
            <Table.HeadCell>Certificate</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {data.map((activity, index) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={index}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {activity.farmId}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {activity.dateOfWeeding}
                </Table.Cell>
                <Table.Cell>{activity.weedControlMethod}</Table.Cell>
                <Table.Cell>{activity.chemical}</Table.Cell>

                <Table.Cell>{activity.rateOfApplication}</Table.Cell>
                <Table.Cell>{activity.supervisor}</Table.Cell>
                <Table.Cell>{activity.contact}</Table.Cell>
                <Table.Cell>{activity.certificateOfSupervisor}</Table.Cell>
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

export default WeedControlData;
