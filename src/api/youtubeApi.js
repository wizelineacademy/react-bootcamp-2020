const maxResults = 25;

export async function getVideos(searchItem) {
  const part = ['snippet', 'id'];
  const { result } = await window.gapi.client.youtube.search.list({
    maxResults,
    part,
    q: searchItem,
  });

  return result.items;
}
