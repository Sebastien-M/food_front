import {InMemoryCache} from "apollo-cache-inmemory/lib/index";
import {createHttpLink} from "apollo-link-http/lib/index";
import {ApolloClient} from "apollo-client/index";

export function get_new_apollo_client(token){
    const httpLink = createHttpLink({
        uri: 'http://localhost:8081/api/',
        headers: {"Authorization": `JWT ${token}`}
    });

    return new ApolloClient({
        link: httpLink,
        cache: new InMemoryCache()
    });
}
