import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import FavoritesPage from './Favorites.page';

describe('FavoritesPage', () => {
  const mockStore = configureStore();
  it('Should render message when there are no videos', () => {
    const initialState = {
      videos: {
        favoriteVideos: [],
      },
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<FavoritesPage store={store} />)
      .dive()
      .dive();
    expect(wrapper.contains('Add some videos to your favorite list')).toBeTruthy();
  });

  it('Should render videos if favorite videos is not empty', () => {
    const initialState = {
      videos: {
        favoriteVideos: [
          {
            id: '1',
            snippet: {
              title: 'Video Title 1',
              thumbnails: {
                high: {
                  url: 'imageUrl',
                },
              },
            },
          },
        ],
      },
    };
    const store = mockStore(initialState);
    const wrapper = shallow(<FavoritesPage store={store} />)
      .dive()
      .dive();
    expect(wrapper.contains('Add some videos to your favorite list')).toBeFalsy();
  });
});
