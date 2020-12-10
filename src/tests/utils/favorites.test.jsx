import {
  getFavoritesVideos,
  removeFromFavorites,
  addToFavorites,
  isFavoriteVideo,
} from '../../utils/favorites';

const videoMock = {
  key: 'key',
  videoId: 'key',
  title: 'Video title',
  description: 'this is a description',
  imageUrl: '',
  isFavorit: 'false',
};

describe('Favorites api', () => {
  it('set a video as favorite then check then remove', () => {
    addToFavorites(videoMock);
    const fetchedVideos = getFavoritesVideos();
    expect(fetchedVideos[0].key).toBe('key');
    const isFavorite = isFavoriteVideo(videoMock);
    expect(isFavorite).toBe(true);
    removeFromFavorites(videoMock);
    const fetchedVideos2 = getFavoritesVideos();
    expect(fetchedVideos2.length).toBe(0);
  });

  it('returns not favorite when there is no favorite videos', () => {
    const isFavorite = isFavoriteVideo(videoMock);
    expect(isFavorite).toBe(false);
  });
});
