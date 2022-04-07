import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
    ERROR_MESSAGE,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CHANGE_AUTH_TYPE,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    AUTHENTICATION_SUCCESS,
    AUTHENTICATION_FAIL,
    AUTHENTICATING,
} from "../actions/actionTypes";

const initialState = {
    user: null,
    isAuthenticated: false,
    isAuthenticating: false,
    loading: false,
    authType: "login",
    register_success: false,
    error_message: {
        error: false,
        message: "",
    },
};

const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                register_success: true,
                error_message: { error: false, message: "" },
            };
        case REGISTER_FAIL:
            return { ...state };
        case SET_AUTH_LOADING:
            return { ...state, loading: true };
        case REMOVE_AUTH_LOADING:
            return { ...state, loading: false };
        case ERROR_MESSAGE:
            return {
                ...state,
                error_message: { error: true, message: payload },
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                error_message: { error: false, message: "" },
                register_success: false,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                isAuthenticating: false,
            };

        case LOAD_USER_SUCCESS:
            return { ...state, isAuthenticating: false, user: payload.user };
        case LOAD_USER_FAIL:
            return {
                ...state,
                user: null,
                isAuthenticating: false,
                isAuthenticated: false,
            };

        case LOGOUT_FAIL:
            return { ...state };
        case AUTHENTICATING:
            return { ...state, isAuthenticating: true };
        case CHANGE_AUTH_TYPE:
            return { ...state, authType: payload };
        case AUTHENTICATION_SUCCESS:
            return { ...state, isAuthenticated: true };
        case AUTHENTICATION_FAIL:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                isAuthenticating: false,
            };

        case LOGOUT_SUCCESS:
            return { ...state, isAuthenticated: false, user: null };

        default:
            return state;
    }
};

export default authReducer;
