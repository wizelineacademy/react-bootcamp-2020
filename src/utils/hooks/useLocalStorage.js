import { useState } from 'react';

// Hook
export default function useLocalStorage(key, initialValue) {
  const getValue = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  };
  const getAllValues = () => {
    return { ...window.localStorage };
  };
  const [storedValue, setStoredValue] = useState(getValue);

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue, getValue, getAllValues];
}
