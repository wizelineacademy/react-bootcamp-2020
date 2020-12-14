import { videos } from '../constants/mock';
import { searchVideoById } from './searchVideoById';

const constants = require('../constants');

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        items: ['mocked'],
      }),
  })
);

describe('searchVideoById', () => {
  it('returns only one video', async () => {
    const video = videos[0];

    const result = await searchVideoById(video.id.videoId);
    expect(result).toMatchObject(video);
  });

  it('does not return anything when video not found', async () => {
    const result = await searchVideoById('garbo');
    expect(result).toBeFalsy();
  });

  it('calls the /api endpoint when not in MOCK mode', async () => {
    constants.MOCK = false;
    const video = videos[0];

    await searchVideoById(video.id.videoId);
    expect(fetch).toHaveBeenCalledWith(
      `${constants.API_PREFIX}/videos/${video.id.videoId}`
    );
  });
});
