import client from "../ApolloClient";
import {account_info_mutation_string} from "../mutations/account";
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

export const account_info = function () {
    return (dispatch) => {
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

export const logout = function(){
    return (dispatch) =>{
        localStorage.clear();
        window.location.href='/';
    }
};