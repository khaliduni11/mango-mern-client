import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useReactRouter from 'use-react-router';
import { changePassword } from "../../store/actions/authentication";
import store from "../../store/store";

function ChangePassword() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [samePassword, setSamePassword] = useState(null);

    const dispatch = useDispatch();
    const { history } = useReactRouter();

    const usermessage = useSelector(state => state.authentication.message);
    const error = useSelector(state => state.authentication.error);

    const userInputData = {
        oldPassword,
        newPassword
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (newPassword === confirmPassword) {
            dispatch(changePassword(userInputData));
            setOldPassword("");
            setNewPassword("");
            setConfirmPassword("");
            setSamePassword(null)
        } else {
            setSamePassword("new password and comfirm password must be same");
            setOldPassword("");
            setNewPassword("");
            setConfirmPassword("");
            store.getState().authentication.error = null;
        }
    }


    useEffect(() => {
        if(usermessage != null){
            history.push("/")
            store.getState().authentication.message = null;
        }
    })
    return (
        <div className="container">
            <form className="form-group card card-body my-5" onSubmit={handleSubmit}>

                {error !== null && (
                    <div className="alert alert-danger my-2 text-center">{error.data.message }</div>
                )}

                {samePassword !== null && (
                    <div className="alert alert-danger my-2 text-center">{samePassword}</div>
                )}

                <input
                    type="password"
                    className="form-control my-2"
                    name="oldPassword"
                    value={oldPassword}
                    onChange={e => setOldPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />


                <input
                    type="password"
                    className="form-control my-2"
                    name="newPassword"
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    placeholder="Enter new password"
                    required
                />

                <input
                    type="password"
                    className="form-control my-2"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    placeholder="comfirm password"
                    required
                />

                <button className="btn btn-primary btn-block  my-2">Submit</button>
            </form>
        </div>
    )
}

export default ChangePassword