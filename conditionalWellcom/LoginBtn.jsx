import React from 'react'

export default function LoginBtn(props) {
    return (
        <button className="btn btn-success" onClick={props.handleClick}>Login</button>
    )
}
