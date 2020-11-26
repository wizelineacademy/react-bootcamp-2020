import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export const useForm = (callback, initialState = {}) => {
  const history = useHistory();

  const [values, setValues] = useState(initialState);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (callback(values.username, values.password)) {
      history.push('/');
    }
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};
