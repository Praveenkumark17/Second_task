import React from "react";
import './userprofile.css';

export default function UserProfile(props){

    const {userinfo} = props;

    return(
        <>
        <h2>My name is {userinfo.name}, 
            I'm {userinfo.age} years old{userinfo.location!==undefined?`, and I come from ${userinfo.location}`:null}.
            User Status : {userinfo.isActive?`Active User`:<span>InActive User</span>}</h2>
        </>
    );

}