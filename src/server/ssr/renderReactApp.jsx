import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../../client/App';

const serverRenderer = () => ReactDOMServer.renderToString(
  <App />,
);

export default serverRenderer;
