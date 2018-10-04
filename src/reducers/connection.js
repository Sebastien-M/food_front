import * as types from "../constants/ActionTypes";

const initialState = {
    token:null,
    email:null,
    first_name:null,
    last_name:null,
    password:null,

};

const connectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_IN:
            console.log(action.token);
            return {
                ...state,
                token: action.token,
            };

        case types.SIGN_UP:
            console.log(action.token);
            return{
                ...state,
                token: action.token,
                email:action.email,
                first_name:action.first_name,
                last_name: action.last_name,
                password: action.password,
            };

        default:
            return state;
    }
};
export default connectionReducer;