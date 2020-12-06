import { renderHook } from '@testing-library/react-hooks';
import { useYoutubeVideos } from '../useYoutbeVideos';
import videoMock from '../../../mocks/videoMock.json';

const mockFetch = (mockData) => {
  global.fetch = jest
    .fn()
    .mockImplementation(() => Promise.resolve({ json: () => Promise.resolve(mockData) }));
};

const mockFetchCleanUp = () => {
  global.fetch.mockClear();
  delete global.fetch;
};

describe('useYoutubeVideos', () => {
  beforeAll(() => {
    mockFetch(videoMock);
  });

  afterAll(() => mockFetchCleanUp());

  it('fetch if has not url in memory', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useYoutubeVideos());
    await waitForNextUpdate();
    expect(result.current).toStrictEqual(true);
  });
});
