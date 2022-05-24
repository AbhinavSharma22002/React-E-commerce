import React from "react";
import { Link } from "react-router-dom";
// img1.jfjf
//img11.jfif
//img21.jfif
//img32.jfif
const Card2 = (props) => {
  return (
    <>
      <div className="card my-2 mx-3" style={{ width: "18rem" }}>
        <img src={props.image} className="card-img-top" height="300px" alt="Your Items" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            Best Quality {props.title}
          </p>
          <Link to={props.link} className="btn btn-danger" style={{width:'10rem'}}>
            Go
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card2;
