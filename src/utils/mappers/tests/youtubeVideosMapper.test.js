import mockedSingleVideo from '../../../mocks/mockedSingleVideo.json';
import { toSimpleYoutubeData } from '../youtubeVideosMapper';

describe('youtubeSingleVideoMapper', () => {
  it('maps object from wawData', () => {
    const expected = {
      id: mockedSingleVideo.id.videoId,
      description: mockedSingleVideo.snippet.description,
      title: mockedSingleVideo.snippet.title,
      channelTitle: mockedSingleVideo.snippet.channelTitle,
      image: mockedSingleVideo.snippet.thumbnails.high.url,
    };

    const mappedObject = toSimpleYoutubeData(mockedSingleVideo);
    expect(mappedObject).toEqual(expected);
  });

  it('returns empty if falsy rawData', () => {
    const expected = {};

    const mappedObject = toSimpleYoutubeData(undefined);
    expect(mappedObject).toEqual(expected);
  });
});
