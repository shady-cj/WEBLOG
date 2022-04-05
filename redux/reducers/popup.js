import { POPUP_TOGGLE } from "../actions/actionTypes";

const initialState = {
    state: false,
};

const popupReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case POPUP_TOGGLE:
            return { state: payload };

        default:
            return state;
    }
};

export default popupReducer;
