import React from "react";
import Source from "./source/Source";
import Map from "./map/Map";

export default function Ride() {
  return (
    <div className="lg:grid grid-cols-2 my-16">
      <Source />
      <Map />
    </div>
  );
}
