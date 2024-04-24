import { Logo } from "./Icons/Logo";
import { Plus } from "./Icons/Plus";

const NavItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="w-full top-24 absolute overflow-visible flex flex-row items-center flex-nowrap hover:bg-[#ffffff1a] hover:cursor-pointer">
    <div className="min-w-16 min-h-[42px] flex flex-col items-center justify-center">
      {icon}
    </div>
    <div className="text-nowrap text-[#deebff] uppercase font-CircularStdBold font-bold text-[12px] select-none">
      {label}
    </div>
  </div>
);

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-16 bg-[#0747a6] h-full hover:w-[200px] transition-all duration-100 ease-in-out shadow-2xl text-[#c1d6f2] overflow-hidden">
      <div className="w-full top-5 absolute overflow-visible flex flex-row items-center flex-nowrap">
        <div className="min-w-16 min-h-16 flex flex-col items-center justify-center">
          <Logo size={28} />
        </div>
      </div>
      <NavItem icon={<Plus />} label="create issue" />
    </div>
  );
}
