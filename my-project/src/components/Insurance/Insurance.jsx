/* eslint-disable no-unused-vars */
import React from "react";

const Insurance = () => {
  return (
    <>
      <div className="flex justify-center pl-10 pr-10 pt-16 pb-16 bg-gradient-to-t from-yellow-300 to-white">
        <div className="w-1/4 m-9 rounded-lg flex flex-col items-center">
          <img
            src="https://static1.hkrtcdn.com/mbnext/static/media/Homepage/authenticate/featurebanner/safeandsecure.svg"
            alt=""
            className="h-full"
          />
          <h2 className="text-3xl font-bold">100% Safe & Secure Payments</h2>
        </div>
        <div className="w-1/4 m-4 rounded-lg flex flex-col items-center">
          <img
            src="https://static1.hkrtcdn.com/mbnext/static/media/Homepage/authenticate/featurebanner/freeshiping.svg"
            alt=""
            className="h-20 mt-5"
          />
          <h2 className="text-3xl font-bold">Free Shipping</h2>
        </div>
        <div className="w-1/4 m-4 rounded-lg flex flex-col items-center">
          <img
            src="https://static1.hkrtcdn.com/mbnext/static/media/Homepage/authenticate/featurebanner/mb_cash.svg"
            alt=""
            className="h-full"
          />
          <h2 className="text-3xl font-bold">Shop with us & earn MB Cash</h2>
        </div>
        <div className="w-1/4 m-4 rounded-lg flex flex-col items-center">
          <img
            src="https://static1.hkrtcdn.com/mbnext/static/media/Homepage/authenticate/featurebanner/authen.svg"
            alt=""
            className="h-full"
          />
          <h2 className="text-3xl font-bold">Authenticity Guaranteed</h2>
        </div>
      </div>
    </>
  );
};

export default Insurance;
