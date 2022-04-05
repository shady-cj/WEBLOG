import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { check_auth_status } from "../../../redux/actions/auth";
import AuthlessHomepage from "../../Home";

const Wrapper = (Component) => {
    return () => {
        const is_authenticated = useSelector(
            (state) => state.auth.isAuthenticated
        );
        const user = useSelector((state) => state.auth.user);

        const dispatch = useDispatch();

        useEffect(() => {
            if (dispatch && dispatch !== undefined && dispatch !== null) {
                dispatch(check_auth_status());
            }
        }, []);

        return (
            <>
                {is_authenticated && user ? (
                    <Component />
                ) : (
                    <AuthlessHomepage />
                )}
            </>
        );
    };
};

export default Wrapper;
