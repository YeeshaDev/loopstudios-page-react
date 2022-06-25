import React from "react";

export default function Footer(){
    return(
        <div>
            <footer>
                <div className="footer-logo">
                    <img src="./images/logo.svg"/>
                    <div className="footer-text">
                        <p>About</p>
                        <p>Careers</p>
                        <p>Events</p>
                        <p>Products</p>
                        <p>Support</p>
                    </div>
                </div>
                <div className="socials">
                    <img src="./images/icon-facebook.svg"/>
                    <img src="./images/icon-twitter.svg"/>
                    <img src="./images/icon-pinterest.svg"/>
                    <img src="./images/icon-instagram.svg"/>
                    <p><small>© 2021 Loopstudios. All rights reserved.</small></p>
                </div>
            </footer>
        </div>
    )
} 
