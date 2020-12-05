const { default: loginApi } = require('./login');

describe('login', () => {
  it('logs succesfully', () => {
    const username = 'wizeline';
    const password = 'Rocks!';
    loginApi(username, password).then((user) => expect(user.name).toBe(username));
  });

  it('fails if should', () => {
    const username = 'wizeline';
    const password = 'Rocks!@';
    loginApi(username, password).catch((error) => expect(error).rejects);
  });
});
