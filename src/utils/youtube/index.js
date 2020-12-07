// eslint-disable-next-line
const APIKEY = "AIzaSyB9PDUD5tOp5vzb8rPjNFD0v7XWP25hZVg";
//const APIURL = "http://localhost:3001";
const APIURL = "https://youtube.googleapis.com/youtube/v3/search";
// eslint-disable-next-line
export default async function youtube(search, maxResults=10) {
  //const url = `${APIURL}/${search}`;
  const url = `${APIURL}?key=${APIKEY}&type=video&part=snippet&q=${search}&maxResults=${maxResults}`;
  const response = await fetch(url);
  const jsonResponse = await response.json();
  return jsonResponse.items;
}