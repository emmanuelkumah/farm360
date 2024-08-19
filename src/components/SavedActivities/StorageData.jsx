import React from "react";
import { Table } from "flowbite-react";
import { useLoaderData } from "react-router-dom";

const StorageData = () => {
  const data = useLoaderData();

  return (
    <>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Farm name</Table.HeadCell>
            <Table.HeadCell>Storage date</Table.HeadCell>
            <Table.HeadCell>Quantity</Table.HeadCell>
            <Table.HeadCell>Storage type</Table.HeadCell>
            <Table.HeadCell>Quality</Table.HeadCell>
            <Table.HeadCell>Community</Table.HeadCell>
            <Table.HeadCell>District</Table.HeadCell>
            <Table.HeadCell>Chemical</Table.HeadCell>
            <Table.HeadCell>Rate of application</Table.HeadCell>
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
                <Table.Cell>{activity.storage}</Table.Cell>
                <Table.Cell>{activity.storageType}</Table.Cell>

                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {activity.type}
                </Table.Cell>
                <Table.Cell>{activity.otherType}</Table.Cell>

                <Table.Cell>{activity.community}</Table.Cell>
                <Table.Cell>{activity.district}</Table.Cell>
                <Table.Cell>{activity.quality}</Table.Cell>
                <Table.Cell>{activity.rate}</Table.Cell>
                <Table.Cell>{activity.supervisor}</Table.Cell>
                <Table.Cell>{activity.contact}</Table.Cell>
                <Table.Cell>{activity.certificate}</Table.Cell>

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

export default StorageData;
