const { videos } = require('./videos');

module.exports.searchEndpoint = function (req, res) {
  const { q } = req.params;

  const results = videos.filter((video) => {
    return video.snippet.title.includes(q);
  });

  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify({ items: results }));
};

module.exports.videosEndpoint = function (req, res) {
  const { q } = req.params;

  const results = videos.filter((video) => {
    return q.includes(video.id.videoId);
  });

  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify({ items: results }));
};
