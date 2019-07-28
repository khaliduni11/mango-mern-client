import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../store/actions/authentication";
import store from "../../store/store";
import { Link } from "react-router-dom";
import useReactRouter from "use-react-router";

function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState("");

    const { history } = useReactRouter();
    const dispatch = useDispatch();
    var error = useSelector(state => state.authentication.error)

    let inputData = {
        firstName,
        lastName,
        email,
        password,
        image
    }


    function handleSubmit(e) {
        e.preventDefault();
        dispatch(signup(inputData));

    }

    useEffect(() => {
        if (error !== null && error.data.message === "verify your account") {
            history.push("/verify");
            store.getState().authentication.error = null;
        }

        
    })

    return (
        <div className="container">
            <form className="form-group mt-5 card card-body" onSubmit={handleSubmit}>
                {error !== null && error.data.message ===  "This email has already taken. please try another one" && (
                    <div className="alert alert-danger text-center my-2">{error.data.message}</div>
                )}
                <input
                    type="text"
                    name="firstName"
                    className="form-control my-2"
                    placeholder="Enter firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    required
                />

                <input
                    type="text"
                    name="lastName"
                    className="form-control my-2"
                    placeholder="Enter lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    required
                />

                <input
                    type="email"
                    name="email"
                    className="form-control my-2"
                    placeholder="Enter email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    name="password"
                    className="form-control my-2"
                    placeholder="Enter password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />

                <input
                    type="text"
                    name="image"
                    className="form-control my-2"
                    placeholder="Enter Image"
                    value={image}
                    onChange={e => setImage(e.target.value)}
                />


                <button className="btn btn-primary btn-block my-2">
                    Sign Up
                </button>
            </form>
            <div className="row d-flex justify-content-start mb-5">
                <div className="col-xl-4 col-md-3 mx-auto">
                    <p className="lead">i have an account <Link to="/signin" className="btn btn-light">SignIn</Link></p>
                </div>
            </div>


        </div>
    )
}

export default SignUp;