import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ApolloProvider } from 'react-apollo';

import { SheetsRegistry } from 'jss';
import { JssProvider } from 'react-jss/';
import { MuiThemeProvider } from '@material-ui/core/styles';

import App from '../../client/App';
import getMuiUtils from '../../utils/getMuiUtils';

const renderReactApp = (client) => {
  const sheetsRegistry = new SheetsRegistry();
  const sheetsManager = new Map();

  const { className, theme } = getMuiUtils();

  const reactHtml = ReactDOMServer.renderToString(
    <JssProvider registry={sheetsRegistry} generateClassName={className}>
      <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </MuiThemeProvider>
    </JssProvider>,
  );

  // Grab the CSS from our sheetsRegistry.
  const css = sheetsRegistry.toString();

  return {
    css,
    reactHtml,
  };
};

export default renderReactApp;
