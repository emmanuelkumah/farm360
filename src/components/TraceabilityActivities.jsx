import React, { useState } from "react";
import { dummyData } from "../data/dummyData";
import { Checkbox, Label } from "flowbite-react";

const TraceabilityActivities = () => {
  const { activities } = dummyData;
  const [items, setItems] = useState(activities);
  //   console.log(items);

  //   const handleCheckboxChange = (id) => {
  //     setItems(
  //       items.map((item) =>
  //         item.id === id ? { ...item, checked: !item.checked } : item
  //       )
  //     );
  //   };
  return (
    <>
      <section>
        <h3 className="text-xl mt-4">Traceability Activites</h3>
        {/* <p className="my-3">Select the activities for the flow</p>
        <div className="flex max-w-md flex-col gap-4" id="checkbox">
          {items.map((activity) => {
            return (
              <div className="flex items-center gap-2" key={activity.id}>
                <Checkbox
                  id={activity.name}
                  checked={activity.checked}
                  onChange={() => handleCheckboxChange(activity.id)}
                />
                <Label htmlFor={activity.name}>{activity.name}</Label>
              </div>
            );
          })}
        </div> */}
      </section>
    </>
  );
};

export default TraceabilityActivities;
