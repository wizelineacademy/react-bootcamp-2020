const mockedUser = {
  id: '123',
  name: 'Wizeline',
  avatarUrl:
    'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

export default async function LoginApi(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user.username === 'wizeline' && user.password === 'Rocks!') {
        return resolve(mockedUser);
      }
      return reject(new Error('Username or password invalid'));
    }, 500);
  });
}
