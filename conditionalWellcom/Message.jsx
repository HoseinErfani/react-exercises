import React from 'react'

export default function Message(props) {
    if(props.isLoggedIn){
        return  <h1 className="alert alert-info mt-3">user is logged in</h1>
    }
    else{
        return  <h1 className="alert alert-danger mt-3">user is logged out</h1>
    }
}
