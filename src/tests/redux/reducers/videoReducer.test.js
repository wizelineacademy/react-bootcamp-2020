import { videoReducer } from '../../../redux/reducers/videoReducer';
import { types } from '../../../redux/types/types';

describe('Testing on redux/reducers/videoReducer', () => {
    test('Types.searchVideos should edit searchVideos with search string', () => {
        const initState = {
            searchVideosText: '',
            videoSelected: null,
            favoriteVideos: [],
        };

        const action = {
            type: types.searchVideos,
            payload: {
                searchVideosText: 'wizeline',
            },
        };

        const state = videoReducer(initState, action);

        expect(state).toHaveProperty('searchVideosText', 'wizeline');
    });
    test('Types.videoSelected should insert videoObject on videoSelected', () => {
        const initState = {
            searchVideosText: '',
            videoSelected: null,
            favoriteVideos: [],
        };

        const videoSelectedObject = {
            id: 'nmXMgqjQzls',
            snippet: {
                channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
                channelTitle: 'Wizeline',
                description:
                    'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
                liveBroadcastContent: 'none',
                publishTime: '2019-09-30T23:54:32Z',
                publishedAt: '2019-09-30T23:54:32Z',
                thumbnails: {
                    default: {
                        height: 90,
                        url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
                        width: 120,
                    },
                    high: {
                        height: 360,
                        url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
                        width: 480,
                    },
                    medium: {
                        height: 180,
                        url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
                        width: 320,
                    },
                },
                title: 'Video Tour | Welcome to Wizeline Guadalajara',
            },
        };

        const action = {
            type: types.videoSelected,
            payload: {
                videoSelected: videoSelectedObject,
            },
        };

        const state = videoReducer(initState, action);

        expect(state.videoSelected).toStrictEqual(videoSelectedObject);
    });
    test('Types.addVideoFavorite should insert videoObject on favorite videos array', () => {
        const initState = {
            searchVideosText: '',
            videoSelected: null,
            favoriteVideos: [],
        };

        const videoSelectedObject = {
            id: 'nmXMgqjQzls',
            snippet: {
                channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
                channelTitle: 'Wizeline',
                description:
                    'Follow Hector Padilla, Wizeline Director of Engineering, for a lively tour of our office. In 2018, Wizeline opened its stunning new office in Guadalajara, Jalisco, ...',
                liveBroadcastContent: 'none',
                publishTime: '2019-09-30T23:54:32Z',
                publishedAt: '2019-09-30T23:54:32Z',
                thumbnails: {
                    default: {
                        height: 90,
                        url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
                        width: 120,
                    },
                    high: {
                        height: 360,
                        url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
                        width: 480,
                    },
                    medium: {
                        height: 180,
                        url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
                        width: 320,
                    },
                },
                title: 'Video Tour | Welcome to Wizeline Guadalajara',
            },
        };

        const action = {
            type: types.addVideoFavorite,
            payload: {
                videoSelected: videoSelectedObject,
            },
        };

        const state = videoReducer(initState, action);

        expect(state.favoriteVideos.length).toBe(1);
        expect(state.favoriteVideos[0]).toStrictEqual(videoSelectedObject);
    });
});
