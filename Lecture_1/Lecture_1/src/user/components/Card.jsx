// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import styles from "./Card.module.css";

const Card = (data) => {
  console.log(data);
  return (
    <>
        <div>
          <div className=" bg-slate-200 m-5 w-96 rounded-lg shadow-lg p-5 ">
            <h1 className="text-3xl font-bold mb-2">
              Doctor Name:
              <span className="text-blue-700"> {data.dataOfDocs.nameOfDocs}</span>
            </h1>
            <p className="text-gray-700">
              Speciality :
              <span className="text-yellow-700">
                {data.dataOfDocs.age}
              </span>
            </p>
            <p className="text-gray-700">
              Experience :
              <span className="text-green-700">
                {data.dataOfDocs.experience}
              </span>
            </p>
            <p className="text-gray-700">
              Fees :
              <span className="text-red-700">
                {data.dataOfDocs.fees}
              </span>
            </p>
        </div>

        </div>
    </>
  );
};

export default Card;
