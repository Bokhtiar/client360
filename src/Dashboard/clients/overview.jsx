import { BiTaskX } from "react-icons/bi";
import { ApexChart } from "./chart";

export const Overview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12 gap-0">
      {/* left side */}
      <div className="">
        {/* project overview */}
        <div className="flex items-center gap-2">
          <img src="project.png" className="h-8" alt="" />
          <strong className="text-lg text-gray-700">Project Overview</strong>
        </div>
        <hr className="bg-gray-100 border-1 my-2" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4">
          <div className="flex items-center gap-4 shadow p-3 rounded-md">
            <img src="task_due.png" className="h-12" alt="" />
            <div>
              <p className="font-medium text-2xl text-gray-700">20</p>
              <p className="text-gray-600 text-md">Ongoing project</p>
            </div>
          </div>

          <div className="flex items-center gap-4 shadow p-3 rounded-md">
            <img src="task_done.png" className="h-12" alt="" />
            <div>
              <p className="font-medium text-2xl text-gray-700">45</p>
              <p className="text-gray-600 text-md">Complete project</p>
            </div>
          </div>
        </div>

        <div className="font-medium text-lg mt-8 text-gray-700">
          Work Order Amount
        </div>
        {/* <hr className="bg-gray-100 border-1 my-1" /> */}

        <div className="mx-auto py-10" style={{ width: "600px" }}>
          <ApexChart />

          <div className="flex items-center gap-3 shadow-md justify-center py-3 rounded-md">
            <img src="revenue.png" className="h-12" alt="" />
            <p>
              <strong className="font-bold text-xl text-gray-700">
                450000
              </strong>
              <br />
              <span className="text-gray-500">Total Revenue</span>
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="">
        {/* service overview */}
        <div className="flex items-center gap-2">
          <img src="project.png" className="h-8" alt="" />
          <strong className="text-lg text-gray-700">Service Overview</strong>
        </div>
        <hr className="bg-gray-100 border-1 my-2" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4">
          <div className="flex items-center gap-4 shadow p-3 rounded-md">
            <img src="task_due.png" className="h-12" alt="" />
            <div>
              <p className="font-medium text-2xl text-gray-700">10</p>
              <p className="text-gray-600 text-md">Ongoing Service</p>
            </div>
          </div>

          <div className="flex items-center gap-4 shadow p-3 rounded-md">
            <img src="task_done.png" className="h-12" alt="" />
            <div>
              <p className="font-medium text-2xl text-gray-700">20</p>
              <p className="text-gray-600 text-md">Complete Service</p>
            </div>
          </div>
        </div>

        <div className="font-medium text-lg mt-8 text-gray-700">
          Work Order Amount
        </div>
        {/* <hr className="bg-gray-100 border-1 my-1" /> */}
        <div className="mx-auto py-10" style={{ width: "600px" }}>
          <ApexChart />

          <div className="flex items-center gap-3 shadow-md justify-center py-3 rounded-md">
            <img src="revenue.png" className="h-12" alt="" />
            <p>
              <strong className="font-bold text-xl text-gray-700 ">
                450000
              </strong>
              <br />
              <span className="text-gray-500">Total Revenue</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
