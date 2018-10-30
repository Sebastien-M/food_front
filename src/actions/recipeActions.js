import gql from 'graphql-tag';
import {todays_recipe_query_string} from "../queries/recipes";
import {RECIPE_ACTION_TYPES} from "../constants/ActionTypes";

const getTodaysRecipeAction = (todays_recipe) =>{
    return{
        type: RECIPE_ACTION_TYPES.TODAYS_RECIPE,
        todays_recipe: todays_recipe
    }
};

export const getTodaysRecipe = function (client) {
    return (dispatch) => {
        client.query({
            query: gql`${todays_recipe_query_string()}`
        }).then(
            (response) => {
                dispatch(getTodaysRecipeAction(response.data.todaysRecipe))
            }
        )
    }
};