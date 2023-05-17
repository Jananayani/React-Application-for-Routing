import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faHandHolding } from "@fortawesome/free-solid-svg-icons";

import "./css/Footer.style.css";
library.add(faHeadphones);
library.add(faGlobe);
library.add(faClock);
library.add(faHandHolding);

const Footer = () => {
    return (
        <div className="footer">
            {/* <div className="first-footer">
                <FontAwesomeIcon icon="headphones" className="icon-set" />
                <h3 className="support-set">Customer Support</h3>
                <FontAwesomeIcon icon="globe" className="icon-set" />
                <h3 className="support-set">Island Wide Delivery</h3>
                <FontAwesomeIcon icon="clock" className="icon-set" />
                <h3 className="support-set">Express Delivery</h3>
                <FontAwesomeIcon icon="hand-holding" className="icon-set" />
                <h3 className="support-set">100+ services</h3>
            </div> */}
            <br />
            <div class="address">
                <h2>Apex.com</h2>
                <h4>No 123 Galle Road,</h4>
                <h4>Colombo 03, Sri Lanka.</h4>
                <p>HOTLINE</p>
                <h4>123-456-789</h4>
                
            </div>
            <div className="about">
                <h3>About</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>Contact Us</p>
            </div>
            <div className="help">
                <h3>Help</h3>
                <p>How to Buy</p>
                <p>Shipping and Delivery</p>
                <p>Return Products</p>
            </div>
            <div className="policies">
                <h3>Policies</h3>
                <p>Privacy Policy</p>
                <p>Return Policy</p>
                <p>Terms and Conditions</p>
            </div>
            
                

           

        </div>
    );
};

export default Footer;
