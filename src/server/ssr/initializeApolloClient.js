import { createHttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';

import config from '../../config';

export default function initializeApolloClient() {
  return new ApolloClient({
    ssrMode: true,
    // Remember that this is the interface the SSR server will use to connect to the
    // API server, so we need to ensure it isn't firewalled, etc
    link: createHttpLink({
      uri: config.GRAPHQL_ENDPOINT_URI,
      credentials: 'same-origin',
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}
