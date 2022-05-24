import React from 'react'
import ClassBuy from './ClassBuy'
import Count from './count/Count'
import FuncBuy from './FuncBuy'

export default function Buy(props) {
    return (
        <div className="mb-3 d-flex justify-content-around">
            <Count />
            <ClassBuy name={props.name} />
            <FuncBuy name={props.name} />

        </div>
    )
}
