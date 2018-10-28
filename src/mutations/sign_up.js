export const sign_up_mutation_string = (email, username, password, first_name, last_name) => {
    return `
    mutation{createUser(email:"${email}",username:"${username}", password:"${password}", firstName:"${first_name}", lastName:"${last_name}"){
        user{username,}
    }}`
};
