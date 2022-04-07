import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
    ERROR_MESSAGE,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS,
    CHANGE_AUTH_TYPE,
    LOAD_USER_FAIL,
    LOAD_USER_SUCCESS,
    AUTHENTICATION_FAIL,
    AUTHENTICATION_SUCCESS,
} from "./actionTypes";

import { toggle_popup } from "./popup";
export const load_user = () => async (dispatch) => {
    try {
        const res = await fetch("/api/account/user", {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        });
        const data = await res.json();

        if (res.status === 200) {
            dispatch({
                type: LOAD_USER_SUCCESS,
                payload: data,
            });
            dispatch(toggle_popup(false));
        } else {
            dispatch({
                type: LOAD_USER_FAIL,
            });
        }
    } catch (err) {
        dispatch({
            type: LOAD_USER_FAIL,
        });
    }
};

export const change_auth = (auth_type) => ({
    type: CHANGE_AUTH_TYPE,
    payload: auth_type,
});
// export const check_auth_status = () => async (dispatch) => {
//     try {
//         const res = await fetch("/api/account/verify", {
//             method: "GET",
//             headers: {
//                 Accept: "application/json",
//             },
//         });
//         if (res.status === 200) {
//             dispatch({
//                 type: AUTHENTICATION_SUCCESS,
//             });
//             dispatch(load_user());
//         } else {
//             dispatch({
//                 type: AUTHENTICATION_FAIL,
//             });
//         }
//     } catch (err) {
//         dispatch({
//             type: AUTHENTICATION_FAIL,
//         });
//     }
// };
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
                dispatch(login({ username: firstName, password }));
            } else {
                dispatch({
                    type: ERROR_MESSAGE,
                    payload: data.error,
                });
                dispatch({
                    type: REGISTER_FAIL,
                });
                dispatch({
                    type: REMOVE_AUTH_LOADING,
                });
            }
        } catch (err) {
            console.log(err);
            dispatch({
                type: REGISTER_FAIL,
            });
            dispatch({
                type: REMOVE_AUTH_LOADING,
            });
        }
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
                dispatch(load_user());
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

export const logout = () => async (dispatch) => {
    dispatch(toggle_popup(false));

    try {
        const res = await fetch("/api/account/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });

        if (res.status === 200) {
            dispatch({
                type: LOGOUT_SUCCESS,
            });
        } else {
            dispatch({
                type: LOGOUT_FAIL,
            });
        }
    } catch (err) {
        // console.log(err);
        dispatch({
            type: LOGOUT_FAIL,
        });
    }
};
