import React from "react";

const Card = (props) => {
  return (
    <div>
      <div className="card my-3">
        <h5 className="card-header">{props.item.category}</h5>
        <div className="card-body">
          <h5 className="card-title">{props.item.name}</h5>
          <p className="card-text">
            <img src={`./images/${props.item.image}`} alt="your item"/>
            <br/>
            {props.item.price}
          </p>
          {/* <a href="#" className="btn btn-primary">
            Go somewhere
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
