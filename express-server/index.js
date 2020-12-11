const express = require('express');
const path = require('path');
const request = require('request');
const { videos } = require('./videos');

const BUILD_PATH = path.join(`${__dirname}/../build/`);
const API_KEY = process.env.API_KEY || 'MOCK';
const API_URL = `https://youtube.googleapis.com/youtube/v3/search/?key=${API_KEY}&type=video&part=snippet&maxResults=10`;
const PORT = process.env.PORT || 3000;
const app = express();

// Serve the static files from the React app
app.use(express.static(BUILD_PATH));

const youtubeProxy = async (req, res) => {
  const { q } = req.params;

  request(`${API_URL}&q=${q}`).pipe(res);
};

const mock = (req, res) => {
  const { q } = req.params;

  const results = videos.filter((video) => {
    return video.id.videoId.includes(q) || video.snippet.title.includes(q);
  });

  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify({ items: results }));
};

// An api endpoint that returns a short list of items
app.get('/api/:q', API_KEY !== 'MOCK' ? youtubeProxy : mock);

app.get('*', (req, res) => {
  res.sendFile(`${BUILD_PATH}index.html`);
});

app.listen(PORT);

console.log(`App running on http://localhost:${PORT}/`);
