import React from "react";
import { activities } from "../../data/demo";
import { Link } from "react-router-dom";

const ListActivities = () => {
  return (
    <div>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <Link to={activity.link}>{activity.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListActivities;
