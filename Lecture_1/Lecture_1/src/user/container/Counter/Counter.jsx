import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../../redux/Actions/counter.action";
import { useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector(state => state.counter);
  console.log(count); 

  const dispatch = useDispatch();

  const countInc = () => {
    dispatch(increment());
  };

  const countDec = () => {
    dispatch(decrement());
  };
  return (
    <>
      <button onClick={countInc}> + </button>
      {<h1>{count.count}</h1>}
      <button onClick={countDec}> - </button>
    </>
  );
};

export default Counter;
