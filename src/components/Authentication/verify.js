import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resend } from "../../store/actions/authentication";

function Verify() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [disable, setDisable] = useState(true);

    const error = useSelector(state => state.authentication.error);

    const inputData = {
        email,
    }
    function handleResend(e) {
        e.preventDefault();
        dispatch(resend(inputData));
        setEmail("")
        setDisable(true)
    }

    
    useEffect(() => {
        setInterval(() => {
            setDisable(false);
        }, 10000)
    })


    return (
        <div className="container">
            <div className="alert alert-warning text-center my-5">Verify Your Account</div>

            {error !== null && error.data.message === "email is invalid" &&(
                <div className="alert alert-danger text-center my-5">{error.data.message}</div>
            )}
            <form className="form-group mt-5" onSubmit={handleResend}>
                <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <div className="text-success text-center"><small>if you don't get any email in 30 sec the form will enable in 30 sec and resend the code</small> </div>
                <button className="btn btn-warning btn-block btn-lg mx-auto" disabled={disable}>resend</button>

            </form>
        </div>
    )
}

export default Verify;