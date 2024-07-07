import React from 'react';
import { TaskList } from './taskList';
import { GoArrowRight } from "react-icons/go";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";
import { BsArrowReturnRight } from "react-icons/bs";

export const NestedTasks = ({ data }) => {
    return (<section className=''>

        
        <div>
            {data.map(item => (
                <section className='pl-10 '>
                    <div className="bg-white  rounded-md py-2 mt-3 border p-4">
                        <div className="flex items-center justify-between leading-7">
                            <p className="flex items-center gap-1 text-gray-700">
                                {item?.title}
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

                    {item?.task?.length > 0 && (
                        <>
                            <p className='flex items-center gap-4 text-blue-500 font-bold' style={{ fontSize: "11px" }}>
                                <BsArrowReturnRight />
                                <span>{item?.task?.length} Total Task</span>
                            </p>
                            <NestedTasks data={item.task} />

                        </>
                    )}
                </section>




            ))}
        </div>


    </section>

    );
};
