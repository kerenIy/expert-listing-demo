import TopNavItem from "./top-nav-item";
import IconItems from "../../_shared/icons";

export default function NavBar() {
  return (
    <>
      <div className="hidden mt-20 md:flex md:justify-between md:items-center gap-4 md:overflow-x-auto overflow-x-visible py-4 mx-auto px-4 md:px-16 bg-white border-b border-[#F4F4F5]">
        <TopNavItem
          icon={<IconItems type="dashboard" />}
          label="Dashboard"
          active
        />
        <TopNavItem icon={<IconItems type="listings" />} label="Listings" />
        <TopNavItem icon={<IconItems type="users" />} label="Users" />
        <TopNavItem icon={<IconItems type="requests" />} label="Request" />
        <TopNavItem
          icon={<IconItems type="applications" />}
          label="Applications"
        />
        <TopNavItem icon={<IconItems type="tasks" />} label="Tasks" />
      </div>

      <div className="md:hidden mt-20 flex md:grid-cols-6 gap-6 overflow-x-auto md:overflow-x-visible py-4 mx-auto px-6 md:px-16 bg-white border-b border-[#F4F4F5]">
        <TopNavItem
          icon={<IconItems type="dashboard" />}
          label="Dashboard"
          active
        />
        <TopNavItem icon={<IconItems type="listings" />} label="Listings" />
        <TopNavItem icon={<IconItems type="users" />} label="Users" />
        <TopNavItem icon={<IconItems type="requests" />} label="Request" />
        <TopNavItem
          icon={<IconItems type="applications" />}
          label="Applications"
        />
        <TopNavItem icon={<IconItems type="tasks" />} label="Tasks" />
      </div>
    </>
  );
}
