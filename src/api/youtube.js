export default async function getVideos(search) {
  const { result } = await window.gapi.client.youtube.search.list({
    maxResults: 25,
    part: ['id', 'snippet'],
    q: search,
  });
  return result ? result.items : [];
}
