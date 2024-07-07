import { useState } from "react";
import { LuPackageSearch } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa6";import { FaChevronLeft } from "react-icons/fa";
import './style.css'
import { TaskList } from "./taskList";
import { TaskDetails } from "./taskdetails";

export const Task = () => {
  const [view, setView] = useState("card");
  const [taskActivity, setTaskActivity] = useState('todo')
  return (
    <section className="">


    <TaskDetails/>



      <div className="flex itmes-center justify-between">
        <div class="relative">
          <input
            type="text"
            placeholder="Search task here"
            class="bg-gray-100 rounded-full focus:border-gray-500 rounded-lg py-2 px-4 pl-8 outline-none"
          />
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <LuPackageSearch className="text-gray-500" />
          </div>
        </div>

        <div
          className={`bg-gray-100 flex items-center gap-4 rounded-full px-5`}
        >
          <p
            onClick={() => setView("card")}
            className={`${view === "card" ? "text-white bg-blue-500" : ""
              } rounded-full px-3 cursor-pointer text-sm py-1`}
          >
            Card View
          </p>
          <p
            onClick={() => setView("list")}
            className={`${view === "list" ? "text-white bg-blue-500" : ""
              } rounded-full px-3 cursor-pointer text-sm py-1`}
          >
            List View
          </p>
          <p
            onClick={() => setView("calender")}
            className={`${view === "calender" ? "text-white bg-blue-500" : ""
              } rounded-full px-3 cursor-pointer text-sm py-1`}
          >
            Calender View
          </p>
        </div>
      </div>


      {/* task card view */}
      {
        view === "card" ? <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-5  ">
          {/* Todo */}
          <div className="">
            <span className="font-medium ">TO-DO (2)</span>
            <div className=" scroll-container">
              <div className="p-1 rounded-md mt-2" style={{ backgroundColor: "#F0F8FA" }}>
                {/* task */}
                <div className="bg-white shadow rounded-md p-5 m-4 leading-5">
                  <p className="flex items-center justify-between text-gray-400" style={{ fontSize: "12px" }}>
                    <span>ID #3232SDA</span>
                    <BsThreeDotsVertical />
                  </p>
                  <p className="text-gray-500" style={{ fontSize: "13px" }} >HR Asset Managmenet system</p>
                  <p className="text-gray-900" style={{ fontSize: "16px" }}>Mobail page desing</p>
                  <p className="text-gray-600" style={{ fontSize: "13px" }}>UX-REVAMP - Office managmeent system</p>
                  <p className="w-20 text-center rounded-md font-bold text-sm mt-1" style={{ background: "#E9FBFF", color: "#00B4D8" }}>TO-DO</p>
                  <div className="flex items-center justify-between mt-10">
                    <span className="text-gray-400" style={{ fontSize: "13px" }}> July 5, 2024</span>
                    <span className="h-6 w-6 text-center rounded-full" style={{ background: "#E9FBFF", color: "#00B4D8", paddingTop: "2px" }}>S</span>
                  </div>
                </div>

                {/* task */}
                <div className="bg-white shadow rounded-md p-5 m-4 leading-5">
                  <p className="flex items-center justify-between text-gray-400" style={{ fontSize: "12px" }}>
                    <span>ID #3232SDA</span>
                    <BsThreeDotsVertical />
                  </p>
                  <p className="text-gray-500" style={{ fontSize: "13px" }} >HR Asset Managmenet system</p>
                  <p className="text-gray-900" style={{ fontSize: "16px" }}>Mobail page desing</p>
                  <p className="text-gray-600" style={{ fontSize: "13px" }}>UX-REVAMP - Office managmeent system</p>
                  <p className="w-20 text-center rounded-md font-bold text-sm mt-1" style={{ background: "#E9FBFF", color: "#00B4D8" }}>TO-DO</p>
                  <div className="flex items-center justify-between mt-10">
                    <span className="text-gray-400" style={{ fontSize: "13px" }}> July 5, 2024</span>
                    <span className="h-6 w-6 text-center rounded-full" style={{ background: "#E9FBFF", color: "#00B4D8", paddingTop: "2px" }}>S</span>
                  </div>
                </div>

                {/* task */}
                <div className="bg-white shadow rounded-md p-5 m-4 leading-5">
                  <p className="flex items-center justify-between text-gray-400" style={{ fontSize: "12px" }}>
                    <span>ID #3232SDA</span>
                    <BsThreeDotsVertical />
                  </p>
                  <p className="text-gray-500" style={{ fontSize: "13px" }} >HR Asset Managmenet system</p>
                  <p className="text-gray-900" style={{ fontSize: "16px" }}>Mobail page desing</p>
                  <p className="text-gray-600" style={{ fontSize: "13px" }}>UX-REVAMP - Office managmeent system</p>
                  <p className="w-20 text-center rounded-md font-bold text-sm mt-1" style={{ background: "#E9FBFF", color: "#00B4D8" }}>TO-DO</p>
                  <div className="flex items-center justify-between mt-10">
                    <span className="text-gray-400" style={{ fontSize: "13px" }}> July 5, 2024</span>
                    <span className="h-6 w-6 text-center rounded-full" style={{ background: "#E9FBFF", color: "#00B4D8", paddingTop: "2px" }}>S</span>
                  </div>
                </div>

                {/* task */}
                <div className="bg-white shadow rounded-md p-5 m-4 leading-5">
                  <p className="flex items-center justify-between text-gray-400" style={{ fontSize: "12px" }}>
                    <span>ID #3232SDA</span>
                    <BsThreeDotsVertical />
                  </p>
                  <p className="text-gray-500" style={{ fontSize: "13px" }} >HR Asset Managmenet system</p>
                  <p className="text-gray-900" style={{ fontSize: "16px" }}>Mobail page desing</p>
                  <p className="text-gray-600" style={{ fontSize: "13px" }}>UX-REVAMP - Office managmeent system</p>
                  <p className="w-20 text-center rounded-md font-bold text-sm mt-1" style={{ background: "#E9FBFF", color: "#00B4D8" }}>TO-DO</p>
                  <div className="flex items-center justify-between mt-10">
                    <span className="text-gray-400" style={{ fontSize: "13px" }}> July 5, 2024</span>
                    <span className="h-6 w-6 text-center rounded-full" style={{ background: "#E9FBFF", color: "#00B4D8", paddingTop: "2px" }}>S</span>
                  </div>
                </div>

                {/* task */}
                <div className="bg-white shadow rounded-md p-5 m-4 leading-5">
                  <p className="flex items-center justify-between text-gray-400" style={{ fontSize: "12px" }}>
                    <span>ID #3232SDA</span>
                    <BsThreeDotsVertical />
                  </p>
                  <p className="text-gray-500" style={{ fontSize: "13px" }} >HR Asset Managmenet system</p>
                  <p className="text-gray-900" style={{ fontSize: "16px" }}>Mobail page desing</p>
                  <p className="text-gray-600" style={{ fontSize: "13px" }}>UX-REVAMP - Office managmeent system</p>
                  <p className="w-20 text-center rounded-md font-bold text-sm mt-1" style={{ background: "#E9FBFF", color: "#00B4D8" }}>TO-DO</p>
                  <div className="flex items-center justify-between mt-10">
                    <span className="text-gray-400" style={{ fontSize: "13px" }}> July 5, 2024</span>
                    <span className="h-6 w-6 text-center rounded-full" style={{ background: "#E9FBFF", color: "#00B4D8", paddingTop: "2px" }}>S</span>
                  </div>
                </div>
              </div>


            </div>
          </div>

          {/* Wip */}
          <div className="">
            <span className="font-medium ">WIP (5)</span>
            <div className=" scroll-container">
              <div className="p-1 rounded-md mt-2" style={{ backgroundColor: "#F0F8FA" }}>
                {/* task */}
                <div className="bg-white shadow rounded-md p-5 m-4 leading-5">
                  <p className="flex items-center justify-between text-gray-400" style={{ fontSize: "12px" }}>
                    <span>ID #3232SDA</span>
                    <BsThreeDotsVertical />
                  </p>
                  <p className="text-gray-500" style={{ fontSize: "13px" }} >HR Asset Managmenet system</p>
                  <p className="text-gray-900" style={{ fontSize: "16px" }}>Mobail page desing</p>
                  <p className="text-gray-600" style={{ fontSize: "13px" }}>UX-REVAMP - Office managmeent system</p>
                  <p className="w-20 text-center rounded-md font-bold text-sm mt-1" style={{ background: "#E9FBFF", color: "#00B4D8" }}>TO-DO</p>
                  <div className="flex items-center justify-between mt-10">
                    <span className="text-gray-400" style={{ fontSize: "13px" }}> July 5, 2024</span>
                    <span className="h-6 w-6 text-center rounded-full" style={{ background: "#E9FBFF", color: "#00B4D8", paddingTop: "2px" }}>S</span>
                  </div>
                </div>

                {/* task */}
                <div className="bg-white shadow rounded-md p-5 m-4 leading-5">
                  <p className="flex items-center justify-between text-gray-400" style={{ fontSize: "12px" }}>
                    <span>ID #3232SDA</span>
                    <BsThreeDotsVertical />
                  </p>
                  <p className="text-gray-500" style={{ fontSize: "13px" }} >HR Asset Managmenet system</p>
                  <p className="text-gray-900" style={{ fontSize: "16px" }}>Mobail page desing</p>
                  <p className="text-gray-600" style={{ fontSize: "13px" }}>UX-REVAMP - Office managmeent system</p>
                  <p className="w-20 text-center rounded-md font-bold text-sm mt-1" style={{ background: "#E9FBFF", color: "#00B4D8" }}>TO-DO</p>
                  <div className="flex items-center justify-between mt-10">
                    <span className="text-gray-400" style={{ fontSize: "13px" }}> July 5, 2024</span>
                    <span className="h-6 w-6 text-center rounded-full" style={{ background: "#E9FBFF", color: "#00B4D8", paddingTop: "2px" }}>S</span>
                  </div>
                </div>

                {/* task */}
                <div className="bg-white shadow rounded-md p-5 m-4 leading-5">
                  <p className="flex items-center justify-between text-gray-400" style={{ fontSize: "12px" }}>
                    <span>ID #3232SDA</span>
                    <BsThreeDotsVertical />
                  </p>
                  <p className="text-gray-500" style={{ fontSize: "13px" }} >HR Asset Managmenet system</p>
                  <p className="text-gray-900" style={{ fontSize: "16px" }}>Mobail page desing</p>
                  <p className="text-gray-600" style={{ fontSize: "13px" }}>UX-REVAMP - Office managmeent system</p>
                  <p className="w-20 text-center rounded-md font-bold text-sm mt-1" style={{ background: "#E9FBFF", color: "#00B4D8" }}>TO-DO</p>
                  <div className="flex items-center justify-between mt-10">
                    <span className="text-gray-400" style={{ fontSize: "13px" }}> July 5, 2024</span>
                    <span className="h-6 w-6 text-center rounded-full" style={{ background: "#E9FBFF", color: "#00B4D8", paddingTop: "2px" }}>S</span>
                  </div>
                </div>

                {/* task */}
                <div className="bg-white shadow rounded-md p-5 m-4 leading-5">
                  <p className="flex items-center justify-between text-gray-400" style={{ fontSize: "12px" }}>
                    <span>ID #3232SDA</span>
                    <BsThreeDotsVertical />
                  </p>
                  <p className="text-gray-500" style={{ fontSize: "13px" }} >HR Asset Managmenet system</p>
                  <p className="text-gray-900" style={{ fontSize: "16px" }}>Mobail page desing</p>
                  <p className="text-gray-600" style={{ fontSize: "13px" }}>UX-REVAMP - Office managmeent system</p>
                  <p className="w-20 text-center rounded-md font-bold text-sm mt-1" style={{ background: "#E9FBFF", color: "#00B4D8" }}>TO-DO</p>
                  <div className="flex items-center justify-between mt-10">
                    <span className="text-gray-400" style={{ fontSize: "13px" }}> July 5, 2024</span>
                    <span className="h-6 w-6 text-center rounded-full" style={{ background: "#E9FBFF", color: "#00B4D8", paddingTop: "2px" }}>S</span>
                  </div>
                </div>

                {/* task */}
                <div className="bg-white shadow rounded-md p-5 m-4 leading-5">
                  <p className="flex items-center justify-between text-gray-400" style={{ fontSize: "12px" }}>
                    <span>ID #3232SDA</span>
                    <BsThreeDotsVertical />
                  </p>
                  <p className="text-gray-500" style={{ fontSize: "13px" }} >HR Asset Managmenet system</p>
                  <p className="text-gray-900" style={{ fontSize: "16px" }}>Mobail page desing</p>
                  <p className="text-gray-600" style={{ fontSize: "13px" }}>UX-REVAMP - Office managmeent system</p>
                  <p className="w-20 text-center rounded-md font-bold text-sm mt-1" style={{ background: "#E9FBFF", color: "#00B4D8" }}>TO-DO</p>
                  <div className="flex items-center justify-between mt-10">
                    <span className="text-gray-400" style={{ fontSize: "13px" }}> July 5, 2024</span>
                    <span className="h-6 w-6 text-center rounded-full" style={{ background: "#E9FBFF", color: "#00B4D8", paddingTop: "2px" }}>S</span>
                  </div>
                </div>
              </div>


            </div>
          </div>

          {/* done */}
          <div className="">
            <span className="font-medium ">DONE (2)</span>
            <div className=" scroll-container">
              <div className="p-1 rounded-md mt-2" style={{ backgroundColor: "#F0F8FA" }}>
                {/* task */}
                <div className="bg-white shadow rounded-md p-5 m-4 leading-5">
                  <p className="flex items-center justify-between text-gray-400" style={{ fontSize: "12px" }}>
                    <span>ID #3232SDA</span>
                    <BsThreeDotsVertical />
                  </p>
                  <p className="text-gray-500" style={{ fontSize: "13px" }} >HR Asset Managmenet system</p>
                  <p className="text-gray-900" style={{ fontSize: "16px" }}>Mobail page desing</p>
                  <p className="text-gray-600" style={{ fontSize: "13px" }}>UX-REVAMP - Office managmeent system</p>
                  <p className="w-20 text-center rounded-md font-bold text-sm mt-1" style={{ background: "#E9FBFF", color: "#00B4D8" }}>TO-DO</p>
                  <div className="flex items-center justify-between mt-10">
                    <span className="text-gray-400" style={{ fontSize: "13px" }}> July 5, 2024</span>
                    <span className="h-6 w-6 text-center rounded-full" style={{ background: "#E9FBFF", color: "#00B4D8", paddingTop: "2px" }}>S</span>
                  </div>
                </div>

                {/* task */}
                <div className="bg-white shadow rounded-md p-5 m-4 leading-5">
                  <p className="flex items-center justify-between text-gray-400" style={{ fontSize: "12px" }}>
                    <span>ID #3232SDA</span>
                    <BsThreeDotsVertical />
                  </p>
                  <p className="text-gray-500" style={{ fontSize: "13px" }} >HR Asset Managmenet system</p>
                  <p className="text-gray-900" style={{ fontSize: "16px" }}>Mobail page desing</p>
                  <p className="text-gray-600" style={{ fontSize: "13px" }}>UX-REVAMP - Office managmeent system</p>
                  <p className="w-20 text-center rounded-md font-bold text-sm mt-1" style={{ background: "#E9FBFF", color: "#00B4D8" }}>TO-DO</p>
                  <div className="flex items-center justify-between mt-10">
                    <span className="text-gray-400" style={{ fontSize: "13px" }}> July 5, 2024</span>
                    <span className="h-6 w-6 text-center rounded-full" style={{ background: "#E9FBFF", color: "#00B4D8", paddingTop: "2px" }}>S</span>
                  </div>
                </div>

                {/* task */}
                <div className="bg-white shadow rounded-md p-5 m-4 leading-5">
                  <p className="flex items-center justify-between text-gray-400" style={{ fontSize: "12px" }}>
                    <span>ID #3232SDA</span>
                    <BsThreeDotsVertical />
                  </p>
                  <p className="text-gray-500" style={{ fontSize: "13px" }} >HR Asset Managmenet system</p>
                  <p className="text-gray-900" style={{ fontSize: "16px" }}>Mobail page desing</p>
                  <p className="text-gray-600" style={{ fontSize: "13px" }}>UX-REVAMP - Office managmeent system</p>
                  <p className="w-20 text-center rounded-md font-bold text-sm mt-1" style={{ background: "#E9FBFF", color: "#00B4D8" }}>TO-DO</p>
                  <div className="flex items-center justify-between mt-10">
                    <span className="text-gray-400" style={{ fontSize: "13px" }}> July 5, 2024</span>
                    <span className="h-6 w-6 text-center rounded-full" style={{ background: "#E9FBFF", color: "#00B4D8", paddingTop: "2px" }}>S</span>
                  </div>
                </div>

                {/* task */}
                <div className="bg-white shadow rounded-md p-5 m-4 leading-5">
                  <p className="flex items-center justify-between text-gray-400" style={{ fontSize: "12px" }}>
                    <span>ID #3232SDA</span>
                    <BsThreeDotsVertical />
                  </p>
                  <p className="text-gray-500" style={{ fontSize: "13px" }} >HR Asset Managmenet system</p>
                  <p className="text-gray-900" style={{ fontSize: "16px" }}>Mobail page desing</p>
                  <p className="text-gray-600" style={{ fontSize: "13px" }}>UX-REVAMP - Office managmeent system</p>
                  <p className="w-20 text-center rounded-md font-bold text-sm mt-1" style={{ background: "#E9FBFF", color: "#00B4D8" }}>TO-DO</p>
                  <div className="flex items-center justify-between mt-10">
                    <span className="text-gray-400" style={{ fontSize: "13px" }}> July 5, 2024</span>
                    <span className="h-6 w-6 text-center rounded-full" style={{ background: "#E9FBFF", color: "#00B4D8", paddingTop: "2px" }}>S</span>
                  </div>
                </div>

                {/* task */}
                <div className="bg-white shadow rounded-md p-5 m-4 leading-5">
                  <p className="flex items-center justify-between text-gray-400" style={{ fontSize: "12px" }}>
                    <span>ID #3232SDA</span>
                    <BsThreeDotsVertical />
                  </p>
                  <p className="text-gray-500" style={{ fontSize: "13px" }} >HR Asset Managmenet system</p>
                  <p className="text-gray-900" style={{ fontSize: "16px" }}>Mobail page desing</p>
                  <p className="text-gray-600" style={{ fontSize: "13px" }}>UX-REVAMP - Office managmeent system</p>
                  <p className="w-20 text-center rounded-md font-bold text-sm mt-1" style={{ background: "#E9FBFF", color: "#00B4D8" }}>TO-DO</p>
                  <div className="flex items-center justify-between mt-10">
                    <span className="text-gray-400" style={{ fontSize: "13px" }}> July 5, 2024</span>
                    <span className="h-6 w-6 text-center rounded-full" style={{ background: "#E9FBFF", color: "#00B4D8", paddingTop: "2px" }}>S</span>
                  </div>
                </div>
              </div>


            </div>
          </div>

          {/* REVIEWD */}
          <div className="">
            <span className="font-medium ">Reviewed (2)</span>
            <div className=" scroll-container">
              <div className="p-1 rounded-md mt-2" style={{ backgroundColor: "#F0F8FA" }}>
                {/* task */}
                <div className="bg-white shadow rounded-md p-5 m-4 leading-5">
                  <p className="flex items-center justify-between text-gray-400" style={{ fontSize: "12px" }}>
                    <span>ID #3232SDA</span>
                    <BsThreeDotsVertical />
                  </p>
                  <p className="text-gray-500" style={{ fontSize: "13px" }} >HR Asset Managmenet system</p>
                  <p className="text-gray-900" style={{ fontSize: "16px" }}>Mobail page desing</p>
                  <p className="text-gray-600" style={{ fontSize: "13px" }}>UX-REVAMP - Office managmeent system</p>
                  <p className="w-20 text-center rounded-md font-bold text-sm mt-1" style={{ background: "#E9FBFF", color: "#00B4D8" }}>TO-DO</p>
                  <div className="flex items-center justify-between mt-10">
                    <span className="text-gray-400" style={{ fontSize: "13px" }}> July 5, 2024</span>
                    <span className="h-6 w-6 text-center rounded-full" style={{ background: "#E9FBFF", color: "#00B4D8", paddingTop: "2px" }}>S</span>
                  </div>
                </div>

                {/* task */}
                <div className="bg-white shadow rounded-md p-5 m-4 leading-5">
                  <p className="flex items-center justify-between text-gray-400" style={{ fontSize: "12px" }}>
                    <span>ID #3232SDA</span>
                    <BsThreeDotsVertical />
                  </p>
                  <p className="text-gray-500" style={{ fontSize: "13px" }} >HR Asset Managmenet system</p>
                  <p className="text-gray-900" style={{ fontSize: "16px" }}>Mobail page desing</p>
                  <p className="text-gray-600" style={{ fontSize: "13px" }}>UX-REVAMP - Office managmeent system</p>
                  <p className="w-20 text-center rounded-md font-bold text-sm mt-1" style={{ background: "#E9FBFF", color: "#00B4D8" }}>TO-DO</p>
                  <div className="flex items-center justify-between mt-10">
                    <span className="text-gray-400" style={{ fontSize: "13px" }}> July 5, 2024</span>
                    <span className="h-6 w-6 text-center rounded-full" style={{ background: "#E9FBFF", color: "#00B4D8", paddingTop: "2px" }}>S</span>
                  </div>
                </div>

                {/* task */}
                <div className="bg-white shadow rounded-md p-5 m-4 leading-5">
                  <p className="flex items-center justify-between text-gray-400" style={{ fontSize: "12px" }}>
                    <span>ID #3232SDA</span>
                    <BsThreeDotsVertical />
                  </p>
                  <p className="text-gray-500" style={{ fontSize: "13px" }} >HR Asset Managmenet system</p>
                  <p className="text-gray-900" style={{ fontSize: "16px" }}>Mobail page desing</p>
                  <p className="text-gray-600" style={{ fontSize: "13px" }}>UX-REVAMP - Office managmeent system</p>
                  <p className="w-20 text-center rounded-md font-bold text-sm mt-1" style={{ background: "#E9FBFF", color: "#00B4D8" }}>TO-DO</p>
                  <div className="flex items-center justify-between mt-10">
                    <span className="text-gray-400" style={{ fontSize: "13px" }}> July 5, 2024</span>
                    <span className="h-6 w-6 text-center rounded-full" style={{ background: "#E9FBFF", color: "#00B4D8", paddingTop: "2px" }}>S</span>
                  </div>
                </div>

                {/* task */}
                <div className="bg-white shadow rounded-md p-5 m-4 leading-5">
                  <p className="flex items-center justify-between text-gray-400" style={{ fontSize: "12px" }}>
                    <span>ID #3232SDA</span>
                    <BsThreeDotsVertical />
                  </p>
                  <p className="text-gray-500" style={{ fontSize: "13px" }} >HR Asset Managmenet system</p>
                  <p className="text-gray-900" style={{ fontSize: "16px" }}>Mobail page desing</p>
                  <p className="text-gray-600" style={{ fontSize: "13px" }}>UX-REVAMP - Office managmeent system</p>
                  <p className="w-20 text-center rounded-md font-bold text-sm mt-1" style={{ background: "#E9FBFF", color: "#00B4D8" }}>TO-DO</p>
                  <div className="flex items-center justify-between mt-10">
                    <span className="text-gray-400" style={{ fontSize: "13px" }}> July 5, 2024</span>
                    <span className="h-6 w-6 text-center rounded-full" style={{ background: "#E9FBFF", color: "#00B4D8", paddingTop: "2px" }}>S</span>
                  </div>
                </div>

                {/* task */}
                <div className="bg-white shadow rounded-md p-5 m-4 leading-5">
                  <p className="flex items-center justify-between text-gray-400" style={{ fontSize: "12px" }}>
                    <span>ID #3232SDA</span>
                    <BsThreeDotsVertical />
                  </p>
                  <p className="text-gray-500" style={{ fontSize: "13px" }} >HR Asset Managmenet system</p>
                  <p className="text-gray-900" style={{ fontSize: "16px" }}>Mobail page desing</p>
                  <p className="text-gray-600" style={{ fontSize: "13px" }}>UX-REVAMP - Office managmeent system</p>
                  <p className="w-20 text-center rounded-md font-bold text-sm mt-1" style={{ background: "#E9FBFF", color: "#00B4D8" }}>TO-DO</p>
                  <div className="flex items-center justify-between mt-10">
                    <span className="text-gray-400" style={{ fontSize: "13px" }}> July 5, 2024</span>
                    <span className="h-6 w-6 text-center rounded-full" style={{ background: "#E9FBFF", color: "#00B4D8", paddingTop: "2px" }}>S</span>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div> : ""
      }

      {/* list view card */}
      <div className="my-3">
        {/* task todo */}
        <div className="shadow mb-3 rounded-md">
          <div className="flex items-center justify-between p-4 rounded-md cursor-pointer" onClick={() => setTaskActivity('todo')}>
            <p className="font-medium text-gray-700" >TO-DO(2)</p>
            <FaChevronDown className="my-auto" />
          </div>
          {
            taskActivity === "todo" ? <section className="p-2">
                <TaskList/>
                <TaskList/>
                <TaskList/>
                <TaskList/>
            </section> : ""
          }
        </div>


        {/* task wip */}
        <div className="shadow mb-3 rounded-md">
          <div className="flex items-center justify-between p-4 rounded-md cursor-pointer" onClick={() => setTaskActivity('wip')}>
            <p className="font-medium text-gray-700" >WIP(2)</p>
            <FaChevronDown className="my-auto" />
          </div>
          {
            taskActivity === "wip" ? <section className="p-2">
            <TaskList/>
            <TaskList/>
            <TaskList/>
            <TaskList/>
        </section>  : ""
          }
        </div>



        {/* task done */}
        <div className="shadow mb-3 rounded-md">
          <div className="flex items-center justify-between p-4 rounded-md cursor-pointer" onClick={() => setTaskActivity('done')}>
            <p className="font-medium text-gray-700" >DONE(2)</p>
            <FaChevronDown className="my-auto" />
          </div>
          {
            taskActivity === "done" ? <section className="p-2">
            <TaskList/>
            <TaskList/>
            <TaskList/>
            <TaskList/>
        </section>  : ""
          }
        </div>



        {/* task review */}
        <div className="shadow mb-3 rounded-md">
          <div className="flex items-center justify-between p-4 rounded-md cursor-pointer" onClick={() => setTaskActivity('review')}>
            <p className="font-medium text-gray-700" >REVIEWED(2)</p>
            <FaChevronDown className="my-auto" />
          </div>
          {
            taskActivity === "review" ? <section className="p-2">
            <TaskList/>
            <TaskList/>
            <TaskList/>
            <TaskList/>
        </section>  : ""
          }
        </div>


      </div>
    </section>
  );
};
