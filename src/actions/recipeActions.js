import gql from 'graphql-tag';
import {
    get_random_recipe_query_string, todays_recipe_query_string,
    week_menu_query_string
} from "../queries/recipes";
import {RECIPE_ACTION_TYPES} from "../constants/ActionTypes";
import {set_daily_recipe_mutation_string} from "../mutations/recipes";
import {
    get_shopping_list_query_string, initialize_shopping_list_query_string,
    remove_shopping_list_item
} from "../queries/shopping_list";

const getTodaysRecipeAction = (todays_recipe) => {
    return {
        type: RECIPE_ACTION_TYPES.TODAYS_RECIPE,
        todays_recipe: todays_recipe
    }
};

const getWeekMenuAction = (week_menu) => {
    return {
        type: RECIPE_ACTION_TYPES.WEEK_MENU,
        week_menu: week_menu
    }
};

export const getRecipeSuggestionAction = (daily_recipe) => {
    return {
        type: RECIPE_ACTION_TYPES.GET_RECIPE_SUGGESTION,
        recipe: daily_recipe
    }
};

export const setChosenDayAction = (day) => {
    return {
        type: RECIPE_ACTION_TYPES.SET_CHOSEN_DAY,
        day: day
    }
};

export const getShoppingListAction = (shopping_list) => {
    return {
        type: RECIPE_ACTION_TYPES.GET_SHOPPING_LIST,
        shopping_list: shopping_list
    }
};

export const getTodaysRecipe = function (client) {
    return (dispatch) => {
        client.query({
            query: gql`${todays_recipe_query_string()}`,
            fetchPolicy: 'no-cache'
        }).then(
            (response) => {
                if (response.data.todaysRecipe[0]) {
                    dispatch(getTodaysRecipeAction(response.data.todaysRecipe))
                }
            }
        ).catch(err => {
            console.log('Pas de recette pour aujourd\'hui');
        })
    }
};

export const getWeekMenu = function (client) {
    return (dispatch) => {
        client.query({
            query: gql`${week_menu_query_string()}`,
            fetchPolicy: 'no-cache'
        }).then(
            (response) => {
                dispatch(getWeekMenuAction(response.data))
            }
        ).catch(err => {
            console.log('Menu non défini');
        })
    }
};

export const getRecipeSuggestion = (client) => {
    return (dispatch) => {
        client.query({
            query: gql`${get_random_recipe_query_string()}`,
            fetchPolicy: 'no-cache'
        }).then(
            (response) => {
                dispatch(getRecipeSuggestionAction(response.data.randomRecipe));
            }
        ).catch(err => {
            console.log('An error occurred when getting a recipe');
        })
    }
};

export const getShoppingList = (client) => {
    return (dispatch) => {
        client.query({
            query: gql`${get_shopping_list_query_string()}`,
            fetchPolicy: 'no-cache'
        }).then(
            (response) => {
                dispatch(this.getShoppingListAction(response.data.shoppingList))
            }
        ).catch(err => {
            console.log(err)
        })
    }
};

export const initializeShoppingList = (client) => {
    return (dispatch) => {
        client.query({
            query: gql`${initialize_shopping_list_query_string()}`,
            fetchPolicy: 'no-cache'
        }).then(
            setTimeout(() => {
                dispatch(getShoppingList(client))
            }, 100)
        ).catch(err => {
            console.log('Can not initialize shopping list');
        })
    }
};

export const setDailyRecipe = (client, email, recipe_id, day) => {
    return (dispatch) => {
        client.mutate({
            mutation: gql`${set_daily_recipe_mutation_string(email, recipe_id, day)}`,
            fetchPolicy: 'no-cache'
        }).then(
            (response) => {
            }).catch(err => {
            console.log(err);
        })
    }
};

export const setChosenDay = (day) => {
    return (dispatch) => {
        dispatch(setChosenDayAction(day))
    }
};

export const removeShoppingListItem = (client, item_id) => {
    return (dispatch) => {
        client.mutate({
            mutation: gql`${remove_shopping_list_item(item_id)}`
        }).then(
            setTimeout(() => {
                dispatch(getShoppingList(client))
            }, 100)
        ).catch(err => {
            console.log('An error occurred while removing element from shopping list')
        })
    }
};
