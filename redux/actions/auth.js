import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
    ERROR_MESSAGE,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CHANGE_AUTH_TYPE,
} from "./actionTypes";

export const change_auth = (auth_type) => ({
    type: CHANGE_AUTH_TYPE,
    payload: auth_type,
});
export const register =
    ({ firstName, lastName, password }) =>
    async (dispatch) => {
        const body = JSON.stringify({
            firstName,
            lastName,
            password,
        });

        dispatch({
            type: SET_AUTH_LOADING,
        });
        try {
            const res = await fetch("/api/account/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body,
            });
            const data = await res.json();

            if (res.status === 201) {
                dispatch({
                    type: REGISTER_SUCCESS,
                });
            } else {
                dispatch({
                    type: ERROR_MESSAGE,
                    payload: data.error,
                });
                dispatch({
                    type: REGISTER_FAIL,
                });
            }
        } catch (err) {
            console.log(err);
            dispatch({
                type: REGISTER_FAIL,
            });
        }
        dispatch({
            type: REMOVE_AUTH_LOADING,
        });
    };

export const login =
    ({ username, password }) =>
    async (dispatch) => {
        const body = JSON.stringify({
            username,
            password,
        });

        dispatch({
            type: SET_AUTH_LOADING,
        });
        try {
            const res = await fetch("/api/account/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body,
            });
            const data = await res.json();

            if (res.status === 200) {
                dispatch({
                    type: LOGIN_SUCCESS,
                });
            } else {
                dispatch({
                    type: ERROR_MESSAGE,
                    payload: data.error,
                });
                dispatch({
                    type: LOGIN_FAIL,
                });
            }
        } catch (err) {
            // console.log(err);
            dispatch({
                type: LOGIN_FAIL,
            });
        }
        dispatch({
            type: REMOVE_AUTH_LOADING,
        });
    };
