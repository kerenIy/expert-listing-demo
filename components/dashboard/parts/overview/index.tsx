import IconItems from "@/components/_shared/icons";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export function SideOverview() {
  return (
    <div className="space-y-6">
      <SideStat
        title="Listings Overview"
        icon="listing-overview"
        metrics={[
          {
            label: "Total",
            value: "1.8k",
          },
          {
            label: "Active",
            value: "80",
          },
          {
            label: "Archived",
            value: "1k",
          },
        ]}
      />

      <SideStat
        title="Users Overview"
        icon="user-overview"
        metrics={[
          {
            label: "Total",
            value: "20.7k",
          },
          {
            label: "Riders",
            value: "8.5k",
          },
          {
            label: "Subscribers",
            value: "7.5k",
          },
        ]}
      />
    </div>
  );
}

interface SideStatProps {
  title: string;
  icon: "listing-overview" | "user-overview";
  metrics: {
    label: string;
    value: string;
  }[];
}

function SideStat({ title, metrics, icon }: SideStatProps) {
  return (
    <Card className="border border-[#E4E4E4] shadow-none bg-white pt-0 pb-6">
      <CardHeader className="border-b-[0.5px] border-[#E4E4E4] bg-[#F9FAFB] pt-6 pb-2 rounded-t-xl ">
        <CardTitle className="lg:flex justify-between items-center">
          <span className="flex items-center text-[17px] text-[#292929] font-medium">
            <IconItems type={icon} size="md" />
            <span className="ml-2">{title}</span>
          </span>
          <span className="text-[#4545FE] text-xs md:text-sm flex items-center mt-2 md:mt-0">
            View all <ChevronRight className="ml-1" />
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-3 px-6 py-2">
        {metrics.map((metric) => (
          <Metric
            key={metric.label}
            label={metric.label}
            value={metric.value}
          />
        ))}
      </CardContent>
    </Card>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs md:text-[15px] text-[#525252] leading-5 space-x-3.5 font-medium">
        {label}
      </p>
      <p className="text-[18px] md:text-[26px] text-[#141414] font-semibold leading-9.5 space-x-7.5">
        {value}
      </p>
    </div>
  );
}
