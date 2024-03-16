import React, { useState, useEffect } from "react";

const UseEffectExplanation = () => {
  const [count, setcount] = useState(0);

  const Add = () => {
    setcount(count + 1);
  };

  useEffect(() => {
    alert("UseEffect");
    
  }, [count]);


  return (
    <>
      <div>
        <h1 className="text-3xl px-5 py-5 text-white bg-slate-900 text-center">
          Use Effect Explanation
        </h1>
        <h2 className="text-3xl px-5 py-5 text-white bg-slate-700 text-center">
          Counter : {count}
        </h2>
        <button onClick={Add} className="bg-slate-500 py-3 px-5 m-5 mb-5 rounded-lg text-white block mx-auto">
          Add
        </button>
      </div>
    </>
  );
};

export default UseEffectExplanation;
