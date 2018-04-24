import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

export const client = new ApolloClient({
    // By default, this client will send queries to the
    //  `/graphql` endpoint on the same host
    // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
    // to a different host
    cache: new InMemoryCache(),
    connectToDevTools: true,
    link: new HttpLink({ uri: 'https://api.graphcms.com/simple/v1/cjgdru4lq8bga0130mj3hka3z' }),
});


ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
