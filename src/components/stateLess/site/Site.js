import React from "react";
import Admin from "../admin/Admin";
import Home from "../../stateFull/home/Home";
import { Route, Routes } from "react-router-dom";

export default function Site(){
    return(
        <div>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/admin" element={<Admin/>}/>
            </Routes>
        </div>
    )
};