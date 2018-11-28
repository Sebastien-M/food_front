export const set_daily_recipe_mutation_string = (email, recipe_id, day) => {
    return `mutation{
              addRecipe(userEmail:"${email}", recipeId:"${recipe_id}", date:"${day}"){
                dailyRecipe{
                  recipe{
                    name
                  }
                }
              }
            }`
};
