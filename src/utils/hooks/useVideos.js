import { useState, useEffect } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;

const API_URL = `https://www.googleapis.com/youtube/v3/search?&type=video&part=id,snippet&maxResults=5&key=${API_KEY}`;

function useVideos({ a = 'wizeline' }) {
  const [videos, setVideos] = useState(null);
  const [search] = useState(a);

  useEffect(() => {
    async function findVideos() {
      try {
        const response = await fetch(`${API_URL}&q=${search}`);
        const videosMock = {
          kind: 'youtube#searchListResponse',
          etag: 'U6ERlMibxfMmMNVXNZT-CXzciAc',
          nextPageToken: 'CAUQAA',
          regionCode: 'MX',
          pageInfo: { totalResults: 1000000, resultsPerPage: 5 },
          items: [
            {
              kind: 'youtube#searchResult',
              etag: 'MPQxrVDGzwPyHAhhqXcljF2Vd9o',
              id: { kind: 'youtube#video', videoId: 'A_MjCqQoLLA' },
              snippet: {
                publishedAt: '2015-12-07T08:00:00Z',
                channelId: 'UC4dqLAF7yT-_DqeYisQ001w',
                title: 'The Beatles - Hey Jude',
                description:
                  'The Beatles 1 Video Collection is out now. Available on: http://www.thebeatles.com/ Hey Jude topped the charts in Britain for two weeks and for 9 weeks in ...',
                thumbnails: {
                  default: {
                    url: 'https://i.ytimg.com/vi/A_MjCqQoLLA/default.jpg',
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: 'https://i.ytimg.com/vi/A_MjCqQoLLA/mqdefault.jpg',
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: 'https://i.ytimg.com/vi/A_MjCqQoLLA/hqdefault.jpg',
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: 'TheBeatlesVEVO',
                liveBroadcastContent: 'none',
                publishTime: '2015-12-07T08:00:00Z',
              },
            },
            {
              kind: 'youtube#searchResult',
              etag: 'c74_BofJknDHsZeWSLZiN047s8I',
              id: { kind: 'youtube#video', videoId: 'mQER0A0ej0M' },
              snippet: {
                publishedAt: '2018-06-17T11:17:26Z',
                channelId: 'UC2XdaAVUannpujzv32jcouQ',
                title: 'Hey Jude (Remastered 2015)',
                description:
                  'Provided to YouTube by Universal Music Group Hey Jude (Remastered 2015) · The Beatles 1 ℗ 2015 Calderstone Productions Limited (a division of Universal ...',
                thumbnails: {
                  default: {
                    url: 'https://i.ytimg.com/vi/mQER0A0ej0M/default.jpg',
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: 'https://i.ytimg.com/vi/mQER0A0ej0M/mqdefault.jpg',
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: 'https://i.ytimg.com/vi/mQER0A0ej0M/hqdefault.jpg',
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: 'The Beatles - Topic',
                liveBroadcastContent: 'none',
                publishTime: '2018-06-17T11:17:26Z',
              },
            },
            {
              kind: 'youtube#searchResult',
              etag: '-nbm1JEF-iZgtXL7_YNaBizOnIo',
              id: { kind: 'youtube#video', videoId: '7qMls5yxP1w' },
              snippet: {
                publishedAt: '2019-11-11T10:01:43Z',
                channelId: 'UCtzxaVt1QMVjoSWInW3ta6g',
                title: 'Hey Jude - THE BEATLES (Lyrics)',
                description:
                  "Please Subscribe my Channel and hit the notification bell so you won't miss anything #Jahlove #TheBEATLES #GOLDSNAFUtoMigsVillamor Disclaimer ...",
                thumbnails: {
                  default: {
                    url: 'https://i.ytimg.com/vi/7qMls5yxP1w/default.jpg',
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: 'https://i.ytimg.com/vi/7qMls5yxP1w/mqdefault.jpg',
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: 'https://i.ytimg.com/vi/7qMls5yxP1w/hqdefault.jpg',
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: 'Migs Villamor',
                liveBroadcastContent: 'none',
                publishTime: '2019-11-11T10:01:43Z',
              },
            },
            {
              kind: 'youtube#searchResult',
              etag: 'dmLMSxRkYPjDMdNaxKGKRQPbF0g',
              id: { kind: 'youtube#video', videoId: 'tRnFHfI7WAQ' },
              snippet: {
                publishedAt: '2013-12-16T00:33:10Z',
                channelId: 'UCdJRrMknSZVwnNNpVS5CpWw',
                title: 'Paul McCartney - Hey Jude Live at Hyde Park',
                description:
                  'Sir Paul McCartney performing Hey Jude at the 2010 Hard Rock Calling from Hyde Park in London.',
                thumbnails: {
                  default: {
                    url: 'https://i.ytimg.com/vi/tRnFHfI7WAQ/default.jpg',
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: 'https://i.ytimg.com/vi/tRnFHfI7WAQ/mqdefault.jpg',
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: 'https://i.ytimg.com/vi/tRnFHfI7WAQ/hqdefault.jpg',
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: 'Video & Music Clips',
                liveBroadcastContent: 'none',
                publishTime: '2013-12-16T00:33:10Z',
              },
            },
            {
              kind: 'youtube#searchResult',
              etag: 'czRcmmAa7hNtXL3Yk60p05PJF9o',
              id: { kind: 'youtube#video', videoId: 'bkApuQWCPdM' },
              snippet: {
                publishedAt: '2018-06-17T11:17:18Z',
                channelId: 'UC2XdaAVUannpujzv32jcouQ',
                title: 'Hey Jude (Remastered 2009)',
                description:
                  'Provided to YouTube by Universal Music Group Hey Jude (Remastered 2009) · The Beatles The Beatles 1967 - 1970 ℗ 2009 Calderstone Productions Limited ...',
                thumbnails: {
                  default: {
                    url: 'https://i.ytimg.com/vi/bkApuQWCPdM/default.jpg',
                    width: 120,
                    height: 90,
                  },
                  medium: {
                    url: 'https://i.ytimg.com/vi/bkApuQWCPdM/mqdefault.jpg',
                    width: 320,
                    height: 180,
                  },
                  high: {
                    url: 'https://i.ytimg.com/vi/bkApuQWCPdM/hqdefault.jpg',
                    width: 480,
                    height: 360,
                  },
                },
                channelTitle: 'The Beatles - Topic',
                liveBroadcastContent: 'none',
                publishTime: '2018-06-17T11:17:18Z',
              },
            },
          ],
        };
        const videosResponse = await response.json();
        setVideos(videosResponse.items ? videosResponse : videosMock);
        console.log('Yo debo de ser el cmapo de texto');
      } catch (error) {
        console.error('Bad fetch videos: ', error);
      }
    }

    findVideos();
  }, [search]);

  return { videos };
}

export { useVideos };
