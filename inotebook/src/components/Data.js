import React from "react";
import Body from "./Body";
import Corel from "./corel";
const Data = (props) => {
 

  return (
    <div className="container">
        <Corel data={props.data}/>
        <Body data={props.data}/>
    </div>
  );
};

export default Data;
