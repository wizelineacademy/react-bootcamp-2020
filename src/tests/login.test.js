import loginApi from '../utils/login';

describe('loginApi', () => {
  it('retrives autenticated user', async () => {
    const callToApi = await loginApi('wizeline', 'Rocks!');
    expect(callToApi).toBeInstanceOf(Object);
  });
});
