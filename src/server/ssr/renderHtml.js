export default function renderHtml(content) {
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

      <script src="/bundle.js" charset="utf-8"></script>
    </body>
    </html>
  `;
}
