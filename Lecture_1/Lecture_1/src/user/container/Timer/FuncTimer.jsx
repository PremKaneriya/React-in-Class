import { useEffect, useState } from "react";
import React from "react";

const FuncTimer = () => {
  const [timer, settimer] = useState(new Date());

  const tick = () => {
    settimer(new Date());
    console.log("Tick");
  };

  useEffect(() => {
    const timeRef = setInterval(tick, 1000);

    return () => {
      clearInterval(timeRef);
      console.log("Component Will Unmount");
    };
  }, []); // <= Dependency Array 

  return (
    <>
      <div className="bg-gray-950 px-10 py-10 flex justify-center items-center shadow-slate-50 w-full h-screen">
        <div className="bg-slate-200 w-96 rounded-2xl  drop-shadow-2xl  p-5 flex flex-col justify-center items-center">
          <h1 className="text-3xl px-5 py-5 text-white bg-slate-800 shadow-slate-50 w-full rounded-xl">Digital Timer</h1>
          <h1 className="text-3xl px-5 py-5 text-slate-800">
            {timer.toLocaleTimeString()}
          </h1>
        </div>
      </div>

    </>
  );
};

export default FuncTimer;
