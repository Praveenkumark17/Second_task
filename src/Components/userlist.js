import React from "react";
import UserProfile from "./userprofile";
import UserProfile2 from "./userprofile2";
import Products from "./products";

export default function UserList(){
    const userinfo = [
        {name:'praveenkuamr',age:23,location:'Harur',email:'parveenkumar007@gmail.com',isActive:true},
        {name:'Arun',age:18,location:'Chennai',isActive:false},
        {name:'Ram',age:16,email:'ram256@gmail.com',isActive:true},
        {name:'Ranjith',age:15,isActive:false}
    ];

    const productinfo = [
        {name:'Apple',price:150,isStock:true},
        {name:'Tomato',price:60,isStock:true},
        {name:'Onion',price:65,isStock:false},
        {name:'Chilli',price:40,isStock:true},
        {name:'Orange',price:200,isStock:false}
    ]

    return(
        <>
        <h1>Task 1</h1>
        {userinfo.map((value)=>(<UserProfile userinfo={value}/>))}

        <h1>Task 2</h1>
        {userinfo.map((value)=>(<UserProfile2 userinfo={value}/>))}

        <h1>Task 3</h1>
        {productinfo.map((value)=>(<Products productinfo={value}/>))}
        </>
    );
}