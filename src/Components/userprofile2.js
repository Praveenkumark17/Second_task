import React from "react";

export default function UserProfile2(props){
    const {userinfo} = props;

    return(
        <>
        <h2>My name is {userinfo.name}, I'm a {userinfo.age >= 18 ? `Adult`:`Minor`}{userinfo.email && userinfo.name?`, and my email ID is ${userinfo.email}`:null}.</h2>
        </>
    );
}