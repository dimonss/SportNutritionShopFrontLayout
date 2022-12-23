import config from "../../config";
import {SET_STATE_VERSION} from "../actionTypes/appAT";

const initialState = {
    stateVersion: config.stateVersion,
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATE_VERSION:
            return { ...state, stateVersion: action.payload };
        default:
            return state;
    }
};
