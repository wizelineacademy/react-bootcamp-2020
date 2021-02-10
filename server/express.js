const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get(/\.(js|css|map|ico)$/, express.static(path.resolve(__dirname, '../build')));

app.use('*', (req, res) => {
  const indexHTML = fs.readFileSync(path.resolve(__dirname, '../build/index.html'), {
    encoding: 'utf8',
  });

  res.contentType('text/html');
  res.status(200);

  return res.send(indexHTML);
});

app.listen('9000', () => {
  console.log('Express server started at http://localhost:9000');
});
