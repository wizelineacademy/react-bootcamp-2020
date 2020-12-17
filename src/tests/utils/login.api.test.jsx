import loginApi from '../../utils/login.api';

describe('Login api', () => {
  it('Logins correct user', async () => {
    const user = await loginApi('wizeline', 'rocks');
    expect(user.id).toBe('123');
  });

  it('Throw error on incorrect user', async () => {
    const user = await loginApi('wizeline', 'rocks');
    expect(user.id).toBe('123');

    try {
      await loginApi('userName', 'password');
      expect(false).toBe(true);
    } catch (error) {
      expect(error.message).toBe('Username or password invalid');
    }
  });
});
