import {RECIPE_ACTION_TYPES} from "../constants/ActionTypes";

const initialState = {
    todays_recipe: {'name': null, __typename: null}
};

export default function recipes(state = initialState, action) {
    switch (action.type) {
        case RECIPE_ACTION_TYPES.TODAYS_RECIPE:
            return {
                ...state,
                todays_recipe: action.todays_recipe,
            };
        default:
            return state
    }
}