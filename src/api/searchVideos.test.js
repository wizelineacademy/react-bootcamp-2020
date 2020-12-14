import { videos } from '../constants/mock';
import { searchVideos } from './searchVideos';

const constants = require('../constants');

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        items: ['mocked'],
      }),
  })
);

describe('searchVideos', () => {
  it('returns videos', async () => {
    const expected = videos.filter((v) =>
      v.snippet.title.includes(constants.INITIAL_QUERY)
    );

    const result = await searchVideos(constants.INITIAL_QUERY);
    expect(result.length).toBeGreaterThanOrEqual(3);
    expect(result).toMatchObject(expected);
  });

  it('does not return anything when video not found', async () => {
    const result = await searchVideos('garbo');
    expect(result).toMatchObject([]);
  });

  it('calls the /api endpoint when not in MOCK mode', async () => {
    constants.MOCK = false;

    await searchVideos(constants.INITIAL_QUERY);
    expect(fetch).toHaveBeenCalledWith(
      `${constants.API_PREFIX}/search/${constants.INITIAL_QUERY}`
    );
  });
});
