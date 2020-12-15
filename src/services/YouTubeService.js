import axios from 'axios';
const KEY = 'AIzaSyCft2VnPsWK0-30DkQhlgUIPuD_Wkin6pQ';
const youtubeApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 15,
    key: KEY,
  },
});

const youtubeApiQuotaExceeded = (searchTerm) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const videos = [
        {
          id: { videoId: 'W0k7yFEL6FY' },
          snippet: {
            title: 'Wizeline 1',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, fugit vitae? Laboriosam omnis facilis, enim quas, explicabo quae quibusdam deleniti eaque tenetur commodi perspiciatis impedit illum soluta iure odit esse.',
            thumbnails: {
              default: {
                url:
                  'https://i.ytimg.com/vi/W0k7yFEL6FY/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDrmfw7rqZeYIdSsBxt_C3qNCFboQ',
              },
            },
          },
        },
        {
          id: { videoId: 'Po3VwR_NNGk' },
          snippet: {
            title: 'Wizeline 2',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, fugit vitae? Laboriosam omnis facilis, enim quas, explicabo quae quibusdam deleniti eaque tenetur commodi perspiciatis impedit illum soluta iure odit esse.',
            thumbnails: {
              default: {
                url:
                  'https://i.ytimg.com/vi/Po3VwR_NNGk/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBLy_DdepqJIDW7r0NSC-DjkLRFqA',
              },
            },
          },
        },
        {
          id: { videoId: 'nmXMgqjQzls' },
          snippet: {
            title: 'Wizeline 3',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, fugit vitae? Laboriosam omnis facilis, enim quas, explicabo quae quibusdam deleniti eaque tenetur commodi perspiciatis impedit illum soluta iure odit esse.',
            thumbnails: {
              default: {
                url:
                  'https://i.ytimg.com/vi/nmXMgqjQzls/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCjjE4wKtITJ4Dq7qwHyd3XoctXtw',
              },
            },
          },
        },
      ];

      const regex = new RegExp(searchTerm, 'gi');
      const filteredVideos = videos.filter((item) => item.snippet.title.match(regex));
      const response = {
        data: {
          items: filteredVideos,
        },
      };
      resolve(response);
    }, 500);
  });
};

export { youtubeApi, youtubeApiQuotaExceeded };
