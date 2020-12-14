const API_PREFIX = '/api'; // 'https://youtube.googleapis.com/youtube/v3/search/';
const INITIAL_QUERY = 'Wizeline';
const FAVORITES = false;

const USERS = {
  wizeline: {
    password: 'Rocks!',
    u: {
      id: '123',
      name: 'wizeline',
      avatarUrl:
        'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
      favorites: [],
    },
  },
};

export { API_PREFIX, INITIAL_QUERY, USERS, FAVORITES };
