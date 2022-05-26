import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <>
        <footer>
            <div className='footer-content'>
            <div className="midfooter">
                <h2 className="my-5 h2">E-Store</h2>
                <p>Life is not Perfect but Your Outfit Can be</p>
                <ul className="socials">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
                </ul>
            </div>
            <div className="footer-bottom">
            <p>copyright &copy;2021 <a href="#">Abhinav Sharma</a>  </p>
            </div>
            </div>
        </footer>
            
        </>
    )
}

export default Footer
