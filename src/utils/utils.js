/* eslint-disable */
export const getIdx = (arr, match) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id.videoId === match) {
      return i;
    }
  }
};
