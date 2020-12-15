import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GlobalContext from '../state/GlobalContext';
import Login from '../pages/Login/Login.page';

Enzyme.configure({ adapter: new Adapter() });

window.scrollTo = jest.fn();
const TestComponent = () => {
  return <Login />;
};
const setUser = jest.fn();

describe('Login Modal', () => {
  it('Shows modal ', () => {
    const showLogin = true;
    const wrapper = mount(
      <GlobalContext.Provider value={{ setUser, showLogin }}>
        <TestComponent />
      </GlobalContext.Provider>
    );
    expect(wrapper.contains(TestComponent)).toBe(true);
  });

  it('Hides modal ', () => {
    const showLogin = false;
    const wrapper = mount(
      <GlobalContext.Provider value={{ setUser, showLogin }}>
        <TestComponent />
      </GlobalContext.Provider>
    );
    expect(wrapper.contains(TestComponent)).toBe(false);
  });
});
