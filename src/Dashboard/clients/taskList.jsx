import { GoArrowRight } from "react-icons/go";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";

export const TaskList = () => {
    return <div className="bg-white shadow rounded-md py-2 mt-3 px-3">
    <div className="flex items-center justify-between leading-7">
      <p className="flex items-center gap-1 text-gray-700">
        Place order <GoArrowRight /> Selected payment method
        <GoArrowRight />
        Online payent <GoArrowRight /> Continue: Statement inside the
        congratulation window is not ok
      </p>

      <p className="flex items-center gap-5">
        <span
          className="text-whtie px-2 rounded text-white"
          style={{ backgroundColor: "#00B4D8" }}
        >
          To-Do
        </span>
        <span className="text-blue-500 bg-blue-100 h-7 w-7  my-auto text-center rounded-full ">
          S
        </span>

        <BiDotsVerticalRounded className="text-gray-500" />
      </p>
    </div>

    <div
      className="flex items-center gap-1 text-gray-500"
      style={{ fontSize: "12px" }}
    >
      ID: #1212132 <RxDotFilled /> Milesone: UX-Revamp - Office Manage
      <RxDotFilled /> Project: Ebuddy Revamp
    </div>
  </div>
}