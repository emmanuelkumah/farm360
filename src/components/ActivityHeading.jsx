import React from "react";

const ActivityHeading = ({ activityHeading }) => {
  return (
    <div>
      <h1 className="text-xl mt-10 md:text-3xl font-bold mb-6 text-center">
        {activityHeading}
      </h1>
    </div>
  );
};

export default ActivityHeading;
