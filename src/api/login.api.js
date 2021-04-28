const mockedUser = {
  id: '123',
  name: 'Wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

export default async function loginApi(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username.username === 'wizeline' && username.password === 'Rocks!') {
        return resolve(mockedUser);
      }
      return reject(new Error('Username or password invalid'));
    }, 500);
  });
}
