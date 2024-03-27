import { AiFillDollarCircle } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { GrTransaction } from "react-icons/gr";
import { IoPerson, IoSettings } from "react-icons/io5";
import { MdAccountBalanceWallet, MdDashboard } from "react-icons/md";
import { ISideBarProps } from "./interface";
import { CiLogout } from "react-icons/ci";
import { useEffect, useState } from "react";

const menuItems: Array<ISideBarProps> = [
  {
    title: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    title: "Wallet",
    icon: <MdAccountBalanceWallet />,
  },
  {
    title: "Transactions",
    icon: <GrTransaction />,
  },
  {
    title: "Cashback",
    icon: <FaDatabase />,
  },
  {
    title: "Payments",
    icon: <AiFillDollarCircle />,
  },
  {
    title: "Investment",
    icon: <FiArrowUpRight />,
  },
  {
    title: "Profile",
    icon: <IoPerson />,
  },
  {
    title: "Support",
    icon: <MdDashboard />,
  },
];

const settingItems: Array<ISideBarProps> = [
  {
    title: "Settings",
    icon: <IoSettings />,
  },
  {
    title: "Log Out",
    icon: <CiLogout />,
  },
];

const SideBarItem = ({ item }: { item: ISideBarProps }) => {
  return (
    <li>
      <a className="text-primary text-lg mb-2">
        {item.icon} {item.title}
      </a>
    </li>
  );
};

const SideBar = () => {
  const [theme, setTheme] = useState<"light" | "synthwave">(
    (localStorage.getItem("theme") as "light" | "synthwave") ?? "light"
  );

  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.querySelector('html')?.setAttribute("data-theme", theme)
  }, [theme])

  return (
    <div className="drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 pl-7 min-h-full bg-base-200 text-base-content font-semibold">
          <li className="text-3xl h-20 text-center font-bold">Wallet</li>
          {/* Sidebar content here */}
          {menuItems.map((item) => (
            <SideBarItem item={item} />
          ))}
          <hr className="mb-4" />
          {settingItems.map((item) => (
            <SideBarItem item={item} />
          ))}
          <div className="absolute bottom-10 left-10 flex flex-row items-center">
            <input
              type="checkbox"
              className="toggle"
              checked={theme === "light" ? true : false}
              onClick={() =>
                setTheme((current) =>
                  current === "light" ? `synthwave` : `light`
                )
              }
            />
            <p className="text-sm ml-3">
              Switch to {theme === "light" ? `dark` : `light`}
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
