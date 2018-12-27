import { createHttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';

import config from '../../config';

// initialize apollo client for SSR data pre-fetching
export default function initializeApolloClient(client = false) {
  return new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: 'https://remember-it-api.herokuapp.com/', // config.GRAPHQL_ENDPOINT_URI,
      // apollo requires node-fetch to fetch data correctly.
      fetch,
    }),
    // eslint-disable-next-line no-underscore-dangle
    cache: client ? new InMemoryCache().restore(window.__APOLLO_STATE__) : new InMemoryCache(),
  });
}
