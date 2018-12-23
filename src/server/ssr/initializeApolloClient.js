import { createHttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';

import config from '../../config';

// initialize apollo client for SSR data pre-fetching
export default function initializeApolloClient() {
  return new ApolloClient({
    ssrMode: true,
    link: createHttpLink({
      uri: config.GRAPHQL_ENDPOINT_URI,
      // apollo requires node-fetch to fetch data correctly.
      fetch,
    }),
    cache: new InMemoryCache(),
  });
}
