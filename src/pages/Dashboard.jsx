import React from "react";
import { DashboardCard } from "../components";
import { FaUserGroup } from "react-icons/fa6";
import { PiPlant } from "react-icons/pi";
import { LuTrees } from "react-icons/lu";
import { IoQrCodeOutline } from "react-icons/io5";

const Dashboard = () => {
  return (
    <>
      <div className="mx-10">
        <div className="grid gap-5 mt-[30%]  md:grid-cols-4 md:m-10">
          <DashboardCard
            title="Total Farmers"
            data="23,445"
            icon={<FaUserGroup />}
          />
          <DashboardCard title="Total Farms" data="34,556" icon={<PiPlant />} />
          <DashboardCard
            title="Total Acerage"
            data="16,703"
            icon={<LuTrees />}
          />
          <DashboardCard
            title="Total Produce"
            data="16"
            icon={<IoQrCodeOutline />}
          />
        </div>
        <div>
          {/* Line Chart */}
          <h3>Line Chart here</h3>
        </div>
        <div>
          {/* Activities */}
          <h3>Activities here</h3>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
