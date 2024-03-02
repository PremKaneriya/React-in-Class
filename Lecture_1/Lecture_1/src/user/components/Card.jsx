// eslint-disable-next-line no-unused-vars
import React from "react";

const Card = (data) => {
  return (
    <>
        <div className="bg-slate-200 m-5 w-1/3 rounded-lg shadow-lg p-5 ">
          <h1 className="text-3xl font-bold mb-2">
            Medicine Name:{" "}
            <span className="text-blue-700">{data.data.name}</span>
          </h1>
          <p className="text-gray-700">
            Description :{" "}
            <span className="text-yellow-700">{data.data.desc}</span>
          </p>
          <p className="text-gray-700">
            Price : <span className="text-red-700">₹{data.data.price}</span>
          </p>
          <p className="text-gray-700">
            Expiry Date :{" "}
            <span className="text-green-700">{data.data.expiry}</span>
          </p>
        </div>
    </>
  );
};

export default Card;
