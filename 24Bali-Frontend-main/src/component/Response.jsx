import React, {  } from "react";

const Response = () => {
    return (
        <div>
             <div className="bg-white rounded-lg p-5 w-full max-w-5xl h-full max-h-[90%] shadow-md flex flex-col justify-between">
      <div className="flex justify-between items-center mb-5">
        <div className="text-xl font-bold cursor-pointer">&larr; Back</div>
        <h3 className="text-lg font-semibold">List Response</h3>
        <h3 className="text-lg font-semibold">Selasa, 9 July 2024</h3>
      </div>

      <div className="grid grid-cols-2 gap-5 overflow-auto">
        <div className="bg-gray-200 rounded-lg p-5 flex flex-col justify-between shadow-sm">
          <div className="flex items-center mb-3">
            <div className="bg-red-500 w-12 h-12 rounded-full mr-3"></div>
            <div className="flex flex-col">
              <strong className="text-base">User1234</strong>
              <small className="text-gray-500">Tuesday, 18.30</small>
            </div>
          </div>
          <p className="font-bold mb-2">Where do i find a Cozy Caffe?</p>
          <p className="text-sm text-gray-700 mb-3">Admin: Hello! You can find caffe on any legian streets</p>
          <div className="flex justify-end gap-2">
            <span className="cursor-pointer text-xl">&#128077;</span>
            <span className="cursor-pointer text-xl">&#128257;</span>
          </div>
        </div>

        <div className="bg-gray-200 rounded-lg p-5 flex flex-col justify-between shadow-sm">
          <div className="flex items-center mb-3">
            <div className="bg-red-500 w-12 h-12 rounded-full mr-3"></div>
            <div className="flex flex-col">
              <strong className="text-base">User1234</strong>
              <small className="text-gray-500">Tuesday, 18.30</small>
            </div>
          </div>
          <p className="font-bold mb-2">Where do i find a Cozy Caffe?</p>
          <p className="text-sm text-gray-700 mb-3">Admin: Hello! You can find caffe on any legian streets</p>
          <div className="flex justify-end gap-2">
            <span className="cursor-pointer text-xl">&#128077;</span>
            <span className="cursor-pointer text-xl">&#128257;</span>
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg p-5 flex flex-col justify-between shadow-sm">
          <div className="flex items-center mb-3">
            <div className="bg-red-500 w-12 h-12 rounded-full mr-3"></div>
            <div className="flex flex-col">
              <strong className="text-base">User1234</strong>
              <small className="text-gray-500">Tuesday, 18.30</small>
            </div>
          </div>
          <p className="font-bold mb-2">Where do i find a Cozy Caffe?</p>
          <p className="text-sm text-gray-700 mb-3">Admin: Hello! You can find caffe on any legian streets</p>
          <div className="flex justify-end gap-2">
            <span className="cursor-pointer text-xl">&#128077;</span>
            <span className="cursor-pointer text-xl">&#128257;</span>
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg p-5 flex flex-col justify-between shadow-sm">
          <div className="flex items-center mb-3">
            <div className="bg-red-500 w-12 h-12 rounded-full mr-3"></div>
            <div className="flex flex-col">
              <strong className="text-base">User1234</strong>
              <small className="text-gray-500">Tuesday, 18.30</small>
            </div>
          </div>
          <p className="font-bold mb-2">Where do i find a Cozy Caffe?</p>
          <p className="text-sm text-gray-700 mb-3">Admin: Hello! You can find caffe on any legian streets</p>
          <div className="flex justify-end gap-2">
            <span className="cursor-pointer text-xl">&#128077;</span>
            <span className="cursor-pointer text-xl">&#128257;</span>
          </div>
        </div>
      </div>

      <div className="text-right mt-5">
        <a href="#" class="text-gray-800 font-bold">For More</a>
      </div>
    </div>
        </div>
    )
}

 export default Response;