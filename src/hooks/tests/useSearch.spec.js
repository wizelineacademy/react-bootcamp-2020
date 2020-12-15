import { renderHook } from '@testing-library/react-hooks';
import useSearch from '../useSearch';

const mockVideos = [
  {
    id: 'W0k7yFEL6FY',
    title: 'Wizeline 1',
    thumbnail:
      'https://i.ytimg.com/vi/W0k7yFEL6FY/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDrmfw7rqZeYIdSsBxt_C3qNCFboQ',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, fugit vitae? Laboriosam omnis facilis, enim quas, explicabo quae quibusdam deleniti eaque tenetur commodi perspiciatis impedit illum soluta iure odit esse.',
    isFav: false,
  },
];

describe('useSearch', () => {
  describe('with initial state empty', () => {
    it('should return an empty array', () => {
      const { result } = renderHook(() => useSearch(''));
      expect(result.current.videos).toStrictEqual([]);
    });
  });

  describe('with initial state not empty', () => {
    it('should return a not empty array', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useSearch('wizeline 1'));

      await waitForNextUpdate();

      expect(result.current).toMatchObject({
        videos: mockVideos,
        error: '',
      });
    });

    // TODO: Throw an error
    // it('and youTube api exception should return an error', async () => {
    //   const { result, waitForNextUpdate } = renderHook(() => useSearch(''));

    //   await waitForNextUpdate();

    //   console.log({ res: JSON.stringify(result.current) });
    // });
  });
});
