import React from 'react'
import { useDispatch } from 'react-redux'; 
import { decrement, increment } from '../../../redux/Actions/counter.action'

const Counter = () => {
    const dispatch = useDispatch()
    
    const countInc = () => {
        dispatch(increment)
    }

    const countDec = () => {
        dispatch(decrement)
    }
  return (    
    <>
     <button onClick={countInc}> + </button>
     {
        0
     } 
     <button onClick={countDec}> - </button>
    </>
  )
}

export default Counter
