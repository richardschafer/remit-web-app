// renders react's app in content and sets initial apollo state for store rehydratation
export default function renderHtml(content, initialApolloState) {
  return `
    <!doctype html>

    <html lang="en">
    <head>
      <meta charset="utf-8">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    
      <title>Remit app</title>
      <style>
          /* http://meyerweb.com/eric/tools/css/reset/ 
          v2.0 | 20110126
          License: none (public domain)
          */
          
          html, body, div, span, applet, object, iframe,
          h1, h2, h3, h4, h5, h6, p, blockquote, pre,
          a, abbr, acronym, address, big, cite, code,
          del, dfn, em, img, ins, kbd, q, s, samp,
          small, strike, strong, sub, sup, tt, var,
          b, u, i, center,
          dl, dt, dd, ol, ul, li,
          fieldset, form, label, legend,
          table, caption, tbody, tfoot, thead, tr, th, td,
          article, aside, canvas, details, embed, 
          figure, figcaption, footer, header, hgroup, 
          menu, nav, output, ruby, section, summary,
          time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
          }
          /* HTML5 display-role reset for older browsers */
          article, aside, details, figcaption, figure, 
          footer, header, hgroup, menu, nav, section {
            display: block;
          }
          body {
            line-height: 1;
          }
          ol, ul {
            list-style: none;
          }
          blockquote, q {
            quotes: none;
          }
          blockquote:before, blockquote:after,
          q:before, q:after {
            content: '';
            content: none;
          }
          table {
            border-collapse: collapse;
            border-spacing: 0;
          }
        </style>
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
