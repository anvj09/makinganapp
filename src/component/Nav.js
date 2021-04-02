import React from 'react';
import {NavLink} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <NavLink activeStyle={{fontWeight:"bold", color:"white"}} exact to={"/"}>Games</NavLink>
            <NavLink activeStyle={{fontWeight:"bold", color:"white"}} to={"/looper/red"}>Television</NavLink>
            <NavLink activeStyle={{fontWeight:"bold", color:"white"}} to={"/looper/red"}>Animation</NavLink>
            <NavLink activeStyle={{fontWeight:"bold", color:"white"}} to={"/looper/red"}>All</NavLink>
        </nav>
    )
}

export default Nav;