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

      <script src="/app.js" charset="utf-8"></script>
      <script src="/vendor.js" charset="utf-8"></script>
    </body>
    </html>
  `;
}
