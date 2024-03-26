/* eslint-disable no-unused-vars */
import React from "react";

const ShopDetail = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img src='https://img7.hkrtcdn.com/27176/prd_2717576-MuscleBlaze-Biozyme-Performance-Whey-2.2-lb-Rich-Chocolate_c_m.jpg' className="w-full" />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
            <h1 className="text-3xl font-bold">Protine</h1>
            <p className="text-gray-600 mt-2">Muscle Growth</p>
            <div className="mt-4">
              <p className="text-xl font-semibold">999</p>
              <p className="text-sm text-gray-500 line-through">
                {1999}
              </p>
              <p className="text-sm text-green-500">1000 off</p>
            </div>
            <p className="mt-4">5</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopDetail;
