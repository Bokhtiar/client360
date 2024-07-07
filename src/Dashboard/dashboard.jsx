export const Dashboard = () => {
  return (
    <section className="bg-gray-100">
      <section className="p-3">
        <h2 className="font-bold text-xl">Overview</h2>

        {/* count client dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-3">
          {/* first */}
          <div
            className="flex item-center justify-between p-5 rounded-xl text-white"
            style={{
              background: "linear-gradient(90deg, #5778FC 0%, #8E48CF 100%)",
            }}
          >
            <div>
              <p className=" text-md">Total Clients</p>
              <strong className="text-bold font-bold text-2xl">5400</strong>
            </div>
            <img className="h-8 w-8 my-auto" src="count.png" alt="" />
          </div>

          {/* 2nd */}
          <div
            className="flex item-center justify-between p-5 rounded-xl text-white"
            style={{
              background:
                "linear-gradient(89.8deg, #43BFF3 1.49%, #2B65F6 100.59%)",
            }}
          >
            <div>
              <p className=" text-md">Top Clients</p>
              <strong className="text-bold font-bold text-2xl text-white">
                250
              </strong>
            </div>
            <img className="h-8 w-8 my-auto" src="count.png" alt="" />
          </div>

          {/* 3rd */}
          <div
            className="flex item-center justify-between p-5 rounded-xl text-white"
            style={{
              background: "linear-gradient(90deg, #3ECDB6 0%, #189196 100%)",
            }}
          >
            <div>
              <p className=" text-md">Total Services</p>
              <strong className="text-bold font-bold text-2xl ">55</strong>
            </div>
            <img className="h-8 w-8 my-auto" src="count.png" alt="" />
          </div>

          {/* 4rth */}
          <div
            className="flex item-center justify-between p-5 rounded-xl text-white"
            style={{
              background: "linear-gradient(90deg, #DE488E 0%, #AB46BB 100%)",
            }}
          >
            <div>
              <p className=" text-md">Work Order Amount</p>
              <strong className="text-bold font-bold text-2xl">5400</strong>
            </div>
            <img className="h-8 w-8 my-auto" src="count.png" alt="" />
          </div>
        </div>

        {/* dashboard client information */}
      </section>
    </section>
  );
};
