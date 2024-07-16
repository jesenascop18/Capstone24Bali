import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";

import { useSelector } from "react-redux";

const Balireport = () => {
    
    const {user} = useSelector((state) => state.auth);
  return (
    <div className="  p-10">
      <div className=" mt-[60px] h-full">
        <div className="bg-white rounded-xl px-6 pt-3">
          <Link to={"/"} className="flex gap-1 items-center font-semibold">
            <FaArrowLeft />
            Back
          </Link>
          {user && user.role === "Admin" && (
            <div className="flex justify-between grid grid-cols-4 gap-3 mt-3">
            <Link to={'/addlaporan'} className="bg-[#5684F9] h-[160px] flex justify-center items-center p-3 text-white rounded-xl">
              <div className="flex items-center gap-3">
                <IoAddCircleOutline /> Buat Laporan
              </div>
            </Link>
            <div className="relative bg-[#00FF57] h-[160px] items-center p-3 text-white rounded-xl">
              <div className="w-full h-full">
                <p className="absolute top-0 left-0 m-3 font-semibold">Laporan Diterima</p>
                <p className="absolute bottom-0 right-0 m-3 text-3xl font-bold">12</p>
              </div>
            </div>
            <div className="relative bg-[#FFEA2A] h-[160px] items-center p-3 text-white rounded-xl">
              <div className="w-full h-full">
                <p className="absolute top-0 left-0 m-3 font-semibold">Laporan Diproses</p>
                <p className="absolute bottom-0 right-0 m-3 text-3xl font-bold">12</p>
              </div>
            </div>
            <div className="relative bg-[#FD0000] h-[160px] items-center p-3 text-white rounded-xl">
              <div className="w-full h-full">
                <p className="absolute top-0 left-0 m-3 font-semibold">Laporan Ditolak</p>
                <p className="absolute bottom-0 right-0 m-3 text-3xl font-bold">12</p>
              </div>
            </div>
          </div>
          )}
          
          {user && user.role === "User" && (
          <p>Anda user</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Balireport;
