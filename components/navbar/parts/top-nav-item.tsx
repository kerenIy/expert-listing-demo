export default function TopNavItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-2 whitespace-nowrap px-3 py-2 text-sm cursor-pointer transition leading-[100%] ${
        active
          ? "md:bg-[#176D5826] font-semibold px-5.25 py-1.75 text-[#176D58] rounded-xl"
          : "text-[#3D3D3D] hover:bg-[#176D5826] hover:text-[#176D58] hover:rounded-xl"
      }`}
    >
      {icon}
      {label}
    </div>
  );
}
