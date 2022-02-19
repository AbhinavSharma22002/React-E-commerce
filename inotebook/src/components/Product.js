import React from 'react'
import { Link } from 'react-router-dom';
import './product.css';
const Product = () => {
   
    return (
        <div>
            
    <section className="home">
      <div className="container1" id="leftContainer">
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
      <div className="container1" id="rightContainer">
        <img src="./home.png" alt="" />
      </div>
    </section>
    
    <section id="products">
      <h1>Products</h1>
      <div className="productsContainer">
        <div className="container1">
            <div className="card">
            <div className="imgBx">
                <img src="./images/img5.jfif" alt="" height="350px" width="90%"/>
            </div>
            <div className="contentBx">
                <h2>Fashions</h2>
            <Link to="/product" className="hello" style={{textDecoration:'none'}}>
                Check Products out!!
            </Link>
            </div>
            </div>
        </div>


        <div className="container1">
            <div className="card">
            <div className="imgBx">
                <img src="./bakery.jpg" alt="" height="350px" width="90%"/>
            </div>
            <div className="contentBx">
                <h2>Bakery</h2>
            <Link to="/product" className="hello"  style={{textDecoration:'none'}}>
                Check Products out!!
          </Link>
            </div>
            </div>
        </div>



        <div className="container1">
            <div className="card">
            <div className="imgBx">
            <img src="./grocery1.jpg" height="350px" width="90%" alt="Ist product" />
            </div>
            <div className="contentBx">
                <h2>Grocery</h2>
            <Link to="/product" className="hello" style={{textDecoration:'none'}}>
                Check Products out!!
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
