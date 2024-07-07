import { CiStar } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { RiBuilding2Line } from "react-icons/ri";
import { useState } from "react";
import { Overview } from "./overview";
import { Activity } from "./activity";
import { Task } from "./task";
import { Metting } from "./meeting";
import { Email } from "./email";

export const ClientDetails = () => {

  const [tabOpen, setTabOpen] = useState("task");

  return (
    <section className="p-3" style={{ background: "#D2EBF1" }}>
      <section
        className="rounded-md"
        style={{
          background:
            "linear-gradient(90.56deg, #4989D3 0.97%, #00B4D8 101.06%)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5 px-5">
          {/* frist div */}
          <div className="flex item-center gap-3">
            <img
              src="logo192.png"
              className="h-24 w-24 bg-white rounded-full p-2 my-auto"
              alt=""
            />
            <div className="text-white ">
              <p className="font-semibold text-xl">Estern Bank LTD</p>
              <p className="bg-yellow-500 rounded-md w-24 px-2 flex item-center text-sm font-medium">
                <CiStar className="my-auto" /> Rank - 5
              </p>
              <p className="text-sm text-gray-100">Owner: Mizanur Rahman</p>
              <p className="text-sm text-gray-100">
                Creation Date: 23 jun 2022
              </p>
            </div>
          </div>
          {/* 2nd div */}
          <div className="flex items-center my-auto justify-end gap-5 ">
            <p className="flex items-center gap-1">
              <IoIosCall
                className="my-auto bg-white w-8 h-8 rounded-full p-1"
                style={{ color: "#00B4D8" }}
              />
              <span className="text-white font-medium">+8801913876520</span>
            </p>

            <p className="flex items-center gap-1">
              <AiOutlineMail
                className="my-auto bg-white w-8 h-8 rounded-full p-1"
                style={{ color: "#00B4D8" }}
              />
              <span className="text-white font-medium">
                Info@esternbank.com
              </span>
            </p>

            <p className="flex items-center gap-1 ">
              <TbWorldWww
                className="my-auto bg-white w-8 h-8 rounded-full p-1"
                style={{ color: "#00B4D8" }}
              />
              <span className="text-white font-medium">www.esternbank.com</span>
            </p>
          </div>
        </div>
      </section>

      {/* menu */}
      <section className="flex items-center gap-5 my-5">
        <div
          className="flex items-center gap-1 px-4 rounded-md py-2 text-white"
          style={{ backgroundColor: "#18AECC" }}
        >
          <FaPlus /> Note
        </div>

        <div
          className="flex items-center gap-1 px-4 rounded-md py-2 text-white"
          style={{ backgroundColor: "#EE9817" }}
        >
          <FaPlus /> Email
        </div>

        <div
          className="flex items-center gap-1 px-4 rounded-md py-2 text-white cursor-pointer"
          style={{ backgroundColor: "#1380BD" }}
        >
          <FaPlus /> Task
        </div>

        <div
          className="flex items-center gap-1 px-4 rounded-md py-2 text-white"
          style={{ backgroundColor: "#CCA20D" }}
        >
          <FaPlus /> Meeting
        </div>

        <div
          className="flex items-center gap-1 px-4 rounded-md py-2 text-white"
          style={{ backgroundColor: "#005A6C" }}
        >
          <FaPlus /> Visit Log
        </div>

        <div
          className="flex items-center gap-1 px-4 rounded-md py-2 text-white"
          style={{ backgroundColor: "#329B37" }}
        >
          <FaPlus /> Projects
        </div>
      </section>

      {/* details */}
      <section className="bg-white shadow py-5 rounded-tl-lg rounded-tr-lg">
        <div className="flex items-center gap-2 px-5 py-2 text-xl">
          <RiBuilding2Line />
          <span className="font-bold text-gray-700">Company Management</span>
        </div>
        <hr className="my-3" />
        <div className="flex items-center gap-7 px-5">
          <p
            className="font-medium text-md cursor-pointer"
            onClick={() => setTabOpen("overview")}
            style={{ color: tabOpen === "overview" ? "#18AECC" : "#7f8c8d" }}
          >
            Overview
          </p>
          <p
            className="font-medium text-md cursor-pointer"
            onClick={() => setTabOpen("activity")}
            style={{ color: tabOpen === "activity" ? "#18AECC" : "#7f8c8d" }}
          >
            Activity
          </p>

          <p
            className="font-medium text-md cursor-pointer"
            onClick={() => setTabOpen("task")}
            style={{ color: tabOpen === "task" ? "#18AECC" : "#7f8c8d" }}
          >
            Tasks
          </p>
          <p
            onClick={() => setTabOpen("meeting")}
            className="font-medium text-md cursor-pointer"
            style={{ color: "#7f8c8d" }}
          >
            Meetings
          </p>
          <p
            onClick={() => setTabOpen("email")}
            className="font-medium text-md cursor-pointer"
            style={{ color: "#7f8c8d" }}
          >
            Emails
          </p>
          <p
            className="font-medium text-md cursor-pointer"
            style={{ color: "#7f8c8d" }}
          >
            Notes
          </p>
          <p
            className="font-medium text-md cursor-pointer"
            style={{ color: "#7f8c8d" }}
          >
            Calls
          </p>
          <p
            className="font-medium text-md cursor-pointer"
            style={{ color: "#7f8c8d" }}
          >
            Visit Log
          </p>
          <p
            className="font-medium text-md cursor-pointer"
            style={{ color: "#7f8c8d" }}
          >
            Projects
          </p>
          <p
            className="font-medium text-md cursor-pointer"
            style={{ color: "#7f8c8d" }}
          >
            Pitch Feedback
          </p>
          <p
            className="font-medium text-md cursor-pointer"
            style={{ color: "#7f8c8d" }}
          >
            Feedback
          </p>
          <p
            className="font-medium text-md cursor-pointer"
            style={{ color: "#7f8c8d" }}
          >
            Contact
          </p>
        </div>
      </section>

      <section className="my-3 bg-white shadow rounded-md p-5">
        {tabOpen === "overview" ? <Overview /> : ""}
        {tabOpen === "activity" ? <Activity /> : ""}
        {tabOpen === "task" ? <Task /> : ""}
        {tabOpen === "meeting" ? <Metting /> : ""}
        {tabOpen === "email" ? <Email /> : ""}
      </section>
    </section>
  );
};
