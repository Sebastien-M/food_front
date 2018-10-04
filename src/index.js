import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';
import {ApolloProvider} from 'react-apollo'
import {ApolloClient} from 'apollo-client'
import {createHttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import store from "./store";

const httpLink = createHttpLink({
    uri: 'http://localhost:8081/api/'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});


ReactDOM.render(
    <ApolloProvider client={client} store={store}>
        <App {...this.props}/>
    </ApolloProvider>,
    document.getElementById('root')
);
registerServiceWorker();
