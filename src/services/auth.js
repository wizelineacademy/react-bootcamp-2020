import axios from 'axios';

export const baseURL =
  'https://my-json-server.typicode.com/fernando-espinosa-clip/react-bootcamp-2020';

const service = () => {
  const instance = axios.create({
    baseURL,
    timeout: 1000,
  });

  const signIn = (key, params) => {
    const { user, password } = params;
    return instance.get('/users', { params: { user_name: user, password } });
  };

  return {
    instance,
    signIn,
  };
};

const auth = service();

export default auth;
