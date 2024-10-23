import React from "react";
import './userprofile.css';

export default function Products(props){
    const {productinfo} = props;


    return(
        <>
        <h2>Product name: {productinfo.name}, price: {productinfo.price}, 
            Status: {productinfo.isStock?`InStock`:<span>Out of Stock</span>} 
            {productinfo.price > 100?`, It's a Premium product`:null}
        </h2>
        </>
    );
}