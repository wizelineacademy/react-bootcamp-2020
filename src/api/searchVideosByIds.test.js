import { videos } from '../constants/mock';
import { searchVideosByIds } from './searchVideosByIds';

const constants = require('../constants');

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        items: ['mocked'],
      }),
  })
);

describe('searchVideosByIds', () => {
  it('returns only one video', async () => {
    const videoIds = [videos[0].id.videoId, videos[1].id.videoId, videos[2].id.videoId];
    const expected = [videos[0], videos[1], videos[2]];

    const result = await searchVideosByIds(videoIds);

    expect(result).toMatchObject(expected);
  });

  it('does not return anything when video not found', async () => {
    const result = await searchVideosByIds(['garbo', 'garbo2', 'garbo3']);
    expect(result).toMatchObject([]);
  });

  it('calls the /api endpoint when not in MOCK mode', async () => {
    constants.MOCK = false;

    await searchVideosByIds(['garbo', 'garbo2', 'garbo3']);
    expect(fetch).toHaveBeenCalledWith(
      `${constants.API_PREFIX}/videos/garbo,garbo2,garbo3`
    );
  });
});
