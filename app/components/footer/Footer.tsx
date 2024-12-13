import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { MdLanguage } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-slate-950 flex">
      <div className="flex-row md:w-4/5 mx-auto">
        <div className="flex-row md:flex justify-end w-full mt-10">
          <h6 className="text-slate-200 hover:text-slate-400 cursor-pointer hover:transition duration-500">
            Do not sell or share my personal information
          </h6>
        </div>
        <div className="flex-row md:flex justify-between my-1">
          <div className="flex justify-start">
            <h1 className="text-2xl font-bold text-slate-200 hover:text-slate-400 cursor-pointer hover:transition duration-500">
              UrbanCab
            </h1>
          </div>
          <div className="flex-row md:flex justify-end">
            <h6 className="text-slate-200 hover:text-slate-400 cursor-pointer hover:transition duration-500">
              Google Data Policy
            </h6>
          </div>
        </div>
        <div className="my-6 w-36">
          <h1 className="text-lg text-slate-200 hover:text-slate-400 cursor-pointer hover:transition duration-500">
            Visit help center
          </h1>
        </div>
        <div className="flex-row md:flex my-11">
          <div className="w-[20%]">
            <h1 className="text-white">Company</h1>
            <div className="mt-4">
              <h1 className="text-sm text-slate-200 hover:text-slate-400 cursor-pointer hover:transition duration-500">
                About us
              </h1>
            </div>
            <div className="mt-3">
              <h1 className="text-sm text-slate-200 hover:text-slate-400 cursor-pointer hover:transition duration-500">
                Newsroom
              </h1>
            </div>
            <div className="mt-3">
              <h1 className="text-sm text-slate-200 hover:text-slate-400 cursor-pointer hover:transition duration-500">
                Inverstors
              </h1>
            </div>
            <div className="mt-3">
              <h1 className="text-sm text-slate-200 hover:text-slate-400 cursor-pointer hover:transition duration-500">
                Blogs
              </h1>
            </div>
            <div className="mt-3">
              <h1 className="text-sm text-slate-200 hover:text-slate-400 cursor-pointer hover:transition duration-500">
                Careers
              </h1>
            </div>
          </div>
          <div className="w-[20%]">
            <h1 className="text-white">Products</h1>
            <div className="mt-4">
              <h1 className="text-sm text-slate-200 hover:text-slate-400 cursor-pointer hover:transition duration-500">
                Ride
              </h1>
            </div>
            <div className="mt-3">
              <h1 className="text-sm text-slate-200 hover:text-slate-400 cursor-pointer hover:transition duration-500">
                Drive
              </h1>
            </div>
            <div className="mt-3">
              <h1 className="text-sm text-slate-200 hover:text-slate-400 cursor-pointer hover:transition duration-500">
                Deliver
              </h1>
            </div>
            <div className="mt-3">
              <h1 className="text-sm text-slate-200 hover:text-slate-400 cursor-pointer hover:transition duration-500">
                Eat
              </h1>
            </div>
            <div className="mt-3">
              <h1 className="text-sm text-slate-200 hover:text-slate-400 cursor-pointer hover:transition duration-500">
                Urban Bussiness
              </h1>
            </div>
            <div className="mt-3">
              <h1 className="text-sm text-slate-200 hover:text-slate-400 cursor-pointer hover:transition duration-500">
                Urban Freight
              </h1>
            </div>
            <div className="mt-3">
              <h1 className="text-sm text-slate-200 hover:text-slate-400 cursor-pointer hover:transition duration-500">
                Gift Cards
              </h1>
            </div>
          </div>
          <div className="w-[20%]">
            <h1 className="text-white">Global citizenship</h1>
            <div className="mt-4">
              <h1 className="text-sm text-slate-200 hover:text-slate-400 cursor-pointer hover:transition duration-500">
                Safety
              </h1>
            </div>
            <div className="mt-3">
              <h1 className="text-sm text-slate-200 hover:text-slate-400 cursor-pointer hover:transition duration-500">
                Diversity and Inclusion
              </h1>
            </div>
            <div className="mt-3">
              <h1 className="text-sm text-slate-200 hover:text-slate-400 cursor-pointer hover:transition duration-500">
                Sustainablity
              </h1>
            </div>
          </div>
          <div className="w-[20%]">
            <h1 className="text-white">Travel</h1>
            <div className="mt-4">
              <h1 className="text-sm text-slate-200 hover:text-slate-400 cursor-pointer hover:transition duration-500">
                Reserve
              </h1>
            </div>
            <div className="mt-3">
              <h1 className="text-sm text-slate-200 hover:text-slate-400 cursor-pointer hover:transition duration-500">
                Cities
              </h1>
            </div>
          </div>
        </div>
        <div className="flex-row md:flex my-7 justify-between">
          <div className="flex gap-8">
            <FaFacebook className="text-white text-2xl hover:text-3xl hover:transition cursor-pointer duration-700" />
            <FaSquareXTwitter className="text-white text-2xl hover:text-3xl hover:transition cursor-pointer duration-700" />
            <FaYoutube className="text-white text-2xl hover:text-3xl hover:transition cursor-pointer duration-700" />
            <FaGithub className="text-white text-2xl hover:text-3xl hover:transition cursor-pointer duration-700" />
            <GrInstagram className="text-white text-2xl hover:text-3xl hover:transition cursor-pointer duration-700" />
          </div>
          <div className="flex-row mt-1 md:flex gap-4">
            <span className="flex text-white rounded-md p-2 hover:bg-gray-400 hover:rounded-md cursor-pointer hover:transition hover:duration-700">
              <MdLanguage className="text-white text-2xl" />
              <span className="ml-1">English</span>
            </span>
            <span className="flex text-white rounded-md p-2 hover:bg-gray-400 hover:rounded-md cursor-pointer hover:transition hover:duration-700">
              <FaLocationDot className="text-white text-2xl" />
              <span className="ml-1">Wichita</span>
            </span>
          </div>
        </div>
        <div className="flex my-7 justify-between">
          <div>
            <h1 className="text-xs text-gray-400">
              © 2024 UrbanCap Technologies Inc.
            </h1>
          </div>
          <div className="flex gap-4">
            <h1 className="text-xs text-gray-400 cursor-pointer hover:underline">
              Privacy
            </h1>
            <h1 className="text-xs text-gray-400 cursor-pointer hover:underline">
              Accessiblity
            </h1>
            <h1 className="text-xs text-gray-400 cursor-pointer hover:underline">
              Terms
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
