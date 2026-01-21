import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SalesChart from "./sales-chart";
import SalesMetrics from "./sales-metrics";

const dateOptions = [
  { label: "1 Week", value: "week" },
  { label: "1 Month", value: "month" },
  { label: "1 Year", value: "year" },
];

export default function SalesOverview() {
  return (
    <Card className="xl:col-span-2 border-[#E4E4E4] border bg-[#FFFFFF] shadow-none px-4 md:px-0 pt-6 pb-4">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <CardTitle className="text-[#191919] text-[20px] leading-[100%] font-semibold">
              Sales Overview
            </CardTitle>
            <p className="mt-3 text-[13px] text-[#606060]">
              Showing overview Jan 2022 - Sep 2022
            </p>
          </div>
          <Button
            variant="outline"
            className="py-3 md:py-6 px-16 md:px-36 max-w-25.25 md:max-w-35.25 font-semibold text-[13px]"
          >
            View Transactions
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex justify-center md:justify-end items-end border-b border-[#E4E4E4] px-6">
          {dateOptions.map((item, index) => (
            <span
              key={index}
              className={`${item.value === "year" && "bg-[#F5F5F5] rounded-xl text-[#3D3D3D] font-semibold ml-0.5"} flex items-center text-center py-2 px-2 md:px-4 font-normal text-xs md:text-sm mb-2 md:mb-4`}
            >
              <span className="text-center">{item.label}</span>
            </span>
          ))}
        </div>

        <div className="md:flex space-x-6">
          <SalesChart />
          <SalesMetrics />
        </div>
      </CardContent>
    </Card>
  );
}
