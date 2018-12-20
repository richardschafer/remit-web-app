import express from 'express';
import config from './config';
import renderHtml from './views';

// init express app.
const app = express();

// serve static files.
app.use(express.static('public'));

app.get('/', (req, res) => {
  const html = renderHtml();

  res.send(html);
});

app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`); // eslint-disable-line no-console
});
