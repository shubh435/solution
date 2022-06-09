import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { IoIosNotifications } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
const Header = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <nav
        className="flex items-center justify-between flex-wrap bg-[#eee]  text-[black] p-6 -z-10 sticky left-64 right-0 top-0 w-[87.5%]"
        aria-label="navbar"
      >
        <div className="flex items-center flex-shrink-0  mr-6">
          <span className="font-semibold text-xl tracking-tight">Overview</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover: hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="flex h-5 w-[70%] items-center mx-auto ">
          <div className="flex justify-start rounded-2xl">
            <form className=" inline-block w-full h-9 min-w-[300px]  relative rounded-2xl mx-auto">
              <div className=" flex justify-between items-center  rounded-2xl ">
                <div className="inline-block w-full relative  rounded-2xl">
                  <button
                    className="flex absolute items-center  text-gray-600  top-0 left-1  bottom-0"
                    type="submit"
                    onClick={handleSearch}
                  >
                    <HiOutlineSearch />
                  </button>
                  <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    className="py-0 px-6  border-0 outline-none text-[14px] rounded-2xl  h-9 w-full placeholder:ml-6"
                    style={{
                      borderRadius: "4px 0 0 4px",
                    }}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>
          <div
            className="flex flex-auto flex-grow-0 flex-shrink-0 min-w-[200px] my-0 mx-5 justify-end shadow-md
         "
          >
            <div className="border-black border-[1px] py-2 px-2 border-solid mx-0 ">
              day
            </div>
            <div className="border-black border-[1px] py-2 px-2 border-solid mx-0 ">
              weeks
            </div>
            <div className="border-black border-[1px] py-2 px-2 border-solid mx-0  bg-[blue] text-white">
              months
            </div>
          </div>
          <div
            className="flex flex-auto flex-grow-0 flex-shrink-0 min-w-[200px] my-0 mx-5 justify-end
         "
          >
            <div className="flex  items-center p-2 gap-2 border-black border-[1px] border-solid">
              <MdOutlineSystemUpdateAlt />
              <p>Jan, 2019 - Dec, 2019</p>
            </div>
          </div>
          <div
            className=" flex-auto flex-grow-0 flex-shrink-0 my-0 mx-5 justify-end
         "
          >
            <div className=" flex items-center h-full cursor-pointer leading-5 text-[16px] tracking-[0.1px] font-[500] ">
              <div className="relative">
                <IoIosNotifications className="w-6 h-6" />
                <span
                  className="absolute left-2  top-[-10px]  text-center rounded-lg w-[18px] h-[18px] bg-[#ff6161]
                 border-[1px] border-solid border-white font-[400] text-[#f0f0f0] text-xs"
                >
                  4
                </span>
              </div>
            </div>
          </div>
          <div
            className=" flex   my-0  ml-0 justify-start 
         "
          >
            <div className="flex relative items-center">
              <div className="h-full w-full flex">
                <div className="w-full h-full ">
                  <GrUserAdmin className="w-10 h-10 rounded-[50%] object-contain" />
                </div>
                <RiArrowDropDownLine className="w-10 h-10  " />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
