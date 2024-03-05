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
  }, []);

  useEffect(() => {
    console.log("Component Did Mount");
  }, [timer]);

  return (
    <>
      <h1 className="text-3xl mt-5 px-5 py-5 text-slate-500">
        Time : {timer.toLocaleTimeString()}
      </h1> 
    </>
  );
};

export default FuncTimer;
