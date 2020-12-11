import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import videoMock from '../../../mocks/videoMock.json';
import { useRelatedVideos } from '../useRelatedVideos';
import AppDataProvider from '../../../providers/AppData';

describe('useRelatedVideos', () => {
  const mockFetch = (mockData) => {
    global.fetch = jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ json: () => Promise.resolve(mockData) })
      );
  };

  const mockFetchCleanUp = () => {
    global.fetch.mockClear();
    delete global.fetch;
  };

  beforeAll(() => {
    mockFetch(videoMock);
  });

  afterAll(() => mockFetchCleanUp());

  it('it fetch data if not already on video list or cache', async () => {
    const wrapper = ({ children }) => <AppDataProvider>{children}</AppDataProvider>;
    const anyId = 'anyid';
    const { result, waitForNextUpdate } = renderHook(() => useRelatedVideos(anyId), {
      wrapper,
    });
    await waitForNextUpdate();
    expect(result.current).toStrictEqual(true);
  });
});
