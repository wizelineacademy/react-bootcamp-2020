export default function getFavorites({ jwt }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (jwt) {
        return resolve(JSON.parse(localStorage.getItem('videosFavourites')));
      }
      return reject(new Error(`Don't add favourite`));
    }, 500);
  });
}
