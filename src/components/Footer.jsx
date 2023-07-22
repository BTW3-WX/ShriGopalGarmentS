import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
    {/* <!-- footer --> */}
    <footer>
        <div class="f1">
            <div class="f11"><a class="navbar-brand" href="https://front.codes/" target="_blank"><img src="https://assets.codepen.io/1462889/fcy.png" alt=""/></a></div>
            <div class="f12"><a href="#"><b>Address: </b>Hanuman Tiraha Bata Wali Gali, near hanuman mandir, Dholpur, Rajasthan</a></div>
            <div class="f12"><a href="#"><b>Phone: </b>+91 8278617191</a></div>
            <div class="f12"><a href="#"><b>Email: </b>Shrigopalgarments2002@gmail.com</a></div>
            <div class="f13">
                <a href="#" class="f13-font"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#" class="f13-font"><i class="fa-brands fa-instagram"></i></a>
                <a href="#" class="f13-font"><i class="fa-brands fa-square-twitter"></i></a>
                <a href="#" class="f13-font"><i class="fa-brands fa-pinterest-p"></i></a>
            </div>
        </div>
        <div class="f1">
            <div class="f21"><h3>Information</h3></div>
            <div class="f22"><a href="#">About Us</a></div>
            {/* <div class="f22"><a href="#">Checkout</a></div> */}
            <div class="f22"><a href="#">Contact</a></div>
            <div class="f22"><a href="#">Serivius</a></div>
        </div>
        <div class="f1">
            <div class="f21"><h3>My Account</h3></div>
            <div class="f22"><a href="#">My Account</a></div>
            <div class="f22"><a href="#">Contact</a></div>
            {/* <div class="f22"><a href="#">Shopping Cart</a></div> */}
            <div class="f22"><a href="#">Shop</a></div>
        </div>
        <div class="f1">
            <div class="f21"><h3>Join our Newsletter Now</h3></div>
            <div class="f12">Get E-mail updates about our latest shop and special offers</div>
            <div class="f43">
                <input type="email" placeholder="Enter your Email"/>
                <button class="newsletter">Subscribe</button>
            </div>
        </div>
    </footer>
    <div class="fade_rule"></div>  
    <div class="foo-bel">
        <p>Copyright &copy; 2023 - <a href="https://wictronix.com/"><b>WictroniX</b></a>. All rights reserved</p>
      </div>
    </>
    )
}

export default Footer