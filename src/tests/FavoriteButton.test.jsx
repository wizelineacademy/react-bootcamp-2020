import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FavoriteButton from '../components/FavoriteButton/FavoriteButton.component';
import GlobalContext from '../state/GlobalContext';

Enzyme.configure({ adapter: new Adapter() });

window.scrollTo = jest.fn();

describe('Favorite Button', () => {
  const setFavorites = jest.fn();
  const favorites = [
    {
      videoId: 'ZyMjpxgTnRQ',
      title: '¿QUÉ TIPO DE ADOLESCENTE ERES? Test Divertidos de Personalidad',
      description:
        'Test Divertidos presenta: ¿QUÉ TIPO DE ADOLESCENTE ERES? Haz mi test de personalidad para descubrir qué clase de adolescente eres! ¡Que todos sepan ...',
      imageUrl: 'https://i.ytimg.com/vi/ZyMjpxgTnRQ/mqdefault.jpg',
    },
  ];
  const TestComponent = () => {
    return <FavoriteButton />;
  };

  it('Does not render if the user is not logged in', () => {
    const user = null;
    const wrapper = mount(
      <GlobalContext.Provider value={{ user, setFavorites }}>
        <TestComponent />
      </GlobalContext.Provider>
    );
    expect(wrapper.contains(TestComponent)).toBe(false);
  });

  it('Renders ok Add to favorite', () => {
    const user = ['test'];

    const wrapper = mount(
      <GlobalContext.Provider value={{ user, setFavorites }}>
        <TestComponent />
      </GlobalContext.Provider>
    );
    expect(wrapper.find(TestComponent).text()).toEqual('Add to favorites');
  });

  it('Renders ok Remove from favorites', () => {
    const user = ['test'];
    const activeVideo = { videoId: 'ZyMjpxgTnRQ' };
    const wrapper = mount(
      <GlobalContext.Provider value={{ user, setFavorites, favorites, activeVideo }}>
        <TestComponent />
      </GlobalContext.Provider>
    );
    expect(wrapper.find(TestComponent).text()).toEqual('Remove from favorites');
  });
});
