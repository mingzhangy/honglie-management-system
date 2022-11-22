var express = require('express');
var path = require('path');
var app = express();
const { createProxyMiddleware: proxy } = require('http-proxy-middleware');

app.use(express.static(path.join(__dirname, '../dist')));
app.use(
  '/api',
  proxy({
    target: 'https://proapi.azurewebsites.net',
    changeOrigin: true,
    pathRewrite: { '^': '' },
  }),
);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
  // res.sendFile(path.join(__dirname), 'dist/index.html')
});

let port = 80;
app.listen(port, () => {
  console.log(`Server listening on http://localhost::${port}, Ctrl+C to stop`);
});
