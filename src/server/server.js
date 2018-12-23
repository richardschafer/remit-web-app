import express from 'express';
import config from '../config';
import renderHtml from './ssr/renderHtml';
import renderReactApp from './ssr/renderReactApp';

// init express app.
const app = express();

// serve static files.
app.use(express.static('public'));

app.get('/', (req, res) => {
  const reactApp = renderReactApp();
  const html = renderHtml(reactApp);

  res.send(html);
});

app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`); // eslint-disable-line no-console
});
