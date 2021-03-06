import React from 'react'
import { Link } from 'react-router-dom';
import './product.css';
const Product = () => {
    function generateRandom(min = 0, max = 40) {
      let difference = max - min;
      let rand = Math.random(); 
      rand = Math.floor( rand * difference);
      rand = rand + min;
      return rand;
  }
    return (
        <div>
            
    <section className="home">
      <div className="container" id="leftContainer">
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
      <div className="container45" id="rightContainer">
        <img src="./home.png" alt="" />
      </div>
    </section>
    
    <section id="products">
      <h1>Products</h1>
      <div className="productsContainer">
        <div className="container1 px-3 py-3">
            <div className="card">
            <div className="imgBx">
                <img src={`./images/img${generateRandom(1,10)}.jfif`} alt="" height="350px" width="90%"/>
            </div>
            <div className="contentBx">
                <h2>Fashions</h2>
            <Link to="/product" className="hello" style={{textDecoration:'none'}}>
                Check Products out!!
            </Link>
            </div>
            </div>
        </div>


        <div className="container1 px-3 py-3">
            <div className="card">
            <div className="imgBx">
                <img src={`./images/img${generateRandom(11,20)}.jfif`} alt="" height="350px" width="90%"/>
            </div>
            <div className="contentBx">
                <h2>Shirts</h2>
            <Link to="/product" className="hello"  style={{textDecoration:'none'}}>
                Check Products out!!
          </Link>
            </div>
            </div>
        </div>



        <div className="container1 px-3 py-3">
            <div className="card">
            <div className="imgBx">
            <img src={`./images/img${generateRandom(21,30)}.jfif`} height="350px" width="90%" alt="Ist product" />
            </div>
            <div className="contentBx">
                <h2>Jeans</h2>
            <Link to="/product" className="hello" style={{textDecoration:'none'}}>
                Check Products out!!
          </Link>
            </div>
            </div>
        </div>

        <div className="container1 px-3 py-3">
            <div className="card">
            <div className="imgBx">
            <img src={`./images/img${generateRandom(31,40)}.jfif`} height="350px" width="90%" alt="Ist product" />
            </div>
            <div className="contentBx">
                <h2>Watches</h2>
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
