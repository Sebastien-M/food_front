import {CONNECTION_ACTION_TYPES} from "../constants/ActionTypes";
import gql from 'graphql-tag';
import {get_new_apollo_client} from "../ApolloClient";
import {sign_in_mutation_string} from "../mutations/connection";
import {sign_up_mutation_string} from "../mutations/sign_up";
import {account_info} from "./accountActions";

const client = get_new_apollo_client('');

const loginAction = (token, is_connected) => {
    return {type: CONNECTION_ACTION_TYPES.SIGN_IN, token: token, is_connected: is_connected, loading: true};
};
// const logoutAction = () => {
//     return {type: CONNECTION_ACTION_TYPES.LOG_OUT}
// };
const loadingActionStart = () => {
    return {type: CONNECTION_ACTION_TYPES.LOADING_START}
};

const loadingEndActionEnd = () => {
    return {type: CONNECTION_ACTION_TYPES.LOADING_END}
};

export const login = function (username, password) {
    return (dispatch) => {
        dispatch(loadingActionStart());
        client.mutate({
            mutation: gql`${sign_in_mutation_string(username, password)}`
        }).then(
            (response) => {
                let token = response.data.tokenAuth.token;
                dispatch(account_info(token));
                dispatch(loginAction(token, true));
                localStorage.setItem('token', token);
                dispatch(loadingEndActionEnd());
                window.location.href='/';
            }
        ).catch(err => {
            dispatch(loginAction(null, false));
            localStorage.setItem('token', null);
            dispatch(loadingEndActionEnd());
        });
    }
};


export const sign_up = function (email, username, password, first_name, last_name) {
    return (dispatch) => {
        dispatch(loadingActionStart());
        client.mutate({mutation: gql`${sign_up_mutation_string(email, username, password, first_name, last_name)}`})
            .then((response) => {
                dispatch(login(response.data.createUser.username, password));
            })
            .catch(err => {
                dispatch(loginAction(null, false));
                localStorage.setItem('token', null);
                dispatch(loadingEndActionEnd());
                window.location.href='/';
            });
    }
};