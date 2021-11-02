import React from 'react'
import { Link } from 'react-router-dom';
import './product.css';
const Product = () => {
    let hello={
        textDecoration:'none',
        color:'black'
    };

    return (
        <div>
            
    <section class="home">
      <div class="container" id="leftContainer">
        <h1>Live Your Life In</h1>
        <h2>A New Style!</h2>
        <p>
          They say first impression is the last impression. Don't wait, Bless
          yourself with perfect clothing.
        </p>
        <Link to="/product">
        <button>Explore Now →</button>
        </Link>

      </div>
      <div class="container" id="rightContainer">
        <img src="./home.png" alt="" />
      </div>
    </section>
    
    <section id="products">
      <h1>Products</h1>
      <div class="productsContainer">
        <div className="container">
            <div class="card">
            <div class="imgBx">
                <img src="./images/img5.jfif" alt="" height="350px" width="90%"/>
            </div>
            <div class="contentBx">
                <h2>Shoes</h2>
            <Link to="/product" style={hello}>
                <a href="#">Check Products out!!</a>
          </Link>
            </div>
            </div>
        </div>

        <div className="container">
            <div class="card">
            <div class="imgBx">
                <img src="./images/img31.jfif" alt="" height="350px" width="90%"/>
            </div>
            <div class="contentBx">
                <h2>Watch</h2>
            <Link to="/product" style={hello}>
                <a href="#">Check Products out!!</a>
          </Link>
            </div>
            </div>
        </div>



        <div className="container">
            <div class="card">
            <div class="imgBx">
                <img src="./images/img21.jfif" alt="" height="350px" width="90%"/>
            </div>
            <div class="contentBx">
                <h2>Jeans</h2>
            <Link to="/product" style={hello}>
                <a href="#">Check Products out!!</a>
          </Link>
            </div>
            </div>
        </div>



        <div className="container">
            <div class="card">
            <div class="imgBx">
            <img src="./images/img11.jfif" height="350px" width="90%" alt="Ist product" />
            </div>
            <div class="contentBx">
                <h2>Shirt</h2>
            <Link to="/product" style={hello}>
                <a href="#">Check Products out!!</a>
          </Link>
            </div>
            </div>
        </div>
        </div>
        </section>

        </div>
    )
}

export default Product
