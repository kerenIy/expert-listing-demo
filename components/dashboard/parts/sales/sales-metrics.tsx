import IconItems from "@/components/_shared/icons";

export default function SalesMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
      <Stat
        title="Total Inflow"
        value="₦120,000,000.00"
        colorCode="#4545FE"
        percent="2.5%"
        positive
      />
      <Stat
        title="MRR"
        value="₦50,000,000.00"
        positive
        percent="2.5%"
        colorCode="#12B76A"
      />
      <Stat
        title="Commission Revenue"
        value="₦200,000,000.00"
        net
        percent="0.5%"
        colorCode="#14B8A6"
      />
      <Stat
        title="GMV"
        value="₦100,000,000.00"
        negative
        percent="0.5%"
        colorCode="#F04438"
      />
    </div>
  );
}

function Stat({
  title,
  value,
  positive,
  negative,
  net,
  colorCode,
  percent,
}: {
  title: string;
  value: string;
  positive?: boolean;
  negative?: boolean;
  net?: boolean;
  colorCode: string;
  percent?: string;
}) {
  return (
    <div className="rounded-xl border border-[#E4E4E4] p-3 h-fit">
      <p
        style={{ color: colorCode }}
        className="font-semibold text-[16px] md:text-[20px] leading-[130%]"
      >
        {value}
      </p>
      <p className="flex items-center text-[11px] text-[#3D3D3D] font-medium leading-[100%] my-2 space-x-4">
        {title}{" "}
        <span
          style={{
            color: negative ? colorCode : positive ? "#12B76A" : "#14B8A6",
          }}
          className="ml-1.5 flex items-center space-x-1"
        >
          <IconItems
            type={positive ? "positive" : negative ? "negative" : "net"}
            size="sm"
          />
          <span>{percent && `${percent}`}</span>
        </span>
      </p>
    </div>
  );
}
