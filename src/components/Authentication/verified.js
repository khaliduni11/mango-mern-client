import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import useReactRouter from "use-react-router";
import { verify } from "../../store/actions/authentication";
import "./css.css";

function Verified() {

    const dispatch = useDispatch();
    const { history, match } = useReactRouter()
    const isAuthenticated = useSelector(state => state.authentication.isAuthenticated);
    const error = useSelector(state => state.authentication.error);

    useEffect(() => {
        const { userId } = match.params;
        const { randomNumber } = match.params;
        console.log(userId)
        console.log(randomNumber)
        dispatch(verify(userId, randomNumber))

        if (isAuthenticated === true) {
            history.push("/posts");
        }

    })

    return (
        <div className="container" id="verified">
            {error !== null && error.data.message === "Sorry! not verified"  ? (
                <div className="alert alert-danger my-5 text-center">failed to verify it</div>
            ): (
                <div className="alert alert-success my-5 text-center">Successfully verified</div>
            )}

        </div>
    )
}

export default Verified;