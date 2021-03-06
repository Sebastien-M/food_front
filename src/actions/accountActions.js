import {get_new_apollo_client} from "../ApolloClient";
import {account_info_mutation_string} from "../queries/account";
import gql from 'graphql-tag';
import {ACCOUNT_ACTION_TYPES} from "../constants/ActionTypes";


const setInfoAction = () => {
    return {
        type: ACCOUNT_ACTION_TYPES.SET_USER_INFO,
        email: localStorage.getItem('email'),
        first_name: localStorage.getItem('first_name'),
        last_name: localStorage.getItem('last_name'),
        username: localStorage.getItem('username')
    }
};

const changeTabAction = (tab) => {
    return {
        type: ACCOUNT_ACTION_TYPES.CHANGE_TAB,
        current_tab: tab
    }
};

export const change_tab = (tab) => {
    return (dispatch) => {
        dispatch(changeTabAction(tab))
    }
};

export const account_info = function (token) {
    return (dispatch) => {
        localStorage.setItem('token', token);
        const client = get_new_apollo_client(token);
        client.query({
            query: gql`${account_info_mutation_string()}`
        }).then(
            (response) => {
                let username = response.data.me.username;
                let first_name = response.data.me.firstName;
                let last_name = response.data.me.lastName;
                let email = response.data.me.email;
                localStorage.setItem('username', username);
                localStorage.setItem('first_name', first_name);
                localStorage.setItem('last_name', last_name);
                localStorage.setItem('email', email);
                dispatch(setInfoAction())
            }
        )
    };
};

export const logout = function () {
    return (dispatch) => {
        localStorage.clear();
        window.location.href = '/';
    }
};