// login.api.js

const mockedUser = {
  id: '123',
  name: 'Wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

const loginApi = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'wizeline' && password === 'Rocks!') {
        return resolve(mockedUser);
      }
      return reject(new Error('Invalid username or password'));
    }, 500);
  });
};

export default loginApi;
