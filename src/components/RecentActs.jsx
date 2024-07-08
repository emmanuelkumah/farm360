import React from "react";
import { Table } from "flowbite-react";
import { recentActors } from "../data/recentActors";

const RecentActs = () => {
  return (
    <div className="overflow-x-auto my-10">
      <Table>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Activity</Table.HeadCell>
          <Table.HeadCell>Farm</Table.HeadCell>
          <Table.HeadCell>Farm Owner</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {recentActors.map((actor) => (
            <Table.Row
              key={actor.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {actor.name}
              </Table.Cell>
              <Table.Cell>{actor.date}</Table.Cell>
              <Table.Cell>{actor.activity}</Table.Cell>
              <Table.Cell>{actor.farm}</Table.Cell>
              <Table.Cell>{actor.farmOwner}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default RecentActs;
