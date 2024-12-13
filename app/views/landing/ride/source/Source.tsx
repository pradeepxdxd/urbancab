import React from "react";
import { GoDotFill } from "react-icons/go";
import { PiRectangleFill } from "react-icons/pi";
import { TbLocationFilled } from "react-icons/tb";

export default function Source() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-4xl border max-w-[70%]">
          Go anywhere with UrbanCab
        </h1>
        <div className="relative w-full mt-5">
          <input
            type="text"
            className="w-full md:w-full lg:w-full xl:w-full pl-10 pr-10 border border-gray-300 rounded p-2 focus:outline-none"
            placeholder="Pickup location"
          />
          <span className="absolute inset-y-0 left-2 flex items-center text-gray-400">
            <GoDotFill className="text-black" />
          </span>
          <span className="absolute inset-y-0 right-2 flex items-center text-gray-400">
            <TbLocationFilled className="text-black hover:text-red-600 cursor-pointer" />
          </span>
        </div>
        <div className="relative w-full mt-5">
          <input
            type="text"
            className="w-full pl-10 pr-10 border border-gray-300 rounded p-2 focus:outline-none"
            placeholder="Dropoff location"
          />
          <span className="absolute inset-y-0 left-2 flex items-center text-gray-400">
            <PiRectangleFill className="text-black text-[11px] ml-0.5" />
          </span>
          <div className="absolute h-11 border-l border-gray-400 left-4 bottom-30px"></div>
        </div>
        <div className="flex justify-start w-full mt-5">
          <button className="text-white bg-slate-950 py-3 px-4 rounded-lg">
            See Prices
          </button>
        </div>
      </div>
    </div>
  );
}
