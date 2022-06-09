import React from "react";
import { GrDatabase, GrUserAdmin } from "react-icons/gr";
import { IoMdRocket } from "react-icons/io";
import {
  MdCalendarToday,
  MdDashboard,
  MdDataUsage,
  MdGarage,
  MdOutlineFormatTextdirectionRToL,
  MdQueuePlayNext,
  MdSettings,
} from "react-icons/md";
import { RiArrowDownSLine, RiArrowUpSLine, RiTeamLine } from "react-icons/ri";

import img from "../assets/images/images.png";
import logo from "../assets/images/logo.png";
const Sidebar = () => {
  const data = [
    {
      id: 1,
      name: "Dashboard",
      linkurl: "/Dashboard",
      iconname: <MdDashboard />,
    },
    {
      id: 2,
      name: "Booking",
      linkurl: "/Booking",
      iconname: <MdCalendarToday />,
    },
    {
      id: 3,
      name: "Product and Service",
      linkurl: "/Booking",
      iconname: <IoMdRocket />,
    },
    {
      id: 4,
      name: "Garages",
      linkurl: "/Booking",
      iconname: <MdGarage />,
    },
    {
      id: 5,
      name: "Users",
      linkurl: "/Booking",
      iconname: <GrUserAdmin />,
    },
    {
      id: 6,
      name: "Supports",
      linkurl: "/Booking",
      iconname: <IoMdRocket />,
    },
    {
      id: 7,
      name: "Consulattions",
      linkurl: "/Booking",
      iconname: <MdDataUsage />,
    },
    {
      id: 8,
      name: "Invoices",
      linkurl: "/Booking",
      iconname: <MdOutlineFormatTextdirectionRToL />,
    },
    {
      id: 9,
      name: "MG World",
      linkurl: "/Booking",
      iconname: <MdSettings />,
    },
    {
      id: 10,
      name: "Promotions",
      linkurl: "/Booking",
      iconname: <MdQueuePlayNext />,
    },
    {
      id: 11,
      name: "Team",
      linkurl: "/Booking",
      iconname: <RiTeamLine />,
    },
    {
      id: 12,
      name: "Data Insights",
      linkurl: "/Booking",
      iconname: <GrDatabase />,
    },
    {
      id: 13,
      name: "Fianance",
      linkurl: "/Booking",
      iconname: <IoMdRocket />,
    },
    {
      id: 14,
      name: "Autobox",
      linkurl: "/Booking",
      iconname: <MdDashboard />,
    },
  ];
  return (
    <>
      <aside
        className="w-64 fixed bg-[blue] z-50 h-screen top-0 left-0 bottom-0 "
        aria-label="Sidebar "
      >
        <div className="p-4">
          <div className="grid justify-center items-center w-full h-28 my-2  bg-transparent">
            <img
              src={logo}
              alt="logo"
              className="w-full h-full object-contain rounded-[20%]"
            />
          </div>
          <div className="flex bg-gray-500 py-2 rounded-md gap-2 text-[#fff] items-center">
            <div className="w-11 h-11 rounded-[50%] mx-1">
              <img
                src={img}
                alt="img"
                className="w-10 h-10 object-contain rounded-[50%]"
              />
            </div>
            <div className="text-sm">
              <h5>Mumbai western </h5>
              <p>Mira road</p>
            </div>
            <div>
              <RiArrowUpSLine />
              <RiArrowDownSLine />
            </div>
          </div>
        </div>
        <div className="overflow-y-auto py-4 px-3 bg-[blue] z-50 rounded text-[#fff]">
          <ul className="space-y-2">
            {data.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.linkurl}
                    className="flex items-center p-2 text-base font-normalrounded-lg dark:text-white hover:bg-gray-500 "
                  >
                    {item.iconname}
                    <span className="ml-3">{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
