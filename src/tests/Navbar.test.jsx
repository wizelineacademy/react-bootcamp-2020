import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GlobalContext from '../state/GlobalContext';
import Navbar from '../components/Navbar/Navbar.component';

Enzyme.configure({ adapter: new Adapter() });

window.scrollTo = jest.fn();
const TestComponent = () => {
  return <Navbar />;
};

describe('Favorite Button', () => {
  const setUser = jest.fn();

  it('Render Navbar', () => {
    const user = [];
    const wrapper = mount(
      <GlobalContext.Provider value={{ user, setUser }}>
        <TestComponent />
      </GlobalContext.Provider>
    );
    expect(wrapper.contains(TestComponent)).toBe(true);
  });

  it('Show «Favorites» link if user is logged in', () => {
    const user = ['test'];
    const wrapper = mount(
      <GlobalContext.Provider value={{ user, setUser }}>
        <TestComponent />
      </GlobalContext.Provider>
    );
    console.log('wrapper', wrapper.text());
    expect(wrapper.text()).toContain('Favorites');
  });

  it('Does not show «Favorites» link if user is not logged in', () => {
    const user = null;
    const wrapper = mount(
      <GlobalContext.Provider value={{ user, setUser }}>
        <TestComponent />
      </GlobalContext.Provider>
    );
    console.log('wrapper', wrapper.find(TestComponent).text());
    expect(wrapper.text()).toEqual(expect.not.stringContaining('Favorites'));
  });
});
