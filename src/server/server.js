import express from 'express';
import { renderToStringWithData } from 'react-apollo';
import config from '../config';
import renderHtml from './ssr/renderHtml';
import renderReactApp from './ssr/renderReactApp';
import initializeApolloClient from './ssr/initializeApolloClient';

// init express app.
const app = express();

// serve static files.
app.use(express.static('public'));

app.get('/', async (req, res) => {
  res.set('Content-Type', 'text/html');

  const apolloClient = initializeApolloClient();
  const { css, reactHtml } = renderReactApp(apolloClient);
  const content = await renderToStringWithData(reactHtml);
  const initialApolloState = apolloClient.extract();

  const html = renderHtml(content, initialApolloState, css);

  res.send(html);
});

app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`); // eslint-disable-line no-console
});
