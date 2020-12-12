const { videos } = require('./videos');

module.exports.searchEndpoint = function (req, res) {
  const { query } = req.params;

  const results = videos.filter((video) => {
    return video.snippet.title.includes(query);
  });

  console.log('response:', results);
  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify({ items: results }));
};

module.exports.videosEndpoint = function (req, res) {
  const { videoIds } = req.params;

  const results = videos.filter((video) => {
    return videoIds.includes(video.id.videoId);
  });

  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify({ items: results }));
};
