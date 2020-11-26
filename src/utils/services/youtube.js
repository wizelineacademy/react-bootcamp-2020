// GET OPERATIONS
const triggerSearch = async (term) => {
  return fetch(
    `${process.env.REACT_APP_YOUTUBE_BASE_URL}/search?q=${term}&key=${process.env.REACT_APP_API_KEY}&part=id&part=snippet&maxResults=25`
  ).then((response) => {
    return response.json();
  });
};

export { triggerSearch };
