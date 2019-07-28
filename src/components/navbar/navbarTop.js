import React from 'react';
import { Link } from "react-router-dom"
import "../../Styles/css/mainApp.css"


function NavbarTop() {
    return (
        <nav id="navbarTop" className="d-none d-md-block navbar navbar-expand-md navbar-light">
            <div className="container">
                <ul className="nav navbar-nav mx-auto">
                    <li className="nav-item">
                        <i className="fa fa-phone mr-4 "> 231-3233-4234</i>
                    </li>
                    <li className="nav-item justify-content-center">
                        <Link to="" className="fa fa-facebook mr-4"></Link>
                    </li>
                    <li className="nav-item justify-content-center">
                        <Link to="" className="fa fa-twitter mr-4"></Link>
                    </li>
                    <li className="nav-item ">
                        <Link to="/"><i className="fa fa-youtube mr-4"></i></Link>
                    </li>
                    <li className="nav-item justify-content-center">
                        <Link to="/" className="fa fa-google-plus mr-4"> </Link>
                    </li>
                    <li className="nav-item ">
                        <Link to="/"><i className="fa fa-linkedin"></i></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarTop;