import Youtube from '../utils/Youtube';

const DURATION = ['PT1H55M30S', 'PT7M20S', 'PT50S'];

describe('Convertion time', () => {
  it('Convert DURATION value to standard time format', () => {
    expect(Youtube.YTDurationToSeconds(DURATION[0])).toBe('1:55:30');
  });

  it('Convert DURATION value to standard time format', () => {
    expect(Youtube.YTDurationToSeconds(DURATION[1])).toBe('7:20');
  });

  it('Convert DURATION value to standard time format', () => {
    expect(Youtube.YTDurationToSeconds(DURATION[2])).toBe('0:50');
  });
});

describe('Getting data', () => {
  it('Get data from Youtube API', async () => {
    const data = await Youtube.get('wizeline');
    const randomIndex = Math.floor(Math.random() * 17);
    expect(data).toBeDefined();
    expect(data).toBeInstanceOf(Array);
    expect(data[randomIndex].isFavorite).toBeFalsy();
    expect(data[randomIndex]).toEqual(
      expect.objectContaining({
        thumbnail: expect.stringMatching(/^https:?\/\//i),
        duration: expect.stringContaining(':'),
        videoId: expect.any(String),
      })
    );
  });
});
