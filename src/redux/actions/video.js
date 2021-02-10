import { types } from '../types/types';

export const searchVideosTextTrigger = (searchVideosText) => ({
    type: types.searchVideos,
    payload: {
        searchVideosText,
    },
});

export const videoSelected = (videoSelected) => ({
    type: types.videoSelected,
    payload: {
        videoSelected,
    },
});

export const addVideoFavorite = (videoSelected) => ({
    type: types.addVideoFavorite,
    payload: {
        videoSelected,
    },
});
