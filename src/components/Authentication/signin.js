import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../store/actions/authentication";
import useReactRoute from "use-react-router";


function SignIn() {
    const dispatch = useDispatch();
    const { history } = useReactRoute();

    const userAuthenticated = useSelector(state => state.authentication.isAuthenticated)
    const error = useSelector(state => state.authentication.error);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const inputData = {
        email,
        password
    }


    function handleSubmit(e) {
        e.preventDefault();
        dispatch(signin(inputData))
        setEmail("")
        setPassword("")
    }



    useEffect(() => {

        if (error !== null && error.data.message === "verify your account") {
            history.push("/verify");
        }

        if(userAuthenticated){
            history.push("/posts")
        }
    })


    return (
        <div className="container">
            <form className="form-group mt-5 card card-body" onSubmit={handleSubmit}>

                {error !== null && error.data.message === "invalid email/password" && (
                    <div className="alert alert-danger text-center my-2">{error.data.message}</div>
                )}

                <input
                    type="email"
                    className="form-control my-2"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    className="form-control my-2"
                    placeholder="Enter password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button className="btn btn-primary btn-block my-2">
                    Signin
                </button>
            </form>
            <div className="row justify-content-start mb-5">
                <div className="col-xl-4 col-md-3 mx-auto">
                    <p className="lead">create anew account <Link to="/signup" className="btn btn-light">SignUp</Link></p>
                </div>
                <div className="col-xl-4 col-md-3 mx-auto">
                    <Link to="/forget_password" className="btn btn-light">forget password</Link>
                </div>
            </div>


        </div>
    )
}



export default SignIn;