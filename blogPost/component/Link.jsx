import React from 'react'

export default function Link(props) {
    return (
        <li onClick={()=>props.handleClick(props.index)}>{props.title}</li>
    )
}
