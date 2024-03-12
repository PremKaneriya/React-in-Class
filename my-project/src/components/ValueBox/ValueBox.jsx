/* eslint-disable no-unused-vars */
import React from "react";

const ValueBox = () => {
  return (
    <>
    <div className="bg-gradient-to-b from-yellow-300 to-white">
    <h1 className="text-5xl font-semibold ml-16 pt-10 ">Subsidiary Company</h1>
      <div className="flex justify-around items-center h-fit pt-10 pb-10 ">
      
        <div className=" w-72 mx-3">
          <div className="relative">
            <img
              src="https://img5.hkrtcdn.com/19555/bnr_1955454_o.png"
              alt="Image 1"
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
              <p className="text-white flex items-center justify-center bg-black h-full w-full rounded-lg font-bold">Lean Muscle Mass</p>
            </div>
          </div>
        </div>
        <div className=" w-72 mx-3">
          <div className="relative">
            <img
              src="https://img7.hkrtcdn.com/19555/bnr_1955456_o.png"
              alt="Image 2"
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
            <p className="text-white flex items-center justify-center bg-green-900 h-full w-full rounded-lg font-bold">Great Supplememts</p>
            </div>
          </div>
        </div>
        <div className=" w-72 mx-3">
          <div className="relative">
            <img
              src="https://img3.hkrtcdn.com/19555/bnr_1955462_o.png"
              alt="Image 3"
              className="w-full rounded-lg"
            />
            <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-lg">
            <p className="text-white flex items-center justify-center bg-orange-900 h-full w-full rounded-lg font-bold">Mind Fuel</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ValueBox;
