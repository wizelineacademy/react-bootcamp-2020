import mockedSingleVideoInfoApi from '../../../mocks/mockedSingleVideoInfoApi.json';
import { toSingleVideo } from '../youtubeSingleVideoMapper';

describe('youtubeSingleVideoMapper', () => {
  it('maps object from info api', () => {
    const expected = {
      id: mockedSingleVideoInfoApi.id,
      description: mockedSingleVideoInfoApi.snippet.description,
      title: mockedSingleVideoInfoApi.snippet.title,
      channelTitle: mockedSingleVideoInfoApi.snippet.channelTitle,
      image: mockedSingleVideoInfoApi.snippet.thumbnails.high.url,
    };

    const mappedObject = toSingleVideo(mockedSingleVideoInfoApi);
    expect(mappedObject).toEqual(expected);
  });

  it('returns empty if falsy rawData', () => {
    const expected = {};

    const mappedObject = toSingleVideo(undefined);
    expect(mappedObject).toEqual(expected);
  });
});
