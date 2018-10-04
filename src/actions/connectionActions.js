import {SIGN_UP, SIGN_IN} from "../constants/ActionTypes";


export const loginAction = (email, password) => {
    return {type: SIGN_IN, token:'token_here'};
};

export const login = function (email, password) {
    return (dispatch) => {
        dispatch(loginAction('seb2','123'));
    }
};