import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom"
import "../../Styles/css/mainApp.css";
import {logOut} from "../../store/actions/authentication";


function NavbarBottom() {
    const dispatch = useDispatch();
    const uathenticated = useSelector(state => state.authentication);
    return (
        <nav id="navbarBottom" className="navbar
         navbar-expand-md navbar-light">
             <div className="container">
             <Link className="navbar-brand" to="/"><img src="http://pngimg.com/uploads/mango/mango_PNG9163.png" style={{width: '50px'}} alt=""/></Link>
             <button className="navbar-toggler ml-auto" data-target="#navbarCollapse" data-toggle="collapse">
                 <i className="navbar-toggler-icon"></i>
             </button>
             
             <div className="collapse navbar-collapse" id="navbarCollapse">

            {uathenticated.isAuthenticated && (
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/posts" className="nav-link">Posts</Link>
                    </li>
                </ul>
            )}
             
            {!uathenticated.isAuthenticated && (
                <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/signup" className="nav-link">SignUp</Link>
                </li>
                <li className="nav-item">
                    <Link to="/signin" className="nav-link">Login</Link>
                </li>
                
            </ul>
            )}
                {uathenticated.isAuthenticated && (
                    <ul className="navbar-nav">
                    <li className="nav-item">
                            <Link to="/" onClick={() => dispatch(logOut())} className="nav-link">LogOut</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/change_password" className="nav-link">Change Password</Link>
                        </li>
                    </ul>
                )}
                
             </div>
                
             </div>
                
        </nav>
    )
}

export default NavbarBottom;