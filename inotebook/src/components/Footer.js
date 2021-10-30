import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <>
        <footer id="footer">
            <div className="leftfooter">
                <h2>Contact Us</h2>
                <img src="./app.png" height="120px" width="200px"></img>
                <img src="./play.png" alt="" height="100px" width="200px"/>
            </div>
            <div className="midfooter">
                <h1 className="my-5">E-Store</h1>
                <p><u>Life is not Perfect but Your Outfit Can be</u></p>
                <p>Copyright &copy; 2021</p>
            </div>
            <div className="rightfooter">
                <h2 className="my-5">Follow Us</h2>
                <a><img src="./insta.svg" height="50px" width="50px"></img>Instagram</a>
                <a><img src="./face.svg"height="50px" width="50px"></img>Facebook</a>
                <a><img src="./you.svg"height="60px" width="60px"></img>Youtube </a>
            </div>
        </footer>
            
        </>
    )
}

export default Footer
