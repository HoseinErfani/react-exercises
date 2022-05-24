import React, { useState } from 'react'

export default function Count() {
    const [count, setCount] = useState(0)
    function increament() {
        setCount(count + 1)
    }
    function decreament() {
        if (count !== 0)
            setCount(count - 1)
    }
    return (
        <div className="d-flex align-items-center ">
            <button className="btn btn-danger" onClick={decreament}>-</button>
            <h2 className="count mx-2 mb-0">{count}</h2>
            <button className="btn btn-success" onClick={increament}>+</button>
        </div>
    )
}
