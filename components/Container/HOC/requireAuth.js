import cookie from "cookie";
import { API_URL } from "../../../config";
import {
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAIL,
    LOAD_USER_FAIL,
    LOAD_USER_SUCCESS,
} from "../../../redux/actions/actionTypes";
export const requireAuth = (gssp, store) => {
    return async (ctx) => {
        const { isAuthenticated, user } = store.getState().auth;
        const { resolvedUrl, req } = ctx;
        const cookies = req.headers.cookie && cookie.parse(req.headers.cookie);
        const access = cookies?.access ?? false;

        const pathUrl = resolvedUrl.split("?")[0];
        // console.log(pathUrl);

        if (isAuthenticated === false && user === null) {
            if (access == false) {
                store.dispatch({
                    type: AUTHENTICATION_FAIL,
                });

                if (pathUrl !== "/") {
                    return {
                        redirect: {
                            permanent: false,
                            destination: `/?next=${pathUrl}`,
                        },
                    };
                }
            }
            const body = JSON.stringify({
                token: access,
            });
            try {
                const apiRes = await fetch(`${API_URL}/api/token/verify/`, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body,
                });
                if (apiRes.status === 200) {
                    store.dispatch({
                        type: AUTHENTICATION_SUCCESS,
                    });
                    try {
                        const res = await fetch(`${API_URL}/api/users/user`, {
                            method: "GET",
                            headers: {
                                Access: "application/json",
                                Authorization: `Bearer ${access}`,
                            },
                        });
                        const data = await res.json();
                        if (res.status === 200) {
                            store.dispatch({
                                type: LOAD_USER_SUCCESS,
                                payload: data,
                            });
                        } else {
                            store.dispatch({
                                type: LOAD_USER_FAIL,
                            });
                            if (pathUrl !== "/") {
                                return {
                                    redirect: {
                                        permanent: false,
                                        destination: `/?next=${pathUrl}`,
                                    },
                                };
                            }
                        }
                    } catch (err) {
                        store.dispatch({
                            type: LOAD_USER_FAIL,
                        });
                        if (pathUrl !== "/") {
                            return {
                                redirect: {
                                    permanent: false,
                                    destination: `/?next=${pathUrl}`,
                                },
                            };
                        }
                    }
                } else {
                    store.dispatch({
                        type: AUTHENTICATION_FAIL,
                    });
                    if (pathUrl !== "/") {
                        return {
                            redirect: {
                                permanent: false,
                                destination: `/?next=${pathUrl}`,
                            },
                        };
                    }
                }
            } catch (err) {
                store.dispatch({
                    type: AUTHENTICATION_FAIL,
                });
                if (pathUrl !== "/") {
                    return {
                        redirect: {
                            permanent: false,
                            destination: `/?next=${pathUrl}`,
                        },
                    };
                }
            }
        }

        return await gssp(ctx);
    };
};
