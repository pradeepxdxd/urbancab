// import React, { useState } from "react";
// import Image from "next/image";
// import { FaHamburger } from "react-icons/fa";
// import { GiTireIronCross } from "react-icons/gi";

// export default function Header() {
//   const [open, setOpen] = useState<boolean>(false);
//   const handleOpenMenuBar = () => {
//     setOpen((prev) => !prev);
//   };

//   return (
//     <div className="flex bg-slate-950 justify-between p-2">
//       <div className="flex">
//         <Image src={"/uc-logo.png"} alt="uc-logo" width={50} height={50} />
//         <div className="hidden md:flex text-white p-2 gap-4">
//           <h6 className="p-2 text-md font-bold hover:rounded hover:bg-slate-800 cursor-pointer hover:transition duration-1000">
//             Ride
//           </h6>
//           <h6 className="p-2 text-md font-bold hover:rounded hover:bg-slate-800 cursor-pointer hover:transition duration-1000">
//             Drive
//           </h6>
//           <h6 className="p-2 text-md font-bold hover:rounded hover:bg-slate-800 cursor-pointer hover:transition duration-1000">
//             Business
//           </h6>
//           <h6 className="p-2 text-md font-bold hover:rounded hover:bg-slate-800 cursor-pointer hover:transition duration-1000">
//             About
//           </h6>
//           <h6 className="p-2 text-md font-bold hover:rounded hover:bg-slate-800 cursor-pointer hover:transition duration-1000">
//             Help
//           </h6>
//         </div>
//       </div>
//       <div className="flex text-white p-2 gap-4">
//         <h6 className="p-2 text-md font-bold hover:rounded hover:bg-slate-800 cursor-pointer hover:transition duration-1000">
//           login
//         </h6>
//         <h6 className="p-2 text-md font-bold rounded-md bg-slate-100 text-black hover:bg-slate-300 cursor-pointer hover:transition duration-1000 ">
//           Signup
//         </h6>
//         <div className="md:hidden">
//           {open ? (
//             <GiTireIronCross
//               className="text-4xl cursor-pointer"
//               onClick={handleOpenMenuBar}
//             />
//           ) : (
//             <FaHamburger
//               className="text-4xl cursor-pointer"
//               onClick={handleOpenMenuBar}
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import Image from "next/image";
import { FaHamburger } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpenMenuBar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="flex bg-slate-950 justify-between items-center p-2">
      {/* Logo and Navigation */}
      <div className="flex items-center">
        <Image src={"/uc-logo.png"} alt="uc-logo" width={50} height={50} />
        <div className="hidden md:flex text-white p-2 gap-4">
          {["Ride", "Drive", "Business", "About", "Help"].map((item) => (
            <h6
              key={item}
              className="p-2 text-md font-bold hover:rounded hover:bg-slate-800 cursor-pointer hover:transition duration-1000"
            >
              {item}
            </h6>
          ))}
        </div>
      </div>

      {/* Login, Signup, and Hamburger */}
      <div className="flex items-center text-white p-2 gap-4">
        <h6 className="p-2 text-md font-bold hover:rounded hover:bg-slate-800 cursor-pointer hover:transition duration-1000">
          Login
        </h6>
        <h6 className="p-2 text-md font-bold rounded-md bg-slate-100 text-black hover:bg-slate-300 cursor-pointer hover:transition duration-1000">
          Signup
        </h6>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          {open ? (
            <GiTireIronCross
              className="text-4xl cursor-pointer"
              onClick={handleOpenMenuBar}
            />
          ) : (
            <FaHamburger
              className="text-4xl cursor-pointer"
              onClick={handleOpenMenuBar}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-14 left-0 w-full bg-slate-950 text-white flex flex-col items-center gap-4 py-4 z-50 shadow-md md:hidden">
          {["Ride", "Drive", "Business", "About", "Help"].map((item) => (
            <h6
              key={item}
              className="p-2 text-md font-bold hover:rounded hover:bg-slate-800 cursor-pointer hover:transition duration-1000"
            >
              {item}
            </h6>
          ))}
        </div>
      )}
    </div>
  );
}
