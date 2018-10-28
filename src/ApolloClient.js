import {InMemoryCache} from "apollo-cache-inmemory/lib/index";
import {createHttpLink} from "apollo-link-http/lib/index";
import {ApolloClient} from "apollo-client/index";

const httpLink = createHttpLink({
    uri: 'http://localhost:8081/api/',
    headers: {"Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InNlYjIiLCJleHAiOjE1NDAyMDAwNzYsIm9yaWdfaWF0IjoxNTQwMTk5Nzc2fQ.eVxmHSCbAy-Ur-wZISsE4M5QyyowQGnjTGeNkjXF4_g"}
});

export default new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});