import React from "react";
import { Table } from "flowbite-react";
import { useLoaderData } from "react-router-dom";

const FertilizerApplicationData = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Farm name</Table.HeadCell>
            <Table.HeadCell>Date of application</Table.HeadCell>
            <Table.HeadCell>Type of application</Table.HeadCell>
            <Table.HeadCell>Fertilizer name</Table.HeadCell>
            <Table.HeadCell>Rate of application(ml per acre)</Table.HeadCell>
            <Table.HeadCell>Rate of application(ml per bag)</Table.HeadCell>
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
                  {activity.name}
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {activity.fertilizerdate}
                </Table.Cell>
                <Table.Cell>{activity.fertilizerType}</Table.Cell>

                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {activity.fertMethod}
                </Table.Cell>
                <Table.Cell>{activity.ratePerMl}</Table.Cell>
                <Table.Cell>{activity.ratePerBag}</Table.Cell>
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

export default FertilizerApplicationData;
