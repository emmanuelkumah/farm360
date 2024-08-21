import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Weeding",
    counts: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Ploughing",
    counts: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Harrowing",
    counts: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Planting",
    counts: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Pest control",
    counts: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Fertilizer application",
    counts: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const DashboardBarChart = () => {
  return (
    <>
      <div className="h-screen bg-white p-4 rounded-xl border border-gray-200 flex flex-col flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={20}
            height={40}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="counts"
              fill="#357960"
              activeBar={<Rectangle fill="#357960" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default DashboardBarChart;
