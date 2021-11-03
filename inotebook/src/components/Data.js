// eslint-disable-next-line
import { body } from "express-validator";
import React from "react";
import Body from "./Body";
// eslint-disable-next-line
import Corel from "./corel";
const Data = (props) => {
 

  return (
    <div className="container">
        <form style={{display:"flex", justifyContent:"center", alignContent:"center"}}>
        <input className="searchBox" type="text" id="searchbox1" placeholder="Search" onClick={()=>{document.getElementsByClassName("body1").style.opacity = "0";}}/>
        <input className="submit" type="submit" placeholder="Submit"></input>
        </form>
        <div className="my-4 body1"></div>
        <Body data={props.data}/>
    </div>
  );
};

export default Data;
