import React from "react";
import Card2 from "./Card2";

const Body = (props) => {
  return (
         <Card2 title={props.title} link={props.link} image={props.image}/>
  );
};

export default Body;
