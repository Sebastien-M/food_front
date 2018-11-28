import {RECIPE_ACTION_TYPES} from "../constants/ActionTypes";
import {week_menu_example} from "./utils";

const initialState = {
    todays_recipe: {
        0: {
            ingredient:{
                name: null
            },
            recipe: {
                name: null,
                steps: null
            },
            quantity: null
        }
    },
    shopping_list: [{"ingredient": null, "quantity": null}],
    week_menu: {week_menu_example},
    recipe_suggestion: {'name': null, __typename: null},
    chosen_day: null,

};

export default function recipes(state = initialState, action) {
    switch (action.type) {
        case RECIPE_ACTION_TYPES.TODAYS_RECIPE:
            return {
                ...state,
                todays_recipe: action.todays_recipe,
            };
        case RECIPE_ACTION_TYPES.WEEK_MENU:
            return {
                ...state,
                week_menu: action.week_menu,
            };
        case RECIPE_ACTION_TYPES.GET_RECIPE_SUGGESTION:
            return {
                ...state,
                recipe_suggestion: action.recipe,
            };
        case RECIPE_ACTION_TYPES.SET_CHOSEN_DAY:
            return {
                ...state,
                chosen_day: action.day,
            };
        case RECIPE_ACTION_TYPES.GET_SHOPPING_LIST:
            return {
                ...state,
                shopping_list: action.shopping_list
            };
        default:
            return state
    }
}