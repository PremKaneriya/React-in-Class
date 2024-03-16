import React from "react";

const CardTwo = (data) => {
    console.log(data);
  return (
    <>
    <div>
      <div className="Card bg-slate-200 m-5 w-96 rounded-lg shadow-lg p-5">
        <h1 className="text-xl font-bold mb-2">
          Medicine Name: <span className="text-blue-700">{data.data.name}</span>
        </h1>
        <p className="text-gray-700">
          Desc : <span className="text-red-700">{data.data.desc}</span>
        </p>
        <p className="text-gray-700">
          Price : <span className="text-red-700">₹{data.data.price}</span>
        </p>
        <p className="text-gray-700">
          Expiry Date :{" "}
          <span className="text-green-700">{data.data.expiry}</span>
        </p>
      </div>
      </div>
    </>
  );
};

export default CardTwo;
