// eslint-disable-next-line
//const APIKEY = "AIzaSyB9PDUD5tOp5vzb8rPjNFD0v7XWP25hZVg";
//Nueva 
const APIURL = "/api";
//const APIURL = "https://youtube.googleapis.com/youtube/v3/search";
// eslint-disable-next-line
export default async function searchVideos(search) {
  const url = `/api/search/${search}`;
  //const url = `${APIURL}?key=${APIKEY}&type=video&part=snippet&q=${search}&maxResults=${maxResults}`;
  const response = await fetch(url);
  const jsonResponse = await response.json();
  return jsonResponse.items;
}
