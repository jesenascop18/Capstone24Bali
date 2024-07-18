import React from "react";
import { useNavigate } from "react-router-dom";

const HoaxCheck = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };
  return (
    <div className="p-10">
      <div className="bg-white rounded-2xl p-5 mt-[60px] w-full shadow-lg flex flex-col justify-between h-full">
        <div className="flex justify-between items-center mb-5">
          <div className="text-xl font-bold cursor-pointer">
            <button onClick={back}>Back</button>
          </div>
          <h3>Selasa, 9 July 2024</h3>
        </div>
        <div className="flex justify-between flex-grow">
          <div className="flex flex-col items-center flex-1">
            <div className="bg-gray-400 text-white p-3 my-1 rounded-lg w-11/12">
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="bg-gray-400 text-white p-3 my-1 rounded-lg w-11/12">
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="bg-gray-400 text-white p-3 my-1 rounded-lg w-11/12">
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="bg-red-500 text-white p-1 px-5 rounded-lg text-center mt-2 w-1/2">
              HOAX
            </div>
          </div>
          <div className="flex flex-col items-center flex-1">
            <div className="bg-gray-400 text-white p-3 my-1 rounded-lg w-11/12">
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="bg-gray-400 text-white p-3 my-1 rounded-lg w-11/12">
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="bg-gray-400 text-white p-3 my-1 rounded-lg w-11/12">
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="bg-green-300 text-black p-1 px-5 rounded-lg text-center mt-2 w-1/2">
              FACT
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoaxCheck;
