import "./footer.css";
import React from 'react'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footerContainer">
                        <div className="row F_C_Top">
                            <div className="col-6 footerTop"><img  className="" src={`images/Group-111.png`}/></div>
                            <div className="col-6 footerTop"><h1 className="virtualClass">Virtual Class<br/> for Zoom</h1></div>
                        </div>
                        <div className="row">
                            <div className="col-12"><p className="subscribe">Subscribe to get our Newsletter</p></div>
                        </div>
                        <div className="row">
                            <div className="col-12 myFormContainer">
                                <form className="myForm">
                                    <input type="text" placeholder="Your Email"/>
                                    <button type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 footerLinks">
                                <Link className="footerLink" to="/">Careers</Link>
                                <Link className="footerLink" to="/">Privacy Policy</Link>
                                <Link className="footerLink" to="/">Terms & Conditions</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12"><p className="footerBottom">© 2021 Class Technologies Inc.</p></div>
                        </div>
            </div>
        </div>
    )
}
