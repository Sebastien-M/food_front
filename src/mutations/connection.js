export const sign_in_mutation_string = (username, password) => {
    return `mutation{tokenAuth(username:"${username}", password:"${password}"){token}}`
};
