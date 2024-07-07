import { useState } from "react";
import { NestedTasks } from "./nestedTask";
import { Communicator } from "./cummunicator";
import { Attachment } from "./attachment";
import { Note } from "./note";

export const TaskDetails = () => {
  const [taskItem, setTaskItem] = useState("sub-task");
  const [subTaskCreat, setSubTaskCreate] = useState(false)

  const item = [
    {
      id: 3,
      title: "task one",
      task: [
        {
          id: 2,
          title: "task one sub task",
          task: [
            {
              id: 1,
              title: "task one sub task to sub task",
              task: [
                {
                  id: 3,
                  title: "task one sub task to sub task one",
                },
                {
                  id: 3,
                  title: "task one sub task to sub task one",
                },
                {
                  id: 3,
                  title: "task one sub task to sub task one",
                },
                {
                  id: 3,
                  title: "task one sub task to sub task one",
                },
              ],
            },
            {
              id: 3,
              title: "task one sub task tow",
              task: [
                {
                  id: 3,
                  title: "task one sub task to sub task one",
                },
              ],
            },
            {
              id: 3,
              title: "task one sub task tow",
            },
          ],
        },
      ],
    },
    {
      id: "1",
      title: "asldfasdkfasdkfadfasd",
      task: [],
    },
  ];
  return (
    <section className="p-5 rounded-md" style={{ backgroundColor: "#F0F8FA" }}>
      <div className="flex items-center justify-between shadow rounded-xl p-4 bg-white">
        <div>
          <span style={{ color: "#00B4D8" }} className="text-sm">
            Task ID : #ABC123{" "}
          </span>{" "}
          <br />
          <strong>Agent Point VAS Portal</strong>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-red-500">Cancel</span>
          <button
            style={{ backgroundColor: "#FFAC27" }}
            className="px-3 rounded-md text-white"
          >
            WIP
          </button>
        </div>
      </div>
      {/* sparate div */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-5">
        {/* left */}
        <div className="col-span-3 shadow-lg rounded-md p-3 bg-white rounded-md p-4">
          {/* create task with other button */}
          <div className="flex items-center bg-gray-100 gap-3 justify-between rounded">
            <div className="flex items-center gap-3">
              <p
                onClick={() => setTaskItem("sub-task")}
                className="rounded-md px-3 py-2 cursor-pointer"
                style={{
                  background: taskItem === "sub-task" ? "#00B4D8" : "",
                  color: taskItem === "sub-task" ? "#fff" : "#808080",
                }}
              >
                Sub-Tasks
              </p>
              <p
                onClick={() => setTaskItem("communicator")}
                className=" rounded-md px-3 py-2 cursor-pointer"
                style={{
                  background: taskItem === "communicator" ? "#00B4D8" : "",
                  color: taskItem === "communicator" ? "#fff" : "#626567",
                }}
              >
                Communicator
              </p>
              <p
                onClick={() => setTaskItem("attachment")}
                className=" rounded-md px-3 py-2 cursor-pointer"
                style={{
                  background: taskItem === "attachment" ? "#00B4D8" : "",
                  color: taskItem === "attachment" ? "#fff" : "#626567",
                }}
              >
                Attachment
              </p>

              <p
                onClick={() => setTaskItem("note")}
                className=" rounded-md px-3 py-2 cursor-pointer"
                style={{
                  background: taskItem === "note" ? "#00B4D8" : "",
                  color: taskItem === "note" ? "#fff" : "#626567",
                }}
              >
                Notes
              </p>
            </div>
            <div>
              <div
                onClick={() => setSubTaskCreate(true)}
                className="py-2 px-2 rounded"
                style={{ backgroundColor: "#00B4D8", color: "white" }}
              >
                Create Sub Task
              </div>
              {/* modal for sub task*/}
              {subTaskCreat ? (
                <div
                  class="relative z-10"
                  aria-labelledby="modal-title"
                  role="dialog"
                  aria-modal="true"
                >
                  <div
                    class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    aria-hidden="true"
                  ></div>

                  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                          {/* content */}
                          <h3 className="font-bold text-xl text-grya-500">
                            Create Sub-Task
                          </h3>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                          <button
                            onClick={() => setSubTaskCreate(false)}
                            type="button"
                            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          >
                            Create Sub-Task
                          </button>

                          <button
                            onClick={() => setSubTaskCreate(false)}
                            type="button"
                            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          {taskItem === "sub-task" ? <NestedTasks data={item} /> : ""}
          {taskItem === "communicator" ? <Communicator /> : ""}
          {taskItem === "attachment" ? <Attachment /> : ""}
          {taskItem === "note" ? <Note /> : ""}
        </div>
        {/* right */}
        <div className="cols-span-1 shadow-lg p-3 bg-white rounded-md">
          <div className="mb-5 leading-4">
            <span className="text-gray-500" style={{ fontSize: "12px" }}>
              Parent Task/Activiy
            </span>
            <h3 className="text-gray-700">HBI Agreement (HBL)</h3>
          </div>

          <div className="mb-5 leading-4">
            <span className="text-gray-500" style={{ fontSize: "12px" }}>
              Activity Project
            </span>
            <h3 className="text-gray-700">Project</h3>
          </div>

          <div className="mb-5 leading-4">
            <span className="text-gray-500" style={{ fontSize: "12px" }}>
              Priority
            </span>
            <h3 className="text-gray-700">Critical</h3>
          </div>

          <div className="mb-5 leading-4">
            <span className="text-gray-500" style={{ fontSize: "12px" }}>
              Project Name
            </span>
            <h3 className="text-gray-700">Asset Managent (Hbl)</h3>
          </div>

          <div className="mb-5 leading-4">
            <span className="text-gray-500" style={{ fontSize: "12px" }}>
              Milestone Name
            </span>
            <h3 className="text-gray-700">First Pitch</h3>
          </div>

          <div className="mb-5 leading-4">
            <span className="text-gray-500" style={{ fontSize: "12px" }}>
              Assignee Name
            </span>
            <div className="flex items-center gap-4">
              <img src="project.png" className="h-5 w-5 rounded-full" alt="" />
              <span>MD. Noor Hoassain</span>
            </div>
          </div>

          <div className="mb-5 leading-4">
            <span className="text-gray-500" style={{ fontSize: "12px" }}>
              Reporte Name
            </span>
            <div className="flex items-center gap-4">
              <img src="project.png" className="h-5 w-5 rounded-full" alt="" />
              <span>MD. Noor Hoassain</span>
            </div>
          </div>

          <div className="mb-5 leading-4">
            <span className="text-gray-500" style={{ fontSize: "12px" }}>
              Due/End Date
            </span>
            <p>March 18, 21, 10:30 Am</p>
          </div>

          <div className="mt-20">
            <span className="text-gray-500" style={{ fontSize: "12px" }}>
              Created By:{" "}
              <span className="text-gray-700">MD. Noor Hossain</span>
            </span>
            <br />
            <span className="text-gray-500">
              April 28, 2022 | 12:33 PM
            </span>{" "}
            <br /> <br />
            <span className="text-gray-500">
              * Here is the basi overview of create task
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
