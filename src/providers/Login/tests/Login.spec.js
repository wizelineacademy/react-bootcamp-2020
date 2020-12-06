import { act } from 'react-test-renderer';
import loginApi from '../Login.api';

const mockedUser = {
  id: '123',
  name: 'Wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

describe('render Api', () => {
  it('renders whith state React Component', async () => {
    let component;
    await act(async () => {
      component = loginApi('user', 'pass');
    });
    expect(component).rejects.toThrowError();
  });
  it('Correct user', async () => {
    let component;
    await act(async () => {
      component = loginApi('Wizeline', 'Rocks!');
    });
    expect(component).resolves.toEqual(mockedUser);
  });
});
