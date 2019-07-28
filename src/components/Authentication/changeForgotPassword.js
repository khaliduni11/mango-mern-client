import React, { useState } from "react";
import { changeForgotPassword } from "../../store/actions/authentication";
import { useDispatch } from "react-redux";
import useReactRouter from "use-react-router";

function ChangeForgotPassword() {
    const dispatch = useDispatch();
    const { history, match } = useReactRouter();

    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [error, setError] = useState('');
    const userId = match.params.userId;
    const randomNumber = match.params.randomNumber

    const inputData = {
        password
    }

    function handleSubmit(e){
        e.preventDefault();
        if(password === confirm){
            dispatch(changeForgotPassword(inputData, userId, randomNumber))
            history.push("/");
        }else{
            setError("password and comfirm must be same");
            setPassword("");
            setConfirm("");
        }
    }
    return (
        <div className="container">
            <form className="form-group my-5" onSubmit={handleSubmit}>
            {error !== '' && (
                <div className="alert alert-danger text-center my-2">{error}</div>
            )}
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
                    type="password"
                    name="confirm"
                    className="form-control my-2"
                    placeholder="confirm your password"
                    value={confirm}
                    onChange={e => setConfirm(e.target.value)}
                    required
                />
                <button className="btn btn-warning btn-block my-2">Submit</button>
            </form>
        </div>
    )
}

export default ChangeForgotPassword;