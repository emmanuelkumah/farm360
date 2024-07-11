import { Button } from "flowbite-react";
import { Table } from "flowbite-react";
import { MdDelete, MdEdit } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { useFarmersContext } from "../context/FarmersProvider";

const Farmers = () => {
  const data = useFarmersContext();
  return (
    <div>
      <div className="m-10">
        <input
          className="w-1/2 rounded-lg"
          type="text"
          name="search"
          id=""
          placeholder="Search"
        />
        <div className="mt-10">
          <Button>Add new farmer</Button>
        </div>
        <div className="overflow-x-auto">
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Picture</Table.HeadCell>
              <Table.HeadCell>First Name</Table.HeadCell>
              <Table.HeadCell>Last Name</Table.HeadCell>
              <Table.HeadCell>District</Table.HeadCell>
              <Table.HeadCell>Address</Table.HeadCell>
              <Table.HeadCell>Phone</Table.HeadCell>
              <Table.HeadCell>Primary Farm</Table.HeadCell>
              <Table.HeadCell>Crop</Table.HeadCell>
              <Table.HeadCell>Farm size(acres)</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {data.map((farmer) => (
                <Table.Row
                  key={farmer.id}
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    <img
                      src={farmer.image}
                      alt="image"
                      className="rounded-full w-10 h-10"
                    />
                  </Table.Cell>
                  <Table.Cell>{farmer.firstName}</Table.Cell>
                  <Table.Cell>{farmer.lastName}</Table.Cell>
                  <Table.Cell>{farmer.district}</Table.Cell>
                  <Table.Cell>{farmer.address}</Table.Cell>
                  <Table.Cell>{farmer.phone}</Table.Cell>
                  <Table.Cell>{farmer.primaryFarm}</Table.Cell>
                  <Table.Cell>{farmer.crop}</Table.Cell>
                  <Table.Cell>{farmer.farmSize}</Table.Cell>
                  <Table.Cell>
                    <div className="flex gap-5">
                      <GrView />
                      <MdEdit />

                      <MdDelete />
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Farmers;
