import React from "react";
import Body from "./Body";
import Corel from "./corel";
const Data = (props) => {
 

  return (
    <div className="container">
        <Corel data={props.data}/>
        <div className="my-4"></div>
        <Body data={props.data}/>
    </div>
  );
};

export default Data;
