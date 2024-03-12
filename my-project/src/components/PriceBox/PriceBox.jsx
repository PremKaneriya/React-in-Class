/* eslint-disable no-unused-vars */
import React from "react";

const PriceBox = () => {
  return (
    <><div className="bg-gradient-to-t from-yellow-300 to-white">
          <h1 className="text-5xl font-semibold ml-20 mt-8">Popular</h1>
      <div className="flex justify-center">
        <div className="flex items-center m-20 justify-center w-1/3 h-40 bg-blue-500 m-4 rounded-lg">
          <img src="https://img8.hkrtcdn.com/28088/bnr_2808747_o.png" alt="" />
        </div>
        <div className="flex items-center m-20 justify-center w-1/3 h-40 bg-green-500 m-4 rounded-lg">
          <img src="https://img4.hkrtcdn.com/28088/bnr_2808743_o.png" alt="" />
        </div>
        <div className="flex items-center m-20 justify-center w-1/3 h-40 bg-yellow-500 m-4 rounded-lg">
          <img src="https://img1.hkrtcdn.com/19561/bnr_1956040_o.png" alt="" />
        </div>
      </div>
      </div>
    </>
  );
};

export default PriceBox;
