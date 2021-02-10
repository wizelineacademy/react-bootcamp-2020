const storage = {
  get(key) {
    try {
      const rawValue = window.localStorage.getItem(key);
      return JSON.parse(rawValue);
    } catch (error) {
      console.error(`Error parsing storage item "${key}".`);
      return null;
    }
  },

  set(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(`Error setting storage item "${key}`);
      return null;
    }
  },

  delete(key) {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(`Error deleting storage item "${key}`);
      return null;
    }
  },
};

export { storage };
