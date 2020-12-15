import { renderHook } from '@testing-library/react-hooks';
import useFetch from '../hooks/useFetch';

const params = {
  part: 'snippet',
  key: process.env.REACT_APP_YOUTUBE_API_KEY,
  maxResults: 35,
  type: 'video',
  videoSyndicated: 'true',
};

const url = `https://youtube.googleapis.com/youtube/v3/search?part=${params.part}&key=${params.key}&maxResults=${params.maxResults}&type=${params.type}&videoSyndicated=${params.videoSyndicated}&q=wizeline`;

describe('useFetch hook test', () => {
  it('fetch working', () => {
    const { result } = renderHook(() => useFetch(url));
    expect(result.current.data).toBeDefined();
  });
});
