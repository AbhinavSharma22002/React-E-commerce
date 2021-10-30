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
            <Link to="/shoes" style={hello}>
        <div class="product"><img src="./images/img1.jfif" height="500px" alt="Ist product" />
          <h4>SHIRT</h4>
          </div>
          </Link>
        <Link to="/shirt" style={hello}>
        <div class="product"> <img src="./images/img11.jfif" height="500px" alt="Ist product" />
          <h4>SHIRT</h4>
         
         </div></Link>
        <Link to="/jeans" style={hello}>
        <div class="product"> <img src="./images/img21.jfif" height="500px" alt="Ist product" />
          <h4>JEANS</h4>
         
         </div></Link>
        <Link to="/watch" style={hello}>
        <div class="product"> <img src="./images/img31.jfif" height="500px" alt="Ist product" />
          <h4>WATCH</h4>
         
         </div></Link>
        <Link to="/shoes" style={hello}>
        <div class="product"> <img src="./images/img2.jfif" height="500px" alt="Ist product" />
          <h4>SHOES</h4>
         
         </div></Link>
        <Link to="/shirt" style={hello}> 
        <div class="product"><img src="./images/img12.jfif" height="500px" alt="Ist product" />
          <h4>SHIRT</h4>
         
         </div></Link>
        <Link to="/jeans" style={hello}>
        <div class="product"> <img src="./images/img22.jfif" height="500px" alt="Ist product" />
          <h4>JEANS</h4>
         
         </div>
          </Link>

        <Link to="/watch" style={hello}>
        <div class="product">  <img src="./images/img32.jfif" height="500px" alt="Ist product" />
          <h4>WATCH</h4>
        
        </div>
        </Link>
        </div>
        </section>

        </div>
    )
}

export default Product
