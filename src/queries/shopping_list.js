export const initialize_shopping_list_query_string = () => {
    return `query{setInitialShoppinglist}`;
};

export const get_shopping_list_query_string = () => {
    return `query{shoppingList{ingredient,quantity,id}}`;
};

export const remove_shopping_list_item = (item_id) => {
    return `mutation{removeShoppingListItem(itemId:${item_id}){result}}`
};