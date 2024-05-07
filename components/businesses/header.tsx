import { Menu } from "lucide-react";

interface Props {
  onToggleSidebarMenu: () => void;
  sidebarOpen: boolean;
}

export function Header({ onToggleSidebarMenu, sidebarOpen }: Props) {
  const visibility = sidebarOpen ? "hidden" : "visible";
  return (
    <div
      className={`${visibility} flex items-center rounded-none border-b border-none px-4 lg:px-8`}
    >
      <div
        onClick={onToggleSidebarMenu}
        className=" block lg:hidden mr-4 cursor-pointer"
      >
        <Menu />
      </div>
      <h1 className="text-3xl font-semibold tracking-tight py-3">
        Cheap <span className="text-orange-400">&</span> Yummy
      </h1>
    </div>
  );
}
