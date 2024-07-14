import React from "react";
import { DashboardBarChart, DashboardCard, RecentActs } from "../components";
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
            title="Total Produce Tracked"
            data="16"
            icon={<IoQrCodeOutline />}
          />
        </div>
        <div>
          <h3 className="text-xl my-5">Recent Activities</h3>
          <DashboardBarChart />
        </div>
        <section>
          {/* Activities */}
          <h3 className="text-xl mt-5">Recent Actors </h3>
          <RecentActs />
        </section>
      </div>
    </>
  );
};

export default Dashboard;
