// renders react's app in content and sets initial apollo state for store rehydratation
export default function renderHtml(content, initialApolloState) {
  return `
    <!doctype html>

    <html lang="en">
    <head>
      <meta charset="utf-8">
    
      <title>Remit app</title>
    </head>
    
    <body>
      <div id="root">
        ${content}
      </div>

      <script>
        window.__APOLLO_STATE__ = ${JSON.stringify(initialApolloState).replace(/</g, '\\u003c')}
      </script>
      <script src="/app.js" charset="utf-8"></script>
      <script src="/vendor.js" charset="utf-8"></script>
    </body>
    </html>
  `;
}
