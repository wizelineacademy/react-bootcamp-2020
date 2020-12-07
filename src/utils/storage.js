export const storage = {
  get(key) {
    try {
      const item = window.localStorage.getItem(key);
      return JSON.parse(item);
    } catch (error) {
      console.log(`Error parsing storage key ${key}`);
      return null;
    }
  },

  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },

  addFavorite(id) {
    const favorites = new Set(this.get('favorites'));
    favorites.add(id);
    this.set('favorites', Array.from(favorites));
  },

  removeFavorite(id) {
    const favorites = new Set(this.get('favorites'));
    favorites.delete(id);
    this.set('favorites', Array.from(favorites));
  },
};
