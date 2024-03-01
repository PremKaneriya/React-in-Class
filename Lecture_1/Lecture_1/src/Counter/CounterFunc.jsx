// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const changeCount = () => {
        setCount(count + 1)
    }

    const removeCount = () => {
        setCount(count - 1)
    }

  return (
    <>
      <nav>
        <h1 className="text-3xl py-5 bg-slate-950 font-bold font-mono text-white text-center">Counter : {count}</h1>
      </nav>
      <div className="container">
        <button onClick={changeCount} disabled={count === 5} className="bg-slate-950 py-2 px-4 ml-4 mb-5 mt-8 rounded-lg text-white">Add Value</button>
        <button onClick={removeCount} disabled={count === 0} className="bg-slate-950 py-2 px-4 ml-4 mb-5 mt-8 rounded-lg text-white">Remove Value</button>
      </div>
    </>
  )
}

export default Counter
