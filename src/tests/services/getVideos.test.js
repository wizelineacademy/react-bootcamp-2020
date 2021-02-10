import { getVideos } from '../../services/getVideos';

describe('Testing on services/getVideos', () => {
    test('should return array empty when search string is empty', async () => {
        const videos = await getVideos('');
        expect(videos.length).toBe(0);
    });

    test('should return correct array object structure', async () => {
        /// THIS TEST IS COMMENT BECAUSE CONSUME GOOGLE API KEY AND IT CAN
        /// MAKE EXCEED THE DAILY QUOTA SO
        /// IF YOU WANT TO TEST, JUST UNCOMMENT
        // process.env.REACT_APP_GOOGLE_API_KEY = 'AIzaSyAZYBNRYY1E71H10vLse8JnAo5mO2kE3Ak';
        // const videos = await getVideos('wizeline');
        // const objectExample = {
        //     id: 'nmXMgqjQzls',
        //     snippet: {
        //         channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        //         channelTitle: 'Wizeline',
        //         description:
        //             'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
        //         liveBroadcastContent: 'none',
        //         publishTime: '2019-09-30T23:54:32Z',
        //         publishedAt: '2019-09-30T23:54:32Z',
        //         thumbnails: {
        //             default: {
        //                 height: 90,
        //                 url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
        //                 width: 120,
        //             },
        //             high: {
        //                 height: 360,
        //                 url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
        //                 width: 480,
        //             },
        //             medium: {
        //                 height: 180,
        //                 url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
        //                 width: 320,
        //             },
        //         },
        //         title: 'Video Tour | Welcome to Wizeline Guadalajara',
        //     },
        // };
        // expect(videos[1]).toEqual(objectExample);
    });
});
