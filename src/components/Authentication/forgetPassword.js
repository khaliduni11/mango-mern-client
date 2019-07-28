import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../store/actions/authentication";


function ForgetPassword() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");

    const message = useSelector(state => state.authentication.message);
    const error = useSelector(state => state.authentication.error);

    const inputData = {
        email,
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(forgetPassword(inputData))
        setEmail("")
    }
    return (
        <div className="container">
            <form className="form-group card card-body my-5" onSubmit={handleSubmit}>
                {message !== null && (
                    <div className="alert alert-warning my-2 text-center">{message.data.message}</div>
                )}
                {error !== null && (
                    <div className="alert alert-danger my-2 text-center">{error.data.message}</div>
                )}
                <input
                    type="email"
                    className="form-control my-2"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <button className="btn btn-success my-2">Submit</button>
            </form>
        </div>
    )
}

export default ForgetPassword