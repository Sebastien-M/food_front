import {CONNECTION_ACTION_TYPES} from "../constants/ActionTypes";

const initialState = {
    token: null,
    username: null,
    is_connected: localStorage.getItem('token') != null,
    loading: false,
};

export default function connection (state = initialState, action) {
    switch (action.type) {
        case CONNECTION_ACTION_TYPES.SIGN_IN:
            return {
                ...state,
                token: action.token,
                loading: action.loading,
                is_connected: action.is_connected
            };
        case CONNECTION_ACTION_TYPES.LOADING_START:
            return {
                ...state,
                loading: true
            };
        case CONNECTION_ACTION_TYPES.LOADING_END:
            return {
                ...state,
                loading: false
            };
        case CONNECTION_ACTION_TYPES.LOG_OUT:
            return{
                ...state,
                is_connected: false
            };
        default:
            return state;
    }
};
