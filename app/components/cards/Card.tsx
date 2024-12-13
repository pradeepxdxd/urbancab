import Image, { StaticImageData } from "next/image";
import React from "react";
const Card: React.FC<{ title: string; desc: string; img: StaticImageData }> = ({
  title,
  desc,
  img,
}) => {
  return (
    <div className="my-8 sm:w-full max-w-96 max-h-56 bg-gray-50 rounded-md shadow-2xl">
      <div className="grid grid-cols-3">
        <div className="col-span-2 mx-3 my-6">
          <h1>{title}</h1>
          <p className="my-2 font-thin text-xs">{desc}</p>
          <button className="bg-gray-200 py-1 px-3 rounded-md hover:bg-gray-300 transition duration-500">
            Details
          </button>
        </div>
        <div className="flex justify-center items-center">
          <Image src={img.src} alt="car" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Card;
