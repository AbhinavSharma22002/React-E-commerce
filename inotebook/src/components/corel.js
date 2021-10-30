import React from "react";
import { Link } from "react-router-dom";

let hello = { cursor: "pointer"};

const Corel = (props) => 
{
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        align="center"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active bg-dark"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            className="bg-dark"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            className="bg-dark"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            className="bg-dark"
            aria-label="Slide 4"
          ></button>
        </div>

        <div className="carousel-inner bg-white">
          <div className="carousel-item active" style={hello}>
              <Link to="/shoes">
            <img
              src="images/img1.jfif"
              className="d-block"
              height="300px"
              alt="shoes"
            />
            </Link>
            <div
              className="carousel-caption d-none d-md-block"
              style={{ color: "black" }}
            >
              <h5>Shoes</h5>
              <p>Best Quality Shoes</p>
            </div>
          </div>

          <div className="carousel-item" width="100%" style={hello}>
              <Link to = "/shirt">
            <img
              src="images/img11.jfif"
              className="d-block"
              height="300px"
              alt="shirt"
            />
            </Link>
            <div
              className="carousel-caption d-none d-md-block"
              style={{ color: "black" }}
            >
              <h5>Shirt</h5>
              <p>Best Quality Shirt</p>
            </div>
          </div>

          <div className="carousel-item" width="100%" style={hello}>
              <Link to="/jeans">
            <img
              src="images/img22.jfif"
              className="d-block"
              height="300px"
              alt="jeans"
            />
            </Link>
            <div
              className="carousel-caption d-none d-md-block"
              style={{ color: "black" }}
            >
              <h5>Jeans</h5>
              <p>Best Quality Jeans</p>
            </div>
          </div>

          <div className="carousel-item" width="100%" style={hello}>
              <Link to="/watch">
            <img
              src="images/img33.jfif"
              className="d-block"
              height="300px"
              alt="watch"
            />
            </Link>
            <div
              className="carousel-caption d-none d-md-block"
              style={{ color: "black" }}
            >
              <h5>Watches</h5>
              <p>Best Quality Watches</p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon bg-dark"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Corel;
