// import { data } from './mockdata';

const key = 'put your key here';

const mapVideos = (videosFromService) => {
  const mapped = videosFromService.items
    .filter((item) => item.id.kind === 'youtube#video')
    .map((filteredVideo) => {
      return {
        videoId: filteredVideo.id.videoId,
        title: filteredVideo.snippet.title,
        description: filteredVideo.snippet.description,
        imageUrl: filteredVideo.snippet.thumbnails.medium.url,
      };
    });
  return mapped;
};

const fetchYoutubeVideos = async (searchTerm) => {
  console.log(searchTerm);
  const response = await fetch(
    `https://content-youtube.googleapis.com/youtube/v3/search?part=id&part=snippet&maxResults=25&q=${searchTerm}&key=${key}`
  );
  const data = await response.json();

  return mapVideos(data);
};

export default fetchYoutubeVideos;
