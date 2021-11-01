import React from "react";
import Body from "./Body";
import Corel from "./corel";
const Data = (props) => {
 

  return (
    <div className="container">
        {/* <Corel data={props.data}/> */}
        <form style={{display:"flex", justifyContent:"center", alignContent:"center"}}>
        <input className="searchBox" type="text" id="searchbox1" placeholder="search"/>
        <input className="submit" type="submit" placeholder="Submit"></input>
        </form>
        <div className="my-4"></div>
        <Body data={props.data}/>
    </div>
  );
};

export default Data;
