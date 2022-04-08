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

        if (isAuthenticated === false && user === null) {
            if (access === false || access === "") {
                store.dispatch({
                    type: AUTHENTICATION_FAIL,
                });

                if (pathUrl !== "/") {
                    return {
                        redirect: {
                            permanent: false,
                            destination: `/?next=${pathUrl.slice(1)}`,
                        },
                    };
                }
            } else {
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
                            type: AUTHENTICATION_SUCCESS,
                        });
                        store.dispatch({
                            type: LOAD_USER_SUCCESS,
                            payload: data,
                        });
                    } else {
                        store.dispatch({
                            type: AUTHENTICATION_FAIL,
                        });
                        store.dispatch({
                            type: LOAD_USER_FAIL,
                        });
                        if (pathUrl !== "/") {
                            return {
                                redirect: {
                                    permanent: false,
                                    destination: `/?next=${pathUrl.slice(1)}`,
                                },
                            };
                        }
                    }
                } catch (err) {
                    store.dispatch({
                        type: AUTHENTICATION_FAIL,
                    });
                    store.dispatch({
                        type: LOAD_USER_FAIL,
                    });
                    if (pathUrl !== "/") {
                        return {
                            redirect: {
                                permanent: false,
                                destination: `/?next=${pathUrl.slice(1)}`,
                            },
                        };
                    }
                }
            }
        }

        return await gssp(ctx);
    };
};
