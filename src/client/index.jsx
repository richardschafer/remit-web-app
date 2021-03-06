import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { JssProvider } from 'react-jss';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import initializeApolloClient from '../server/ssr/initializeApolloClient';
import App from './App';
import getMuiUtils from '../utils/getMuiUtils';

const client = initializeApolloClient(true);

const { className, theme } = getMuiUtils();

ReactDOM.hydrate(
  <JssProvider generateClassName={className}>
    <MuiThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </MuiThemeProvider>
  </JssProvider>,
  document.getElementById('root'),
);
