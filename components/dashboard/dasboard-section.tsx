import { SideOverview } from "./parts/overview";
import SalesOverview from "./parts/sales/sales-overview";

export default function DashboardSection() {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Sales Overview */}
        <SalesOverview />

        {/* Side Cards */}
        <SideOverview />
      </div>
    </>
  );
}
