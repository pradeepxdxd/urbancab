import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="flex bg-slate-950 justify-between p-2">
      <div className="flex">
        <Image src={"/uc-logo.png"} alt="uc-logo" width={50} height={50} />
        <div className="hidden md:flex text-white p-2  gap-4">
          <h6 className="p-2 text-md font-bold hover:rounded hover:bg-slate-800 cursor-pointer hover:transition duration-1000">
            Ride
          </h6>
          <h6 className="p-2 text-md font-bold hover:rounded hover:bg-slate-800 cursor-pointer hover:transition duration-1000">
            Drive
          </h6>
          <h6 className="p-2 text-md font-bold hover:rounded hover:bg-slate-800 cursor-pointer hover:transition duration-1000">
            Business
          </h6>
          <h6 className="p-2 text-md font-bold hover:rounded hover:bg-slate-800 cursor-pointer hover:transition duration-1000">
            About
          </h6>
        </div>
      </div>
      <div className="flex text-white p-2 gap-4">
        <h6 className="p-2 text-md font-bold hover:rounded hover:bg-slate-800 cursor-pointer hover:transition duration-1000">
          help
        </h6>
        <h6 className="p-2 text-md font-bold hover:rounded hover:bg-slate-800 cursor-pointer hover:transition duration-1000">
          login
        </h6>
        <h6 className="p-2 text-md font-bold rounded-md bg-slate-100 text-black hover:bg-slate-300 cursor-pointer hover:transition duration-1000 ">
          Signup
        </h6>
      </div>
    </div>
  );
}
