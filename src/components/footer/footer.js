import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">


                    <div className="col-md-4 col-sm-12 text-center text-white my-4">
                        <h3 className="mb-3">Social Media</h3>
                        <Link to='/' className="btn btn-dark mx-1"><i className="fa fa-facebook"></i></Link>
                        <Link to='/' className="btn btn-dark mx-1"><i className="fa fa-twitter"></i></Link>
                        <Link to='/' className="btn btn-dark mx-1"><i className="fa fa-instagram"></i></Link>
                        <Link to='/' className="btn btn-dark mx-1"><i className="fa fa-linkedin"></i></Link>
                    </div>


                    <div className="col-md-4 col-sm-12 text-center text-white my-4">
                        <h3 className="mb-2">Useful links</h3>
                        <Link to='/' className="footerLink lead">Posts</Link>
                        <br />
                        <Link to='/' className="footerLink lead">Messages</Link>
                        <br />
                        <Link to='/' className="footerLink lead">About</Link>
                        <br />
                        <Link to='/' className="footerLink lead">Contact</Link>
                    </div>


                    <div className="col-md-4 col-sm-12 text-center my-4">
                        <h3 className="mb-2">About Mango</h3>
                        <p className="lead center">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit similique nam soluta quis hic, cupiditate ipsa. Saepe quod ipsa ullam beatae non, magni corporis dolor eligendi quas hic mollitia eos veniam
                        </p>

                    </div>


                </div>
            </div>

            <div id="copyright">
                <div className="container">
                    <p className="text-center text-white font-weight-italic">
                    <em>copyright &#169; <strong>Khalid Hussein</strong></em>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;