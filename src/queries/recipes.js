export const todays_recipe_query_string = () => {
    return `query{todaysRecipe{recipe{name,steps},quantity,ingredient{name}}}`
};

export const week_menu_query_string = () => {
    return `{weekMenu{day,recipe{id, name}}}`
};

export const get_random_recipe_query_string = () => {
    return `query{randomRecipe{id,name}}`;
};
