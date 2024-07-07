import { BiCheckCircle } from "react-icons/bi";

export const Communicator = () => {
  return (
    <section className="p-3">
      <p className="flex items-center gap-1">
        <BiCheckCircle
          style={{ color: "#41BC75", fontSize: "26px" }}
          className=""
        />
        <span className="text-gray-500">Already Communicated</span>
      </p>

      <h1 className="font-bold my-3 text-gray-700 text-xl">
        Person Information
      </h1>

      <div className="w-full md:w-96">
        <p className="flex items-center justify-between my-3">
          <span className="text-gray-400">Name -</span>
          <strong className="text-gray-600 font-medium">Amit Biswash</strong>
        </p>

        <p className="flex items-center justify-between my-3">
          <span className="text-gray-400">Email -</span>
          <strong className="text-gray-600 font-medium">
            amit.biswas@sslwireless.com
          </strong>
        </p>

        <p className="flex items-center justify-between my-3">
          <span className="text-gray-400">Phone -</span>
          <strong className="text-gray-600 font-medium">01758963355</strong>
        </p>

        <p className="flex items-center justify-between my-3">
          <span className="text-gray-400">Department -</span>
          <strong className="text-gray-600 font-medium">It Department</strong>
        </p>
      </div>
    </section>
  );
};
