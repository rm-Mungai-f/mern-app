import React from "react";
import Admin from "../admin/Admin";
import Home from "../../stateFull/home/Home";
import { BrowserRouter } from "react-router-dom";

export default function Site(){
    return(
        <BrowserRouter>
        <div>
            <Home/>
            <Admin/> 
        </div>
        </BrowserRouter>
    )
};