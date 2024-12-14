import Image from "next/image";
import React from "react";

export default function Map() {
  return (
    <div className="flex m-10 mt-20 justify-center lg:justify-start">
      <Image
        className="rounded-md cursor-grab"
        src={"/map.jpg"}
        alt="map"
        width={600}
        height={100}
      />
    </div>
  );
}
