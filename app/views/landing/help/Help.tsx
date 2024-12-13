import Image from "next/image";
import React from "react";
import onePng from "@/public/1.jpg";
import twoPng from "@/public/2.jpg";
import threePng from "@/public/3.jpg";

export default function help() {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 flex flex-col justify-center">
        <div className="flex lg:justify-end w-full justify-center">
          <Image
            className="max-w-[60%] sm:max-w-[50%] lg:max-w-full"
            src={onePng.src}
            alt="1"
            width={550}
            height={100}
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="max-w-[60%]">
            <h1 className="text-lg sm:text-5xl font-bold my-10">
              Drive when you want, make what you need
            </h1>
            <h1 className="font-thin my-10">
              Make money on your schedule with deliveries or rides—or both. You
              can use your own car or choose a rental through UrbanCab.
            </h1>
            <div className="my-10 flex gap-5">
              <button className="text-white bg-black px-5 py-3 rounded-lg">
                Get started
              </button>
              <h1 className="py-3 hover:underline cursor-pointer">
                Already have an account? Sign in
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:my-36 my-7 flex flex-col-reverse">
        <div className="flex justify-center items-center">
          <div className="lg:ml-20 max-w-[60%]">
            <h1 className="text-lg sm:text-5xl font-bold my-10">
              The Uber you know, reimagined for business
            </h1>
            <h1 className="font-thin my-10">
              Uber for Business is a platform for managing global rides and
              meals, and local deliveries, for companies of any size.
            </h1>
            <div className="my-10 flex gap-5">
              <button className="text-white bg-black px-5 py-3 rounded-lg">
                Get started
              </button>
              <h1 className="py-3 hover:underline cursor-pointer">
                Check out our solutions
              </h1>
            </div>
          </div>
        </div>
        <div className="flex lg:justify-start justify-center w-full">
          <Image
            className="max-w-[60%] sm:max-w-[50%] lg:max-w-full"
            src={twoPng.src}
            alt="1"
            width={550}
            height={100}
          />
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:my-36 my-7 flex flex-col">
        <div className="flex lg:justify-end justify-center w-full">
          <Image
            className="max-w-[60%] sm:max-w-[50%] lg:max-w-full"
            src={threePng.src}
            alt="1"
            width={550}
            height={100}
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="max-w-[60%]">
            <h1 className="text-lg sm:text-5xl font-bold my-10">
              Make money by renting out your car
            </h1>
            <h1 className="font-thin my-10">
              Connect with thousands of drivers and earn more per week with
              Uber’s free fleet management tools.
            </h1>
            <div className="my-10 flex gap-5">
              <button className="text-white bg-black px-5 py-3 rounded-lg">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
