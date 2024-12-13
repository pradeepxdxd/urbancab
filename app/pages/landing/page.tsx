import React from "react";
import Ride from "@/app/views/landing/ride/Ride";
import Suggestion from "@/app/views/landing/suggestion/Suggestion";
import Help from "@/app/views/landing/help/Help";
// import ScanAuth from "@/app/views/landing/scanAuth/ScanAuth";

export default function page() {
  return (
    <div>
      <Ride />
      <Suggestion />
      <Help />
      {/* <ScanAuth /> */}
    </div>
  );
}

export const generateMetadata = () => {
  return {
    title: "Earn Money by Driving or Get a Ride Now | UrbanCab India",
    description: "Earn Money by Driving or Get a Ride Now | UrbanCab India",
  };
};
