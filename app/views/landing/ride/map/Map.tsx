import Image from "next/image";
import React from "react";

export default function Map() {
  return (
    <div className="flex mt-7 justify-center sm:justify-center lg:justify-start sm:mt-14">
      <Image
        className="rounded-md cursor-grab mt-7 mx-auto w-[400px] sm:w-[400px] lg:w-[600px]"
        src={"/map.jpg"}
        alt="map"
        width={600}
        height={100}
      />
    </div>
  );
}
