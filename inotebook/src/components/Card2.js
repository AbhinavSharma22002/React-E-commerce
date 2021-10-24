import React from "react";
import { Link } from "react-router-dom";

const Card2 = (props) => {
  return (
    <>
      <div className="card my-2 mx-3" style={{ width: "18rem" }}>
        <img src={`./images/img1.jfif`} className="card-img-top" height="300px" alt="Your Items" />
        <div className="card-body">
          <h5 className="card-title">Shoes</h5>
          <p className="card-text">
            Best Quality Shoes
          </p>
          <Link to="/shoes" className="btn btn-primary">
            Go
          </Link>
        </div>
      </div>

      <div className="card my-2 mx-3" style={{ width: "18rem" }}>
        <img src={`./images/img11.jfif`} className="card-img-top" height="300px" alt="Your Items" />
        <div className="card-body">
          <h5 className="card-title">Shirts</h5>
          <p className="card-text">
            Best Quality Shirts
          </p>
          <Link to="/shirt" className="btn btn-primary">
            Go
          </Link>
        </div>
      </div>

      <div className="card my-2 mx-3" style={{ width: "18rem" }}>
        <img src={`./images/img21.jfif`} className="card-img-top" height="300px" alt="Your Items" />
        <div className="card-body">
          <h5 className="card-title">Jeans</h5>
          <p className="card-text">
            Best Quality Jeans
          </p>
          <Link to="/jeans" className="btn btn-primary">
            Go
          </Link>
        </div>
      </div>

      <div className="card my-2 mx-3" style={{ width: "18rem" }}>
        <img src={`./images/img31.jfif`} className="card-img-top" height="300px" alt="Your Items" />
        <div className="card-body">
          <h5 className="card-title">Watches</h5>
          <p className="card-text">
            Best Quality Watches
          </p>
          <Link to="/watch" className="btn btn-primary">
            Go
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card2;
