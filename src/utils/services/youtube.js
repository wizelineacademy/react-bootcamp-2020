// GET OPERATIONS
const getVideos = async (term) => {
  return fetch(
    `${process.env.REACT_APP_YOUTUBE_BASE_URL}/search?q=${term}&key=${process.env.REACT_APP_API_KEY}&part=id&part=snippet&maxResults=25`
  ).then((response) => {
    return response.json();
  });
};

const getRelatedVideos = async (videoId) => {
  return fetch(
    `${process.env.REACT_APP_YOUTUBE_BASE_URL}/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${process.env.REACT_APP_API_KEY}`
  ).then((response) => {
    return response.json();
  });
};

const getVideo = async (idVideo) => {
  return fetch(
    `${process.env.REACT_APP_YOUTUBE_BASE_URL}/videos?id=${idVideo}&key=${process.env.REACT_APP_API_KEY}&part=snippet,statistics`
  ).then((response) => {
    return response.json();
  });
};

export { getVideos, getVideo, getRelatedVideos };
