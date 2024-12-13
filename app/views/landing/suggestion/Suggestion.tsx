import Card from "@/app/components/cards/Card";
import React from "react";
import tripPng from "@/public/trip.png";
import keyPng from "@/public/key.png";
import carPng from "@/public/car.png";

export default function Suggestion() {
  return (
    <div className="flex justify-center lg:my-[120px] my-7">
      <div className="w-[82%]">
        <h1 className="text-4xl font-bold">Suggestions</h1>
        <div className="sm:flex sm:flex-row justify-center lg:grid lg:grid-cols-3 gap-4">
          <Card
            title="Ride"
            desc="Go anywhere with UrbanCab. Request a ride, hop in, and go."
            img={carPng}
          />
          <Card
            title="Rental Cars"
            desc="Your perfect rental car is few clicks away. Learn more about
                  UrbanCab Rent."
            img={keyPng}
          />
          <Card
            title="Reserve"
            desc="Reserve your ride in advance so you can relax on the day of your
            trip."
            img={tripPng}
          />
        </div>
      </div>
    </div>
  );
}
