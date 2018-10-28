import {ACCOUNT_ACTION_TYPES} from "../constants/ActionTypes";

const initialState = {
    first_name: localStorage.getItem('first_name'),
    last_name: localStorage.getItem('last_name'),
    username: localStorage.getItem('username'),
    email: localStorage.getItem('email'),
};

export default function account(state = initialState, action) {
    switch (action.type) {
        case ACCOUNT_ACTION_TYPES.GET_USER_INFO:
            return {
                ...state,
                first_name: action.first_name,
                last_name: action.last_name,
                email: action.email
            };
        case ACCOUNT_ACTION_TYPES.SET_USER_INFO:
            console.log(action);
            return{
                ...state,
                first_name: action.first_name,
                last_name: action.last_name,
                username: action.username,
                email: action.email,
            };
        default:
            return state;
    }
};
