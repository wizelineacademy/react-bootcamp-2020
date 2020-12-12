const express = require('express');
const path = require('path');
const endpoints = process.env.API_KEY ? require('./youtube') : require('./mock');

const BUILD_PATH = path.join(`${__dirname}/../build/`);
const PORT = process.env.PORT || 3000;
const app = express();

// Serve the static files from the React app
app.use(express.static(BUILD_PATH));

// An api endpoint that returns a short list of items
app.get('/api/search/:query', endpoints.searchEndpoint);
app.get('/api/videos/:videoIds', endpoints.videosEndpoint);

app.get('*', (req, res) => {
  res.sendFile(`${BUILD_PATH}index.html`);
});

app.listen(PORT);

console.log(`App running on http://localhost:${PORT}/`);
