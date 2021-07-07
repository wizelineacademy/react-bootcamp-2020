import loginApi from './login';

describe('login', () => {
  it('logs succesfully', async () => {
    const username = 'wizeline';
    const password = 'Rocks!';
    const user = await loginApi(username, password);
    expect(user.name).toEqual(username);
  });

  it('fails if should', async () => {
    try {
      const username = 'wizeline';
      const password = 'Rocks!@';
      await loginApi(username, password);
    } catch (e) {
      expect(e.message).toBe('Username or password invalid');
    }
  });
});
