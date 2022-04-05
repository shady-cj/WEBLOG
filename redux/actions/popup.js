import { POPUP_TOGGLE } from "./actionTypes";

export const toggle_popup = (popupState) => ({
    type: POPUP_TOGGLE,
    payload: popupState,
});
