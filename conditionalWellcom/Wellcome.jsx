import React from 'react'
import UserWelcome from './UserWelcome';
import GuestWelcome from './GuestWelcome';

export default function Wellcome(props) {
    if(props.isLoggedIn){
        return <UserWelcome />
    }
    else{
        return <GuestWelcome />
    }
}
