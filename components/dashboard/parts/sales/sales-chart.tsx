import { TriangleLeftIcon, TriangleRightIcon } from "@radix-ui/react-icons";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const chartData = [
  { month: "Jan", blue: 38, green: 28, red: 10 },
  { month: "Feb", blue: 8, green: 26, red: 12 },
  { month: "Mar", blue: 15, green: 7, red: 4 },
  { month: "Apr", blue: 14, green: 25, red: 10 },
  { month: "May", blue: 9, green: 4, red: 2 },
  { month: "Jun", blue: 38, green: 54, red: 8 },
  { month: "Jul", blue: 24, green: 36, red: 18 },
  { month: "Aug", blue: 18, green: 6, red: 16 },
  { month: "Sep", blue: 36, green: 33, red: 7 },
];

export default function SalesChart() {
  return (
    <div className="flex items-center h-52 w-[100%] md:w-[50%] text-[#919191]">
      <div className="bg-[#F5F5F5] rounded-full md:ml-[2%] hidden md:inline">
        <TriangleLeftIcon />
      </div>
      <ResponsiveContainer width="100%" height="100%" className={"text-xs"}>
        <BarChart data={chartData} barGap={6}>
          <XAxis dataKey="month" className="text-xs border-none" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="blue" fill="#4545FE" radius={[0, 0, 0, 0]} />
          <Bar dataKey="green" fill="#12B76A" radius={[0, 0, 0, 0]} />
          <Bar dataKey="red" fill="#F04438" radius={[0, 0, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      <div className="bg-[#F5F5F5] rounded-full md:mr-[2%] hidden md:inline">
        <TriangleRightIcon />
      </div>
    </div>
  );
}
