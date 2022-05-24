import React from 'react'

export default function LogoutBtn(props) {
    return (
        <button className="btn btn-danger" onClick={props.handleClick}>Logout</button>
    )
}
