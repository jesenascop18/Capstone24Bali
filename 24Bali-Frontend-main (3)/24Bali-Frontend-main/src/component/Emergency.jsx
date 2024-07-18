import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
// import EmergenciBG from "../img/baliEmergencyBG.png">

const Emergency = () => {
  return (
    <div className="  p-10 pt-2  bg-gradient-to-b from-[#37B9C2] to-[#98C3C4]">
      <div className=" mt-[60px]  h-[100vh]  bg-white rounded-xl">
        <div className="flex px-6 pt-3">
          <div className="">
              <Link
              to={"/"}
              className="flex gap-1 items-center font-semibold"
            >
              <FaArrowLeft />
              
              Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emergency


