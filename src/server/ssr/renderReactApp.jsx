import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ApolloProvider } from 'react-apollo';

import App from '../../client/App';

const renderReactApp = client => (
  ReactDOMServer.renderToString(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  ));

export default renderReactApp;
