import { data } from './mockdata';

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

const fetchYoutubeVideos = (searchTerm) => {
  console.log(`fetching ${searchTerm}`);
  return mapVideos(data);
};

// const useFetch = (uri, searchTerm) => {
//   const [fetchedVideos, setFetchedVideos] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         setLoading(true);
//         // const response = await fetch(uri);
//         // const data = await response.json();

//         // setFetchedVideos(data.results);
//         const found = videosMock.filter((x) => x.searchTerm === searchTerm);
//         setFetchedVideos(found);

//         setLoading(false);
//       } catch (e) {
//         setLoading(false);
//       }
//     };

//     fetchVideos();
//   }, [searchTerm]);

//   return { fetchedVideos, loading };
// };

export default fetchYoutubeVideos;
