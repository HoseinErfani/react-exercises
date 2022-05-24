import React from 'react'

export default function Item(props) {
    return (
        <div className={props.classType}>
        {props.children}
      </div>
    )
}
