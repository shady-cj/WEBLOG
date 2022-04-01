import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    SET_AUTH_LOADING,
    REMOVE_AUTH_LOADING,
    ERROR_MESSAGE,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CHANGE_AUTH_TYPE,
} from "../actions/actionTypes";

const initialState = {
    user: null,
    isAuthenticated: false,
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
            };
        case LOGIN_FAIL:
            return { ...state, isAuthenticated: false };
        case CHANGE_AUTH_TYPE:
            return { ...state, authType: payload };
        default:
            return state;
    }
};

export default authReducer;
