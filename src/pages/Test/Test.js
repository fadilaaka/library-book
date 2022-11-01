import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

export const Test = () => {
  return (
    <>
      <section className="flex gap-6">
        <div className="bg-[#0e0e0e] min-h-screen w-72 text-gray-100 px-4">
          <div className="py-3 flex justify-end">
            <HiMenuAlt3 size={26} className="cursor-pointer" />
          </div>
          <div className="mt-4 flex flex-col gap-4 relative">
            <Link to={"/"}>
              <div>
                {React.createElement(HiMenuAlt3,{size:"20"})}
              </div>
              <h2>Dashboard</h2>
            </Link>
            

          </div>
        </div>
        <div className="m-3 text-xl text-gray-900 font-semibold">
          INI HALAMAN UTAMA
        </div>
      </section>
    </>
  );
};
