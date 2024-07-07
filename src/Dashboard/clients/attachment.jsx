import { FaFileInvoice } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


export const Attachment = () => {
  return (
    <section className="my-3">
      <div className="flex items-center gap-3 justify-between shadow p-3 rounded-md mb-3 ">
        <p className="">
          <span className="flex item-center gap-2 text-sm">
            <span className="text-blue-400">Task ID</span>{" "}
            <span className="text-gray-500">#ABC123</span>
          </span>

          <p className="flex items-center text-lg text-gray-600 gap-2">
            <FaFileInvoice />
            <span>Summary update report.pdf</span>
          </p>
        </p>

        <p className="my-auto">
          <MdDelete />
        </p>
      </div>

      <div className="flex items-center gap-3 justify-between shadow p-3 rounded-md mb-3 ">
        <p className="">
          <span className="flex item-center gap-2 text-sm">
            <span className="text-blue-400">Task ID</span>{" "}
            <span className="text-gray-500">#ABC123</span>
          </span>

          <p className="flex items-center text-lg text-gray-600 gap-2">
            <FaFileInvoice />
            <span>Summary update report.pdf</span>
          </p>
        </p>

        <p className="my-auto">
          <MdDelete />
        </p>
      </div>
    </section>
  );
};
