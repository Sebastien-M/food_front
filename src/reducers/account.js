import {ACCOUNT_ACTION_TYPES} from "../constants/ActionTypes";
import {get_new_apollo_client} from "../ApolloClient";

const initialState = {
    first_name: localStorage.getItem('first_name'),
    last_name: localStorage.getItem('last_name'),
    username: localStorage.getItem('username'),
    email: localStorage.getItem('email'),
    client: get_new_apollo_client(localStorage.getItem('token')),
    current_tab: 'Home',
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
            return{
                ...state,
                first_name: action.first_name,
                last_name: action.last_name,
                username: action.username,
                email: action.email,
            };
        case ACCOUNT_ACTION_TYPES.CHANGE_TAB:
            return{
                ...state,
                current_tab: action.current_tab,
            };
        default:
            return state;
    }
};
