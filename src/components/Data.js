// eslint-disable-next-line
import { body } from "express-validator";
import React from "react";
import Body from "./Body";
// eslint-disable-next-line
import Corel from "./corel";
const Data = (props) => {
 

  return (
    <div className="container">
        {/* <form style={{display:"flex", justifyContent:"center", alignContent:"center"}}>
        <input className="searchBox" type="text" id="searchbox1" placeholder="Search"/>
        <input className="submit" type="submit" placeholder="Submit"></input>
        </form> */}
        <div style={{display:'flex',flexFlow:'wrap', justifyContent:'center'}}>
        <Body title="Shoes" link="/shoes" image={"./images/img1.jfif"}/>
        <Body title="Shirt" link="/shirt" image={"./images/img11.jfif"}/>
        <Body title="Jeans" link="/jeans" image={"./images/img21.jfif"}/>
        <Body title="Watches" link="/watch" image={"./images/img32.jfif"}/>
        </div>
        <hr/>
        <br/>
        <h2>Grocery</h2>
        <div style={{display:'flex',flexFlow:'wrap', justifyContent:'center'}}>
        <Body title="Fruits And Vegetables" link="/grocery1" image={"./fruits.jpg"}/>
        <Body title="Masala,Oils and More" link="/grocery2" image={"./oil.jpg"}/>
        <Body title="Atta, Dal and Rice" link="/grocery3" image={"./dal.jpg"}/>
        <Body title="Dry Fruits" link="/grocery4" image={"./dry.jpg"}/>
        </div>
        <hr/>
        <br/>
        <h2>Bakery</h2>
        <div style={{display:'flex',flexFlow:'wrap', justifyContent:'center'}}>
        <Body title="Snacks" link="/bakery1" image={"./snacks.jfif"}/>
        <Body title="Cakes and Cookies" link="/bakery2" image={"./cakes.jfif"}/>
        <Body title="Beverages" link="/bakery3" image={"./cold.jfif"}/>
        <Body title="Dairy Products" link="/backery4" image={"./dairy.jpg"}/>
        </div>
        <hr/>
    </div>
  );
};

export default Data;
