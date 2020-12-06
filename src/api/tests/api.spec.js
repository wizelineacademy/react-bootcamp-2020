import { act } from 'react-test-renderer';
import getVideos from '../youtube';

describe('render Api', () => {
  it('renders whith state React Component', async () => {
    let component;
    await act(async () => {
      const authInstanceObj = { currentUser: { get: () => jest.fn() } };
      window.gapi = {
        auth2: 'd',
        client: {
          youtube: {
            search: { list: () => jest.fn() },
          },
        },
      };
      window.gapi.auth2 = { getAuthInstance: () => authInstanceObj };
      component = getVideos('search');
    });
    expect(component).resolves.toBe({});
  });
});
