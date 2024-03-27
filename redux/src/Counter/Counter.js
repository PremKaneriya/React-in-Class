import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/Actions/action.counter'
import { useSelector } from 'react-redux'

const Counter = () => {
    const count = useSelector(state => state.counter)
    console.log(count);

    const dispatch = useDispatch()

    const countInc = () => {
        dispatch(increment())
    }

    const countDec = () => {
        dispatch(decrement())
    }

    return (
        <>
            <h1 className="text-3xl py-5 text-center bg-green-950 font-bold text-green-700">Redux - Counter</h1>
            <div className="text-3xl py-5 text-center bg-green-950 font-bold text-green-400">Display Value : {count.count}</div>
            <div className="flex items-center justify-center">
                <button onClick={countInc} className="bg-green-500 py-2 px-4 ml-4 mb-5 mt-8 rounded-lg text-white">
                    + Increment
                </button>
                <button onClick={countDec} className="bg-red-500 py-2 px-4 ml-4 mb-5 mt-8 rounded-lg text-white">
                    - Decrement
                </button>
            </div>
        </>
    )
}

export default Counter
