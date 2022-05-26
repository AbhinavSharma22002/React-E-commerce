// eslint-disable-next-line
import { body } from "express-validator";
import React from "react";
import Body from "./Body";
// eslint-disable-next-line
import Corel from "./corel";
const Data = (props) => {
 
  function generateRandom(min = 0, max = 100) {
    let difference = max - min;
    let rand = Math.random(); 
    rand = Math.floor( rand * difference);
    rand = rand + min;
    return rand;
}
  return (
    <div className="container">
        {/* <form style={{display:"flex", justifyContent:"center", alignContent:"center"}}>
        <input className="searchBox" type="text" id="searchbox1" placeholder="Search"/>
        <input className="submit" type="submit" placeholder="Submit"></input>
        </form> */}
        <div style={{display:'flex',flexFlow:'wrap', justifyContent:'center'}}>
        <Body title="Shoes" link="/shoes" image={`./images/img${generateRandom(1,10)}.jfif`}/>
        <Body title="Shirt" link="/shirt" image={`./images/img${generateRandom(11,20)}.jfif`}/>
        <Body title="Jeans" link="/jeans" image={`./images/img${generateRandom(21,30)}.jfif`}/>
        <Body title="Watches" link="/watch" image={`./images/img${generateRandom(31,40)}.jfif`}/>
        </div>
        <hr/>
    </div>
  );
};

export default Data;
