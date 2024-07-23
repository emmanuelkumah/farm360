import React from "react";
import { Table } from "flowbite-react";
import { useTraceabilityContext } from "../context/TraaceabilityProvider";

const TraceabilityFlowTable = () => {
  const { state } = useTraceabilityContext();
  //   console.log(state);
  return (
    <>
      <div className="overflow-x-auto">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Flow Name</Table.HeadCell>
            <Table.HeadCell>Tracked Events</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {/* {state.traceability.map((flow) => (
              <Table.Row
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
                key={flow.id}
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {flow.name}
                </Table.Cell>
                <Table.Cell>7</Table.Cell>
                <Table.Cell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </Table.Cell>
              </Table.Row>
            ))} */}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default TraceabilityFlowTable;
